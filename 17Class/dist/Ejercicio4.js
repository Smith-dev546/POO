"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    sueldo = 500;
}
class EmpleadoHoras extends Empleado {
    CalcularSalrio(horas) {
        let preciohoras = 5;
        let pagoHoras = preciohoras * horas;
        let salario = this.sueldo + pagoHoras;
        console.log(`Tu salario es: $${salario} dolares`);
    }
}
class EmpleadoFijo extends Empleado {
    CalcularSalrio() {
        console.log(`Tu salario es: $${this.sueldo} dolares`);
    }
}
class EmpeladoComision extends Empleado {
    CalcularSalrio(numVentas) {
        let ventas = 1000;
        let comision = ventas * 0.40;
        let SalarioComision = comision * numVentas;
        let SalarioTotal = SalarioComision + this.sueldo;
        console.log(`Tu salario es: $${SalarioTotal} dolares`);
    }
}
const Empleado1 = new EmpleadoHoras();
Empleado1.CalcularSalrio(20);
const Empleado2 = new EmpleadoFijo();
Empleado2.CalcularSalrio();
const Empleado3 = new EmpeladoComision();
Empleado3.CalcularSalrio(10);
//# sourceMappingURL=Ejercicio4.js.map