import { Request, Response } from "express";
import Database from "../config/database";
import Libro from "../models/Libro";

class LibroController {

    public async crear(req: Request, res: Response) {
        const { titulo, autor, isbn } = req.body;

        const libro = new Libro(titulo, autor, isbn);

        const db = Database.getInstance().getConnection();

        await db.query(
            "INSERT INTO libros(titulo, autor, isbn, disponible) VALUES (?, ?, ?, ?)",
            [libro.getTitulo(), libro.getAutor(), libro.getIsbn(), libro.isDisponible()]
        );

        res.status(201).json({ mensaje: "Libro registrado correctamente" });
    }

    public async listar(req: Request, res: Response) {
        const db = Database.getInstance().getConnection();

        const [rows] = await db.query("SELECT * FROM libros");

        res.json(rows);
    }

    public async obtenerPorId(req: Request, res: Response) {
        const { id } = req.params;

        const db = Database.getInstance().getConnection();

        const [rows]: any = await db.query(
            "SELECT * FROM libros WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ mensaje: "Libro no encontrado" });
        }

        res.json(rows[0]);
    }

    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { titulo, autor, isbn } = req.body;

        const db = Database.getInstance().getConnection();

        const [result]: any = await db.query(
            "UPDATE libros SET titulo = ?, autor = ?, isbn = ? WHERE id = ?",
            [titulo, autor, isbn, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Libro no encontrado" });
        }

        res.json({ mensaje: "Libro actualizado correctamente" });
    }

    public async eliminar(req: Request, res: Response) {
        const { id } = req.params;

        const db = Database.getInstance().getConnection();

        // Verificar que el libro no tenga préstamos activos antes de eliminar
        const [prestamos]: any = await db.query(
            "SELECT id FROM prestamos WHERE libro_id = ? AND activo = true",
            [id]
        );

        if (prestamos.length > 0) {
            return res.status(400).json({
                mensaje: "No se puede eliminar: el libro tiene préstamos activos"
            });
        }

        const [result]: any = await db.query(
            "DELETE FROM libros WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Libro no encontrado" });
        }

        res.json({ mensaje: "Libro eliminado correctamente" });
    }
}

export default new LibroController();