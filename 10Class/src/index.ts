class Persona{
    nombre: string;
    edad: number;
    telefono: number;

    constructor(nombre:string, edad:number, telefono:number){
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }

    mostrar(): void{
        alert(` 
                El nombre es: ${this.nombre}
                Su edad es: ${this.edad}
                Su telefono es: ${this.telefono}
            `);
    }
}

let nombre: string = prompt("Ingrese su nombre:") || "";
let edad: number = Number(prompt("Ingrese su edad:") || "");
let telefono: number = Number(prompt("Ingrese su telefono:") || "");
let people = new Persona(nombre, 20, 22577777);
people.mostrar();