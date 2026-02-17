//Ejercicio 3

// Codifique un Ejercicio en el cual se pueda verificar la edad de una persona
// utilizando solamente la fecha de nacimiento, y calcular su estado por medio de la
// edad, si es 0 a 2 años = bebe , mayor de 2 a 10 es niño/niña, mayor de 10 a 14 = pre
// adolescente, mayor de 14 a 17 = adolescente, mayor e igual a 18 a 30= joven, mayor de
// 30 a 50 = adulto, de 50 en adelante = adulto mayor.

class Persona{
    anio: number;

    constructor(anio: number){
        this.anio = anio;
    }

    CalcularEdad(): void{
        let edad = 2026 - this.anio;
        let estado;

        if(edad >0 && edad <= 2){
            estado = "Bebe";
        }else if(edad > 2 && edad <= 10 ){
            estado = "Ninio";
        }else if(edad > 10 && edad <= 17){
            estado = "Adolecente";
        }else if(edad >=18 && edad <= 30){
            estado = "Joven";
        }else if(edad >30 && edad <50){
            estado = "Adulto"
        }else if(edad >=50){
            estado = "Adulto Mayor";
        }else{
            console.log("Ingrese una edad Valida");
        }

        console.log(`Tu tienes: ${edad} anios
                        y estas en el rango ${estado}`);
    }
}

let persona1 = new Persona(2006);
persona1.CalcularEdad();
