import * as readline from "readline";

class Aplicacion{
    private rl: readline.Interface;
    constructor(){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    Iniciar(): void{
        this.pedirNota();
    }

    pedirNota(): void{
        this.rl.question("Ingrese su nota: ", (respuesta: string) => {
            const nota = Number(respuesta);
            this.evaluarNota(nota);
            this.cerrar();
        });
    }

    evaluarNota(nota: number): void {
        if(nota >= 0 && nota < 6){
            console.log("Reprobado");
    }else if(nota >= 6 && nota<= 6.9){
        console.log("Regular");
    }else if(nota >= 7 && nota <= 8.9){
        console.log("Bueno");
    }else if(nota >= 9 && nota <= 10){
        console.log("Excelente");
    }else{
        console.log("La nota ingresada no es valida");
    }
    }

    cerrar(): void {
        this.rl.close();
    }
}

const Estudiante = new Aplicacion();
Estudiante.Iniciar();