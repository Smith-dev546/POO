"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pago {
    total;
    constructor(total) {
        this.total = total;
    }
}
class Efectivo extends Pago {
    ProcesarPago(efectivo) {
        let cambio = parseFloat(efectivo) - parseFloat(this.total);
        console.log(`Su cambio es de: $${cambio} dolares`);
    }
}
class Tarjeta extends Pago {
    ProcesarPago(saldo) {
        if (saldo >= this.total) {
            let exec = parseFloat(saldo) - parseFloat(this.total);
            let nuevoSaldo = exec;
            console.log(`Pago realizado exitosamente.
                        Saldo en tarjeta: $${nuevoSaldo}`);
        }
        else {
            console.log("Declinada");
        }
    }
}
class Transferencia extends Pago {
    ProcesarPago(saldo) {
        let exec = parseFloat(this.total) - parseFloat(this.total);
        console.log("cuenta a $" + exec);
    }
}
const pago1 = new Efectivo("50");
pago1.ProcesarPago("100");
const pago2 = new Tarjeta("50");
pago2.ProcesarPago("40");
const pago3 = new Transferencia("0");
pago3.ProcesarPago("0");
//# sourceMappingURL=Ejercicio5.js.map