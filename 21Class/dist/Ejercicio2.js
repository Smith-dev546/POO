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
class sistemaColores {
    colores = [];
}
class JuegoColores extends sistemaColores {
    combinaciones = {
        "rojo-azul": "morado",
        "azul-amarillo": "verde",
        "rojo-amarillo": "naranja",
        "rojo-verde": "marron",
        "negro-blanco": "gris"
    };
    pedirColores() {
        this.colores = [];
        const pedir = (i) => {
            if (i < 2) {
                rl.question(`Ingrese el color ${i + 1}: `, (color) => {
                    this.colores.push(color.toLowerCase());
                    pedir(i + 1);
                });
            }
            else {
                this.mezclarColores();
                rl.close();
            }
        };
        pedir(0);
    }
    mezclarColores() {
        console.log(`Colores ingresados: ${this.colores}`);
        let resultadoFinal = "No existe Combinacion";
        for (let i = 0; i < this.colores.length; i++) {
            for (let j = i + 1; j < this.colores.length; j++) {
                const clave1 = `${this.colores[i]}-${this.colores[j]}`;
                const clave2 = `${this.colores[j]}-${this.colores[i]}`;
                if (this.combinaciones[clave1]) {
                    resultadoFinal = this.combinaciones[clave1];
                }
                else if (this.combinaciones[clave2]) {
                    resultadoFinal = this.combinaciones[clave2];
                }
            }
        }
        console.log(`Resultado de la mezcla: ${resultadoFinal}`);
    }
}
const juego = new JuegoColores();
juego.pedirColores();
//# sourceMappingURL=Ejercicio2.js.map