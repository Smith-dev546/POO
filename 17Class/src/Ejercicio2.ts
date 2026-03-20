abstract class Vehiculo{
    tipo: string;

    constructor(tipo:string){
        this.tipo = tipo;
    }

    abstract mover(): void;
}

class Carro extends Vehiculo{
    mover(): void {
        console.log(`El Carro avanza a 40 Km/h`);
    }
}

class Bicicleta extends Vehiculo{
    mover(): void {
        console.log(`La bicicleta avanza 10 Km/h `)
    }
}

class Motocicleta extends Vehiculo{
    mover(): void {
        console.log(`La motocicleta avanza 20 Km/h`)
    }
}

const Carrito = new Carro("Honda");
Carrito.mover();