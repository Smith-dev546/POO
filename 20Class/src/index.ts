class Banco{
    cliente: string;
    private saldo: number;

    constructor(cliente:string, saldo: number){
        this.cliente = cliente;
        this.saldo = saldo;
    }

    //Get
    get NuevoSaldo(): number{
        return this.saldo
    }

    //SET
    set NuevoSaldo(valor: number){

        if(valor >= 0){
            this.saldo = valor;
        }else{
            console.log(`El valor debe ser cero o mayor que cero`)
        }
        
    }

    mostrar(): void{
        console.log(`Saldo: ${this.saldo}`)
    }

}

// let objeto = new Banco("pepito", 100);
// objeto.NuevoSaldo=1500;
// objeto.cliente = "Juan";
// objeto.mostrar();

class movimientos extends Banco{
    deposito: number;
    constructor(nombre:string, saldo:number, deposito:number){
        super(nombre, saldo)//
        this.deposito = deposito;
    }

    procesoDep(): void{
        const nuevoMonto = this.NuevoSaldo + dep
        console.log(`Tu saldo actual es de: $${nuevoMonto}`)
        this.comision(nuevoMonto);
    }

    comision(nuevoMonto: number): void{
        let salida = nuevoMonto - 1;
        console.log(`Te cobre por laa transferencia  nuevo saldo $${salida}`)
    }
}

let dep = 25;
let proceso = new movimientos("Pepito", 100, dep)
proceso.procesoDep();