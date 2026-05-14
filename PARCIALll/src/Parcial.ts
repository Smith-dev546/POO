import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Persona {
    protected nombre: string = "";
    protected fechaNacimiento: string = "";
    private _edad: number = 0;
    protected telefono: string = "";
    protected responsable: string = "";
    protected telefonoResponsable: string = "";
    protected sintomas: string = "";
    protected porcentaje: number = 84; //U20241584

    abstract evaluarConsulta(): void;

    get edad(): number {
        return this._edad;
    }

    set edad(valor: number) {
        if (valor > 0 && valor <= 110) {
            this._edad = valor;
        } else {
            console.log("Edad no valida, se asignara 0");
            this._edad = 0;
        }
    }
}

class Paciente extends Persona {

    pedirDatos(): void {
        rl.question("Ingrese su nombre: ", (nombre:string) => {
            this.nombre = nombre;
            rl.question("Ingrese su fecha de nacimiento (DD/MM/AAAA): ", (fecha:string) => {
                this.fechaNacimiento = fecha;
                rl.question("Ingrese su edad: ", (edad:string) => {
                    this.edad = parseFloat(edad);
                    rl.question("Ingrese su numero de telefono: ", (telefono:string) => {
                        this.telefono = telefono;
                        rl.question("Ingrese el nombre de su responsable: ", (responsable:string) => {
                            this.responsable = responsable;
                            rl.question("Ingrese el telefono del responsable: ", (telefonoResponsable:string) => {
                                this.telefonoResponsable = telefonoResponsable;
                                rl.question("Ingrese sus sintomas: ", (sintomas:string) => {
                                    this.sintomas = sintomas;
                                    this.evaluarConsulta();
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    evaluarConsulta(): void {
        rl.question("Tipo de consulta (1: General, 2: Especialidad): ", (tipo:string) => {
            if (tipo === "1") {
                let costoBase = 50;
                let descuento = costoBase * this.porcentaje / 100;
                let costoFinal = costoBase - descuento;

                console.log("--- CONSULTA GENERAL ---");
                console.log(`Paciente: ${this.nombre}`);
                console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
                console.log(`Edad: ${this.edad}`);
                console.log(`Telefono: ${this.telefono}`);
                console.log(`Responsable: ${this.responsable}`);
                console.log(`Telefono del responsable: ${this.telefonoResponsable}`);
                console.log(`Sintomas: ${this.sintomas}`);
                console.log(`Descuento: $${descuento}`);
                console.log(`Costo a cancelar: $${costoFinal.toFixed(2)}`);
                
                this.categoriaEdad();
                
            } else if (tipo === "2") {
                let costoBase = 90;
                let descuento = costoBase * 0.81;
                let costoConDescuento = costoBase - descuento;

                console.log("--- CONSULTA DE ESPECIALIDAD ---");
                console.log(`Paciente: ${this.nombre}`);
                console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
                console.log(`Edad: ${this.edad}`);
                console.log(`Telefono: ${this.telefono}`);
                console.log(`Responsable: ${this.responsable}`);
                console.log(`Telefono del responsable: ${this.telefonoResponsable}`);
                console.log(`Sintomas: ${this.sintomas}`);
                console.log(`Descuento: $${descuento}`);
                console.log(`Costo a cancelar: $${costoConDescuento.toFixed(2)}`);
                
                this.categoriaEdad();
                
            } else {
                console.log("Opcion no valida");
                rl.close();
            }
        });
    }


    categoriaEdad(): void {
        console.log("--- CATEGORIA DE EDAD ---");
        
        if (this.edad > 0 && this.edad <= 12) {
            console.log(`Categoria: Niño (${this.edad} años)`);
        } else if (this.edad >= 13 && this.edad <= 17) {
            console.log(`Categoria: Adolescente (${this.edad} años)`);
        } else if (this.edad >= 18 && this.edad <= 30) {
            console.log(`Categoria: Joven (${this.edad} años)`);
        } else if (this.edad >= 31 && this.edad <= 59) {
            console.log(`Categoria: Adulto (${this.edad} años)`);
        } else if (this.edad >= 60 && this.edad <= 110) {
            console.log(`Categoria: Tercera Edad (${this.edad} años)`);
        }else{
            console.log(`La edad no es valida`)
        }
        
        rl.close();
    }
}

const paciente1 = new Paciente();
paciente1.pedirDatos();