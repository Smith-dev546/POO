import { parse } from "path";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Tarjeta{
    protected saldo: number;
    protected puntos: number;

    constructor(saldoInicial: number, puntosInicial: number){
        this.saldo = saldoInicial,
        this.puntos = puntosInicial
    }

    abstract iniciar(): void;
}

class TarjetaCredito extends Tarjeta{
    constructor(){
        super(3000, 0);
    }

    iniciar(): void{
        console.log(`Saldo Inicial: $${this.saldo}`);
        this.procesarTransaccion();
    }

    private procesarTransaccion(): void{
        if( this.saldo <= 0){
            console.log(`Saldo Agotado. Cuenta Cerrada`);
            rl.close();
            return;
        }

        rl.question("Digite el monto de la transaccion (0 para salir): ", (dato)=> {
            const monto = parseFloat(dato);
            if(isNaN(monto) || monto < 0){
                console.log("Ingrese un monto Valido");
                return this.procesarTransaccion();
            }
            if(monto === 0){
                console.log("Operacion finalizada por el cliente.");
                rl.close();
                return;
            }
            if(monto > this.saldo){
                console.log("Fondos insuficientes.");
            }else {
                rl.question("A que POS hara la transaccion ? (1. Bac 2.Banco Agricola 3. Otros) ", (date)=>{
            const banco = parseFloat(date);

            let calculo
            if (banco === 1){
                calculo = (monto * 3);
                this.puntos += calculo;
            }else if( banco === 2){
                calculo = monto * 5;
                this.puntos += calculo;
            }else {
                console.log(`No aplicas a puntos`)
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