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
class Aplicacion {
    rl;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    Iniciar() {
        this.pedirNota();
    }
    pedirNota() {
        this.rl.question("Ingrese su nota: ", (respuesta) => {
            const nota = Number(respuesta);
            this.evaluarNota(nota);
            this.cerrar();
        });
    }
    evaluarNota(nota) {
        if (nota >= 0 && nota < 6) {
            console.log("Reprobado");
        }
        else if (nota >= 6 && nota <= 6.9) {
            console.log("Regular");
        }
        else if (nota >= 7 && nota <= 8.9) {
            console.log("Bueno");
        }
        else if (nota >= 9 && nota <= 10) {
            console.log("Excelente");
        }
        else {
            console.log("La nota ingresada no es valida");
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const Estudiante = new Aplicacion();
Estudiante.Iniciar();
//# sourceMappingURL=Ejercicio01.js.map