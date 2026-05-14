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
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Persona {
    nota = 0;
}
class Estudiante extends Persona {
    pedirnota() {
        rl.question("Ingrese su nota obtenida: ", (calificacion) => {
            this.nota = parseFloat(calificacion);
            this.Evaluarnota();
            rl.close();
        });
    }
    Evaluarnota() {
        console.log(`Nota ingresada: ${this.nota}`);
        if (this.nota >= 90 && this.nota <= 100) {
            console.log(`Excelente, Obtuvistes una beca del 50%`);
        }
        else if (this.nota >= 75 && this.nota < 90) {
            console.log(`Bueno, beca del 25%`);
        }
        else if (this.nota >= 60 && this.nota < 75) {
            console.log(`Suficiente, sin beca`);
        }
        else if (this.nota < 60) {
            console.log(`Reprobado, debe pagar examen especial`);
        }
        else {
            console.log(`La nota ingresada no es valida`);
        }
    }
}
const Estudiante1 = new Estudiante();
Estudiante1.pedirnota();
//# sourceMappingURL=Ejercicio1.js.map