//Ejemplo1

// class Usuario{
//     public nombre: string;

//     constructor(nombre: string){
//         this.nombre = nombre;
//     }
// }

// const u = new Usuario('Juan');
// console.log(u.nombre);


//Ejemplo2

// class Usuario{
//     private password: string;

//     constructor(pass: string){
//         this.password = pass;
//     }

//     validar(pass: string): boolean{
//         return this.password === pass;
//     }

// }

// const u = new Usuario("1234");
//         console.log(u.validar("1234"));

//Ejemplo 3

class Persona{
    protected edad: number;

    constructor(edad: number){
        this.edad = edad;
    }
}

class Estudiante extends Persona{
    mostrarEdad(){
        return this.edad;
    }
}

const e = new Estudiante(20);
//console.log(e.edad)   => Esto da error por que protected solo se puede usar hasta la hija y no desde afuera
console.log(e.mostrarEdad());


