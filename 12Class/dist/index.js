"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class animal {
    nombre;
    categoria;
    raza;
    constructor(nombre, categoria, raza) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
    }
    mostrar() {
        console.log(`
                    El animal es un: ${this.categoria} 
                    Su nombre es: ${this.nombre}`);
    }
}
class Encargado extends animal {
    duenio;
    constructor(nombre, categoria, raza, duenio) {
        super(nombre, categoria, raza);
        this.duenio = duenio;
    }
    mensaje() {
        console.log(`
                    El animalito es un: ${this.categoria}
                    Se llama: ${this.nombre}
                    Su duenio es: ${this.duenio}`);
    }
}
class Vendedor extends Encargado {
    precio;
    constructor(nombre, categoria, raza, duenio, precio) {
        super(nombre, categoria, raza, duenio);
        this.precio = precio;
    }
    vender() {
        console.log(`
                    Se vende a: $${this.precio}`);
    }
}
const cliente = new Vendedor("Rocky", "Perro", "Pitbul", "Pepito", 30);
cliente.mostrar();
cliente.mensaje();
cliente.vender();
//# sourceMappingURL=index.js.map