"use strict";
//Representar una persona con datos básicos y una acción que describe quién es
Object.defineProperty(exports, "__esModule", { value: true });
let persona = {
    nombre: "Pepito Fuentes",
    edad: 20,
    altura: 170,
    profesion: "Estudiante",
    nacionalidad: "Salvadoreño",
    saludar() {
        console.log("Hola, Soy " + this.nombre + ", y soy de nacionalidad " + this.nacionalidad);
    }
};
persona.saludar();
//# sourceMappingURL=Ejercicio01.js.map