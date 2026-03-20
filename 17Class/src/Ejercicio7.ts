abstract class Transporte{

    abstract CalcularCosto(a: number): void;
}

class Taxi extends Transporte {
  
    CalcularCosto(Km: number): void {
        let precio = 5;     //Precio por kilometro recorrido

        let pago = Km * precio;
        console.log(`Su total a pagar es de: $${pago}`);
    }
}

class Autobus extends Transporte{

    CalcularCosto(Km: number): void {
        let precio = 2;     //Precio por kilometro recorrido

        let pago = Km * precio;
        console.log(`Su total a pagar es de: $${pago}`);
    }
}

class Uber extends Transporte{

    CalcularCosto(Km: number): void {
        let precio = 4;     //Precio por kilometro recorrido

        let pago = Km * precio;
        console.log(`Su total a pagar es de: $${pago}`);
    }
}

const Persona1 = new Taxi();
Persona1.CalcularCosto(10);

const Persona2 = new Autobus();
Persona2.CalcularCosto(20);

const Persona3 = new Uber();
Persona3.CalcularCosto(30);