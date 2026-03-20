abstract class Empleado{
    sueldo: number = 500;

    abstract CalcularSalrio(a:number): void;
}

class EmpleadoHoras extends Empleado{

    CalcularSalrio(horas: number): void {
        let preciohoras = 5
        let pagoHoras = preciohoras * horas;
        let salario = this.sueldo + pagoHoras;

        console.log(`Tu salario es: $${salario} dolares`)
    }
}

class EmpleadoFijo extends Empleado{
    
    CalcularSalrio(): void {
        console.log(`Tu salario es: $${this.sueldo} dolares`)
    }
}

class EmpeladoComision extends Empleado{

    CalcularSalrio(numVentas: number): void {

        let ventas = 1000;
        let comision = ventas * 0.40;
        let SalarioComision =  comision * numVentas;

        let SalarioTotal = SalarioComision + this.sueldo;

        console.log(`Tu salario es: $${SalarioTotal} dolares`)

    }
}

const Empleado1 = new EmpleadoHoras();
Empleado1.CalcularSalrio(20);

const Empleado2 = new EmpleadoFijo();
Empleado2.CalcularSalrio();

const Empleado3 = new EmpeladoComision();
Empleado3.CalcularSalrio(10);