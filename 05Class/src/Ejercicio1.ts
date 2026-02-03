/*

Ejercicio 1

*/
// class GYM{
//     peso:number;
//     estatura: number;

//     constructor(peso:number, estatura:number){
//         this.peso=peso;
//         this.estatura=estatura;
//     }

//     public IMC(): void{
//         let estado;
//     let imc= (this.peso/(this.estatura*this.estatura));

//     console.log("El IMC es de: "+ imc)

//     if(imc < 18.5){
//         estado = "Bajo peso";
//     }else if(imc>=18.5 && imc<= 24.9){
//         estado = "Normal";
//     } else if(imc >= 25 && imc <= 29.9){
//          estado = "sobrepeso";
//     }else if(imc>=30){
//          estado = "Obesidad";
//     }

//     console.log(`Su IMC es de: ${imc} y usted esta en el estado de: ${estado}`);

//     //Interpretacion
//     //Bajo peso: Menos de 18.5
//     //Normal: 18.5 - 24.9
//     //Sobrepeso:25.0 - 29.9
//     //Obesidad 30.0 o mas
//     }
// }


// let cliente = new GYM(105,1.76);
// cliente.IMC();

/*

Ejercicio 2

*/


// class Conversor{
//     temp:number;

//     constructor(temp:number){
//         this.temp=temp;

//     }

//     public FC(): void{
//         //F 32/1.8
//         let celsius= (this.temp - 32)/1.8;
//         console.log("La temperatura en Celsius es de: "+ celsius);
//     }
//     public CF():void{
//         //C = 5/9(F - 32)
//         let farenheit = (this.temp * 9/5) + 32;
//         console.log("La temperatura en Farenheit es de: "+ farenheit);
//     }
//     public KF():void{
//         let farenheit = (this.temp - 273.15) * 9/5 + 32;
//         console.log("La temperatura en Farenheit es de: "+ farenheit);

//     }
//     public KC(): void{
//         let Celsius = (this.temp - 273.15);

//     }
// }

// let conversor1 = new Conversor(100);
// conversor1.FC();
// conversor1.CF();
// conversor1.KF();
// conversor1.KC();

/*

Ejercicio 3

*/

class instituto{
    nombre:string;
    falta: number;

    constructor(nam:string,falta:number){
        this.nombre=nam;
        this.falta=falta;
    }

   public infraccion(): void {
        let sansion
        let falta
        if (this.falta == 1) {
            falta = "Llegada tardía"
            sansion = 1
        } else if (this.falta == 2) {
            falta = "Caminar por los pasillos en horas de clase"
            sansion = 3
        } else if (this.falta == 3) {
            falta = "No andar vestimenta apropiada"
            sansion = 5
        } else if (this.falta == 4) {
            falta = "No hacer uso adecuado de las instalaciones"
            sansion = 10
        }

        console.log(`
            Nombre: ${this.nombre}
            Infraccion: ${this.falta} (${falta})
            Sansion: $${sansion}`)
    }
}

let estudiante = new instituto("Pepito", 3);
estudiante.infraccion()