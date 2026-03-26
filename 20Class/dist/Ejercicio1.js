"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jugador {
    nombre;
    vida;
    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
    }
    get nuevaVida() {
        return this.vida;
    }
    set nuevaVida(valor) {
        if (valor >= 0) {
            this.vida = valor;
        }
        else {
            console.log(`La vida debe ser cero o mayor que cero`);
        }
    }
}
class Mundo1 extends Jugador {
    constructor(nombre, vida) {
        super(nombre, vida);
    }
    aventura() {
        let newVida = this.nuevaVida - 30;
        console.log(`Tu vida actual es de: ${newVida}`);
    }
    acuatico() {
        let newVida = this.nuevaVida - 50;
        console.log(`Tu vida actual es de: ${newVida}`);
        let sumaVida = newVida + 10;
        console.log(`Tu vida incremento, tu vida actual es de: ${sumaVida}`);
    }
    endGame() {
        const newVida = this.nuevaVida - 50;
        console.log(`Tu vida actual es de: ${newVida}`);
    }
}
const NuevoJugador = new Mundo1("Pepito", 100);
NuevoJugador.aventura();
NuevoJugador.acuatico();
NuevoJugador.endGame();
//# sourceMappingURL=Ejercicio1.js.map