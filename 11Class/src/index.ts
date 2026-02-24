import * as readline from "readline";

class Programa{
    private rl: readline.Interface;
    constructor(){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    iniciar(): void {
        this.pedirNumero();
    }

    pedirNumero(): void{
        this.rl.question("Ingresa un numer: ", (respuesta: string) => {
            const numero = Number(respuesta);
            this.evaluarparoinpar(numero);
            this.cerrar();
        });
    }

    evaluarparoinpar(numero: number): void {
        if(numero % 2){
            console.log("Numero inpar");
        }else{
            console.log("Numero par")
        }
    }

    cerrar(): void{
        this.rl.close();
    }
}

const app = new Programa();
app.iniciar();