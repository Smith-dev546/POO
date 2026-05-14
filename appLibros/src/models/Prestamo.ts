// Modelo que representa un préstamo de libro a un usuario
class Prestamo {
    private id?: number;
    private usuarioId: number;
    private libroId: number;
    private fechaPrestamo: Date;
    private fechaDevolucion: Date | null;
    private activo: boolean;

    constructor(
        usuarioId: number,
        libroId: number,
        fechaPrestamo: Date = new Date(),
        activo: boolean = true,
        fechaDevolucion: Date | null = null,
        id?: number
    ) {
        this.usuarioId = usuarioId;
        this.libroId = libroId;
        this.fechaPrestamo = fechaPrestamo;
        this.activo = activo;
        this.fechaDevolucion = fechaDevolucion;
        this.id = id;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getUsuarioId(): number {
        return this.usuarioId;
    }

    public getLibroId(): number {
        return this.libroId;
    }

    public getFechaPrestamo(): Date {
        return this.fechaPrestamo;
    }

    public getFechaDevolucion(): Date | null {
        return this.fechaDevolucion;
    }

    public isActivo(): boolean {
        return this.activo;
    }

    public devolver(): void {
        this.activo = false;
        this.fechaDevolucion = new Date();
    }
}

export default Prestamo;