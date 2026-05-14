// Modelo que representa a un usuario de la biblioteca
class Usuario {
    // Atributos privados - solo accesibles por getters (encapsulamiento)
    private id?: number;
    private nombre: string;
    private email: string;

    // Constructor
    constructor(nombre: string, email: string, id?: number) {
        this.nombre = nombre;
        this.email = email;
        this.id = id;
    }

    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getEmail(): string {
        return this.email;
    }

    public getId(): number | undefined {
        return this.id;
    }
}

export default Usuario;