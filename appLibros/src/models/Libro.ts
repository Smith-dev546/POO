// Modelo que representa un libro en la biblioteca
class Libro {
    private id?: number;
    private titulo: string;
    private autor: string;
    private isbn: string;
    private disponible: boolean;

    constructor(titulo: string, autor: string, isbn: string, disponible: boolean = true, id?: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = disponible;
        this.id = id;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public isDisponible(): boolean {
        return this.disponible;
    }

    public setDisponible(disponible: boolean): void {
        this.disponible = disponible;
    }
}

export default Libro;