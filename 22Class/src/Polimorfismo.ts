// /*Ejercicio 1

// Crea un sistema para gestionar el pago de diferentes tipos de empleados. Define una clase abstracta Empleado con una propiedad nombre y un método abstracto calcularSueldo(). Luego, crea dos clases hijas: EmpleadoFijo (que recibe un sueldo mensual estático) y EmpleadoPorHora (que calcula su sueldo multiplicando las horas trabajadas por un valor fijo). Finalmente, crea un arreglo de empleados y recorre la lista mostrando el sueldo de cada uno*/

// abstract class Empleado{
//     nombre: string;

//     constructor(nombre:string){
//         this.nombre = nombre
//     }

//     //Metodo
//     abstract CalcularSueldo(): number;

//     mostrarEmpleado(){
//         console.log(`Empleado: ${this.nombre}`)
//     }
// }

// class EmpleadoFijo extends Empleado{

//     override CalcularSueldo(): number{
//         return 408;
//     }
// }

// class EmpleadoHoras extends Empleado{
//     constructor(nombre: string, private horas:number ){
//         super(nombre);
//     }

//     override CalcularSueldo(): number {
//         return this.horas * 20;
//     }
// }

// const Lista: Empleado[] = [];
// Lista.push(new EmpleadoFijo("Pepito"));
// Lista.push(new EmpleadoHoras("Juan", 10));

// Lista.forEach(emp =>{
//     console.log(`Empleado: ${emp.nombre}, Sueldo: ${emp.CalcularSueldo()}`);
// });

/*Ejercicio 2

Diseña un programa que simule el movimiento de distintos vehículos. Define una clase abstracta Vehiculo con un método abstracto moverse(). Implementa dos clases específicas: Coche, que al moverse debe imprimir "El coche avanza sobre cuatro ruedas", y Avion, que debe imprimir "El avión despega y vuela por los aires". Utiliza el polimorfismo para ejecutar el método moverse() desde una lista que contenga ambos tipos de vehículos.

*/

abstract class Vehiculo{

    //Metodo
    abstract moverse(): void;
}

class coche extends Vehiculo{

    override moverse(): void{
        console.log(`El coche avanza sobre cuatro reudas por la carretera`);
    }
}

class avion extends Vehiculo{

    override moverse(): void {
        console.log(`EL avion despega y vuela por los aires`)
    }
}

const Vehiculos: Vehiculo[] = [];
Vehiculos.push(new coche);
Vehiculos.push(new avion);

Vehiculos.forEach( Ve=>{
    Ve.moverse();
});