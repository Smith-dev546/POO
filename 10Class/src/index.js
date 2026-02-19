var Persona = /** @class */ (function () {
    function Persona(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    Persona.prototype.mostrar = function () {
        alert(" \n                El nombre es: ".concat(this.nombre, "\n                Su edad es: ").concat(this.edad, "\n                Su telefono es: ").concat(this.telefono, "\n            "));
    };
    return Persona;
}());
var nombre = prompt("Ingrese su nombre:") || "";
var edad = Number(prompt("Ingrese su edad:") || "");
var telefono = Number(prompt("Ingrese su telefono:") || "");
var people = new Persona(nombre, 20, 22577777);
people.mostrar();
