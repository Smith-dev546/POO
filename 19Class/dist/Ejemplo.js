"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CuentBancaria {
    _saldo;
    constructor(saldo) {
        this._saldo = saldo;
    }
    //Getter
    get saldo() {
        return this._saldo;
    }
    //Setter
    set saldo(valor) {
        if (valor < 0) {
            console.log(`No se permite saldo negativo`);
            return;
        }
        this._saldo = valor;
    }
    //Metodo para depositar
    depositar(monto) {
        if (monto > 0) {
            this._saldo += monto;
        }
    }
}
const cuenta = new CuentBancaria(1000);
cuenta.saldo = 5000; //
cuenta.depositar(500); //
console.log(cuenta.saldo); //1500
//# sourceMappingURL=Ejemplo.js.map