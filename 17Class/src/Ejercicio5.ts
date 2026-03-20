abstract class Pago {
    total: string;
    constructor(total:string){
        this.total=total;
    }
    abstract ProcesarPago(a:string): void;
}

class Efectivo extends Pago {
    ProcesarPago(efectivo:string): void {
        let cambio= parseFloat(efectivo)-parseFloat(this.total);

        console.log(`Su cambio es de: $${cambio} dolares`)
    }
}

class Tarjeta extends Pago {
    ProcesarPago(saldo:string): void {
        if(saldo >= this.total){
            let exec= parseFloat(saldo)-parseFloat(this.total)
            let nuevoSaldo= exec;
            console.log(`Pago realizado exitosamente.
                        Saldo en tarjeta: $${nuevoSaldo}`)
        }
        else{
            console.log("Declinada");
        }
    }
}


class Transferencia extends Pago {

    ProcesarPago(saldo: string): void {
        let exec= parseFloat(this.total)-parseFloat(this.total)
        console.log("cuenta a $"+exec)
    }
}

const pago1 = new Efectivo("50");
pago1.ProcesarPago("100");

const pago2 = new Tarjeta("50");
pago2.ProcesarPago("40");

const pago3 = new Transferencia("0");
pago3.ProcesarPago("0");