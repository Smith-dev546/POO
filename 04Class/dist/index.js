"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class POO {
    codigo;
    nombre;
    edad;
    laboratorio;
    parcial;
    constructor(_codigo, _nombre, _edad, _laboratorio, _parcial) {
        this.codigo = _codigo;
        this.nombre = _nombre;
        this.edad = _edad;
        this.laboratorio = _laboratorio;
        this.parcial = _parcial;
    }
    mostrarDatos() {
        console.log("El estudiante: " + this.nombre);
        console.log("Codigo: " + this.codigo);
        console.log("Tiene las siguientes notas - Laaboratorio: "
            + this.laboratorio + " Parcial: " + this.parcial);
    }
    mostrarNotas() {
        console.log("Lab: " + this.laboratorio + " Parcial: " + this.parcial);
    }
}
class Redes {
    name;
    lab1;
    lab2;
    lab3;
    parcial1;
    parcial2;
    parcial3;
    constructor(_name, _lab1, _lab2, _lab3, _parcial1, _parcial2, _parcial3) {
        this.name = _name;
        this.lab1 = _lab1;
        this.lab2 = _lab2;
        this.lab3 = _lab3;
        this.parcial1 = _parcial1;
        this.parcial2 = _parcial2;
        this.parcial3 = _parcial3;
    }
    mostrar() {
        let prom1 = ((this.lab1 * 0.60) + (this.parcial1 * 0.40)) / 3;
        let prom2 = ((this.lab2 * 0.60) + (this.parcial2 * 0.40)) / 3;
        let prom3 = ((this.lab3 * 0.60) + (this.parcial3 * 0.40)) / 3;
        let notaFinal = prom1 + prom2 + prom3;
        console.log(`Estudiante: ${this.name}
                     Lab1: ${this.lab1}
                     Lab2: ${this.lab2}
                     Lab3: ${this.lab3}

                     Parcial1: ${this.parcial1}
                     Parcial2: ${this.parcial2}
                     Parcial3: ${this.parcial3}

                     Nota Final: ${notaFinal}

                    `);
    }
}
//Objeto instanciado POO
let estudiante1 = new POO('u20241584', 'Jose Smith Mendez', 19, 10, 10);
//estudiante1.mostrarDatos();
//estudiante1.mostrarNotas();
//Objeto instanciado a Redes
let estudiante2 = new Redes('pepito Fuentes', 10, 9, 10, 9, 10, 9);
estudiante2.mostrar();
//# sourceMappingURL=index.js.map