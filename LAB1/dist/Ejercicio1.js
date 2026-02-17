"use strict";
//Ejercicio 1
Object.defineProperty(exports, "__esModule", { value: true });
// Codifique un Ejercicio donde el objeto necesite 5 atributos como: nombre,
// apellido, teléfono, correo, codIdentificacion. Solamente el ultimo atributo debe de
// tener su modificador como privado. Imprima en pantalla los atributos del objeto sin
// utilizar métodos
class Persona {
    nombre;
    apellido;
    telefono;
    correo;
    codIdentificacion;
    constructor(nombre, apellido, telefono, correo, codIdentificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}
let Persona1 = new Persona("Pepito", "Fuentes", 12345678, "pepito@kapo.com", "U1234");
console.log(`Nombre: ${Persona1.nombre}`);
console.log(`Apellido: ${Persona1.apellido}`);
console.log(`Telefono: ${Persona1.telefono}`);
console.log(`correo: ${Persona1.correo}`);
//console.log(`codIdentificacion: ${Persona1.codIdentificacion}`);      Esta Privado por eso  no puede ap[arecer en cobnsola
//# sourceMappingURL=Ejercicio1.js.map