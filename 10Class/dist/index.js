"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    nombre;
    edad;
    telefono;
    constructor(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    mostrar() {
        alert(`El nombre es: ${this.nombre}`);
        alert(`Su edad es: ${this.edad}`);
        alert(`Su edad es: ${this.telefono}`);
    }
}
let nombre = prompt("Ingrese su nombre:") || "";
let edad = Number(prompt("Ingrese su edad:") || "");
let telefono = Number(prompt("Ingrese su telefono:") || "");
let people = new Persona(nombre, 20, 22577777);
people.mostrar();
//# sourceMappingURL=index.js.map