"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class Persona {
    rl;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    Iniciar() {
        this.PedirDatos();
    }
    PedirDatos() {
        this.rl.question("Ingrese su nombre: ", (respuesta1) => {
            this.rl.question("Ingrese el anio de nacimiento: ", (respuesta2) => {
                this.rl.question("Ingrese su estado familiar: ", (respuesta3) => {
                    this.rl.question("Ingrese su sueldo: ", (respuesta4) => {
                        const nombre = respuesta1;
                        const DateNacimiento = Number(respuesta2);
                        const Estado = respuesta3.toLowerCase();
                        const Sueldo = Number(respuesta4);
                        this.EvaluarPersona(nombre, DateNacimiento, Estado, Sueldo);
                        this.Cerrar();
                    });
                });
            });
        });
    }
    EvaluarPersona(nombre, DateNacimiento, Estado, Sueldo) {
        let edad = 2026 - DateNacimiento;
        let estado = "";
        if (Estado.toLowerCase() === "soltero") {
            estado = "Soltero";
        }
        else if (Estado.toLowerCase() === "casado") {
            estado = "Casado";
        }
        else if (Estado.toLowerCase() === "viudo") {
            estado = "Viudo";
        }
        else {
            console.log("Ingrese un estado valido");
        }
        this.evaluarPrestamo(nombre, edad, estado, Sueldo);
    }
    evaluarPrestamo(nombre, edad, estado, Sueldo) {
        let prestamo;
        if (estado === "Casado" && edad >= 22 && Sueldo >= 450 && Sueldo <= 600) {
            prestamo = 2000;
            this.mostrar(nombre, edad, estado, Sueldo, prestamo || 0);
        }
        else if (estado === "Casado" && edad > 32 && Sueldo >= 601 && Sueldo <= 1000) {
            prestamo = 3000;
            this.mostrar(nombre, edad, estado, Sueldo, prestamo || 0);
        }
        else if (estado === "Soltero" && edad >= 22 && Sueldo >= 400 && Sueldo <= 600) {
            prestamo = 2500;
            this.mostrar(nombre, edad, estado, Sueldo, prestamo || 0);
        }
        else if (estado === "Soltero" && edad >= 30 && Sueldo >= 601 && Sueldo <= 1000) {
            prestamo = 3500;
            this.mostrar(nombre, edad, estado, Sueldo, prestamo || 0);
        }
        else if (estado === "Viudo" && edad >= 35 && Sueldo >= 600 && Sueldo <= 1500) {
            prestamo = 4000;
            this.mostrar(nombre, edad, estado, Sueldo, prestamo || 0);
        }
        else {
            console.log(`No se le puede otorgar un prestamo`);
        }
    }
    mostrar(nombre, edad, estado, Sueldo, prestamo) {
        console.log(`
                    ${nombre}, ${estado} de ${edad} anios, con sueldo de $${Sueldo}
                    Se le permite otorgar el prestamos de $${prestamo}`);
    }
    Cerrar() {
        this.rl.close();
    }
}
const usuario = new Persona();
usuario.Iniciar();
//# sourceMappingURL=index.js.map