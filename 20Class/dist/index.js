"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    cliente;
    saldo;
    constructor(cliente, saldo) {
        this.cliente = cliente;
        this.saldo = saldo;
    }
    //Get
    get NuevoSaldo() {
        return this.saldo;
    }
    //SET
    set NuevoSaldo(valor) {
        if (valor >= 0) {
            this.saldo = valor;
        }
        else {
            console.log(`El valor debe ser cero o mayor que cero`);
        }
    }
    mostrar() {
        console.log(`Saldo: ${this.saldo}`);
    }
}
// let objeto = new Banco("pepito", 100);
// objeto.NuevoSaldo=1500;
// objeto.cliente = "Juan";
// objeto.mostrar();
class movimientos extends Banco {
    deposito;
    constructor(nombre, saldo, deposito) {
        super(nombre, saldo); //
        this.deposito = deposito;
    }
    procesoDep() {
        const nuevoMonto = this.NuevoSaldo + dep;
        console.log(`Tu saldo actual es de: $${nuevoMonto}`);
        this.comision(nuevoMonto);
    }
    comision(nuevoMonto) {
        let salida = nuevoMonto - 1;
        console.log(`Te cobre por laa transferencia  nuevo saldo $${salida}`);
    }
}
let dep = 25;
let proceso = new movimientos("Pepito", 100, dep);
proceso.procesoDep();
//# sourceMappingURL=index.js.map