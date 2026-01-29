class POO{
    codigo: string;
    nombre: string;
    edad: number;
    laboratorio: number;
    parcial: number;

    constructor(_codigo:string, _nombre:string, _edad:number, _laboratorio:number, _parcial:number ){
        this.codigo=_codigo;
        this.nombre=_nombre;
        this.edad=_edad;
        this.laboratorio=_laboratorio;
        this.parcial=_parcial;
    }
    public mostrarDatos(): void{
        console.log("El estudiante: "+this.nombre);
        console.log("Codigo: "+this.codigo);
        console.log("Tiene las siguientes notas - Laaboratorio: "
            +this.laboratorio+ " Parcial: "+this.parcial);
    }
    public mostrarNotas(): void{
        console.log("Lab: "+this.laboratorio+" Parcial: "+this.parcial);
    }
}

class Redes{
    name: string;
    lab1: number;
    lab2: number;
    lab3: number;
    parcial1: number;
    parcial2: number;
    parcial3: number;

    constructor(_name:string, _lab1:number,_lab2:number,_lab3:number,_parcial1:number,_parcial2:number,_parcial3:number,){
        this.name=_name;
        this.lab1=_lab1;
        this.lab2=_lab2;
        this.lab3=_lab3;
        this.parcial1=_parcial1;
        this.parcial2=_parcial2;
        this.parcial3=_parcial3;
    }

    public mostrar(): void{
        let prom1= ((this.lab1*0.60)+(this.parcial1*0.40))/3;
        let prom2= ((this.lab2*0.60)+(this.parcial2*0.40))/3;
        let prom3= ((this.lab3*0.60)+(this.parcial3*0.40))/3;

        let notaFinal= prom1 + prom2 + prom3;

        console.log(`Estudiante: ${this.name}
                     Lab1: ${this.lab1}
                     Lab2: ${this.lab2}
                     Lab3: ${this.lab3}

                     Parcial1: ${this.parcial1}
                     Parcial2: ${this.parcial2}
                     Parcial3: ${this.parcial3}

                     Nota Final: ${notaFinal}

                    `);
    }

}

//Objeto instanciado POO
let estudiante1 = new POO('u20241584','Jose Smith Mendez',19,10,10);
//estudiante1.mostrarDatos();
//estudiante1.mostrarNotas();
//Objeto instanciado a Redes
let estudiante2 = new Redes('pepito Fuentes',10,9,10,9,10,9);
estudiante2.mostrar();