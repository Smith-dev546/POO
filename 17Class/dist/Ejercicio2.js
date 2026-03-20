"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    tipo;
    constructor(tipo) {
        this.tipo = tipo;
    }
}
class Carro extends Vehiculo {
    mover() {
        console.log(`El Carro avanza a 40 Km/h`);
    }
}
class Bicicleta extends Vehiculo {
    mover() {
        console.log(`La bicicleta avanza 10 Km/h `);
    }
}
class Motocicleta extends Vehiculo {
    mover() {
        console.log(`La motocicleta avanza 20 Km/h`);
    }
}
const Carrito = new Carro("Honda");
Carrito.mover();
//# sourceMappingURL=Ejercicio2.js.map