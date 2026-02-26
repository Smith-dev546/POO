class animal{
    nombre: string;
    categoria: string;
    raza: string;

    constructor(nombre:string, categoria:string, raza:string){
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
    }

    mostrar(): void{
        console.log(`
                    El animal es un: ${this.categoria} 
                    Su nombre es: ${this.nombre}`);
    }

}

class Encargado extends animal{
    duenio:string;

    constructor(nombre:string, categoria:string, raza: string, duenio:string){
        super(nombre, categoria, raza);
        this.duenio = duenio;
    }

    mensaje(): void{
        console.log(`
                    El animalito es un: ${this.categoria}
                    Se llama: ${this.nombre}
                    Su duenio es: ${this.duenio}`)
    }
}

class Vendedor extends Encargado{
    precio: number;

    constructor(nombre:string, categoria:string, raza: string, duenio: string, precio: number){
        super(nombre, categoria, raza, duenio);
        this.precio = precio
    }

    vender(): void{
        console.log(`
                    Se vende a: $${this.precio}`);
    }
}

const cliente = new Vendedor("Rocky", "Perro", "Pitbul", "Pepito", 30);
cliente.mostrar();
cliente.mensaje();
cliente.vender();