import { Request, Response } from "express";
import Database from "../config/database";
import Prestamo from "../models/Prestamo";

// Límite máximo de préstamos activos por usuario
const MAX_PRESTAMOS_ACTIVOS = 3;

class PrestamoController {

    /**
     * Crear un nuevo préstamo.
     * Validaciones:
     *   1. El libro debe existir y estar disponible
     *   2. El usuario debe existir
     *   3. El usuario no debe superar el límite de préstamos activos
     */
    public async crear(req: Request, res: Response) {
        const { usuarioId, libroId } = req.body;

        const db = Database.getInstance().getConnection();

        // --- Validación 1: ¿El libro existe y está disponible? ---
        const [libros]: any = await db.query(
            "SELECT * FROM libros WHERE id = ? AND disponible = true",
            [libroId]
        );

        if (libros.length === 0) {
            return res.status(400).json({
                mensaje: "El libro no está disponible o no existe"
            });
        }

        // --- Validación 2: ¿El usuario existe? ---
        const [usuarios]: any = await db.query(
            "SELECT * FROM usuarios WHERE id = ?",
            [usuarioId]
        );

        if (usuarios.length === 0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        // --- Validación 3: ¿El usuario tiene menos de MAX_PRESTAMOS_ACTIVOS? ---
        const [prestamosActivos]: any = await db.query(
            "SELECT COUNT(*) AS total FROM prestamos WHERE usuario_id = ? AND activo = true",
            [usuarioId]
        );

        const totalActivos: number = prestamosActivos[0].total;

        if (totalActivos >= MAX_PRESTAMOS_ACTIVOS) {
            return res.status(400).json({
                mensaje: `El usuario ya tiene ${MAX_PRESTAMOS_ACTIVOS} préstamos activos (límite máximo)`
            });
        }

        // --- Crear el préstamo usando el modelo ---
        const prestamo = new Prestamo(usuarioId, libroId);

        // Insertar el préstamo en la base de datos
        await db.query(
            "INSERT INTO prestamos(usuario_id, libro_id, fecha_prestamo, activo) VALUES (?, ?, ?, ?)",
            [prestamo.getUsuarioId(), prestamo.getLibroId(), prestamo.getFechaPrestamo(), prestamo.isActivo()]
        );

        // Marcar el libro como no disponible
        await db.query(
            "UPDATE libros SET disponible = false WHERE id = ?",
            [libroId]
        );

        res.status(201).json({ mensaje: "Préstamo registrado correctamente" });
    }

    /**
     * Devolver un libro: cierra el préstamo y libera el libro
     */
    public async devolver(req: Request, res: Response) {
        const { id } = req.params;

        const db = Database.getInstance().getConnection();

        // Verificar que el préstamo exista y esté activo
        const [prestamos]: any = await db.query(
            "SELECT * FROM prestamos WHERE id = ? AND activo = true",
            [id]
        );

        if (prestamos.length === 0) {
            return res.status(404).json({
                mensaje: "Préstamo no encontrado o ya fue devuelto"
            });
        }

        const prestamoData = prestamos[0];

        // Crear instancia del modelo y marcar como devuelto
        const prestamo = new Prestamo(
            prestamoData.usuario_id,
            prestamoData.libro_id,
            prestamoData.fecha_prestamo,
            prestamoData.activo,
            null,
            prestamoData.id
        );
        prestamo.devolver(); // El modelo actualiza activo=false y pone la fechaDevolucion

        // Actualizar el préstamo en la base de datos
        await db.query(
            "UPDATE prestamos SET activo = false, fecha_devolucion = ? WHERE id = ?",
            [prestamo.getFechaDevolucion(), id]
        );

        // Volver a marcar el libro como disponible
        await db.query(
            "UPDATE libros SET disponible = true WHERE id = ?",
            [prestamoData.libro_id]
        );

        res.json({ mensaje: "Libro devuelto correctamente" });
    }

    /**
     * Listar todos los préstamos con información del usuario y del libro
     */
    public async listar(req: Request, res: Response) {
        const db = Database.getInstance().getConnection();

        const [rows] = await db.query(`
            SELECT 
                p.id,
                u.nombre AS usuario,
                l.titulo AS libro,
                p.fecha_prestamo,
                p.fecha_devolucion,
                p.activo
            FROM prestamos p
            INNER JOIN usuarios u ON p.usuario_id = u.id
            INNER JOIN libros l ON p.libro_id = l.id
            ORDER BY p.fecha_prestamo DESC
        `);

        res.json(rows);
    }

    /**
     * Listar préstamos activos de un usuario específico
     */
    public async listarPorUsuario(req: Request, res: Response) {
        const { usuarioId } = req.params;

        const db = Database.getInstance().getConnection();

        const [rows] = await db.query(`
            SELECT 
                p.id,
                l.titulo AS libro,
                l.autor,
                p.fecha_prestamo,
                p.activo
            FROM prestamos p
            INNER JOIN libros l ON p.libro_id = l.id
            WHERE p.usuario_id = ? AND p.activo = true
        `, [usuarioId]);

        res.json(rows);
    }
}

export default new PrestamoController();