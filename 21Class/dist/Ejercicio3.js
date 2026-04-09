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
class Tarjeta {
    saldo;
    puntos;
    constructor(saldoInicial, puntosInicial) {
        this.saldo = saldoInicial,
            this.puntos = puntosInicial;
    }
}
class TarjetaCredito extends Tarjeta {
    constructor() {
        super(3000, 0);
    }
    iniciar() {
        console.log(`Saldo Inicial: $${this.saldo}`);
        this.procesarTransaccion();
    }
    procesarTransaccion() {
        if (this.saldo <= 0) {
            console.log(`Saldo Agotado. Cuenta Cerrada`);
            rl.close();
            return;
        }
        rl.question("Digite el monto de la transaccion (0 para salir): ", (dato) => {
            const monto = parseFloat(dato);
            if (isNaN(monto) || monto < 0) {
                console.log("Ingrese un monto Valido");
                return this.procesarTransaccion();
            }
            if (monto === 0) {
                console.log("Operacion finalizada por el cliente.");
                rl.close();
                return;
            }
            if (monto > this.saldo) {
                console.log("Fondos insuficientes.");
            }
            else {
                rl.question("A que POS hara la transaccion ? (1. Bac 2.Banco Agricola 3. Otros) ", (date) => {
                    const banco = parseFloat(date);
                    let calculo;
                    if (banco === 1) {
                        calculo = (monto * 3);
                        this.puntos += calculo;
                    }
                    else if (banco === 2) {
                        calculo = monto * 5;
                        this.puntos += calculo;
                    }
                    else {
                        console.log(`No aplicas a puntos`);
                    }
                    this.saldo -= monto;
                    console.log(`Transaccion realizada. Saldo restante: $${this.saldo}
                        Puntos actuiales: ${this.puntos};`);
                    this.procesarTransaccion();
                });
            }
        });
    }
}
const tarjeta = new TarjetaCredito();
tarjeta.iniciar();
//# sourceMappingURL=Ejercicio3.js.map