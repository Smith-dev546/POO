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
        const newVida = this.nuevaVida - 30;
        console.log(`Tu vida actual es de: ${newVida}`);
        this.acuatico(newVida);
    }
    acuatico(newVida) {
        const VidaActual = newVida - 50;
        console.log(`Tu vida actual es de: ${VidaActual}`);
        let sumaVida = VidaActual + 10;
        console.log(`Tu vida incremento, tu vida actual es de: ${sumaVida}`);
        this.endGame(sumaVida);
    }
    endGame(sumaVida) {
        let VidaFinal = sumaVida - 50;
        if (VidaFinal > 0) {
            console.log(`Felicidades! LLegastes al final del juego`);
        }
        else {
            console.log(` PERDISTES GAME OVER`);
            console.log(`Tu vida es: 0`);
        }
    }
}
const NuevoJugador = new Mundo1("Pepito", 100);
NuevoJugador.aventura();
//# sourceMappingURL=Ejercicio2.js.map