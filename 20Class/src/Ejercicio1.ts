abstract class Jugador{
    nombre: string;
    private vida: number ;

    constructor(nombre:string, vida:number){
        this.nombre = nombre;
        this.vida = vida
    }

    get nuevaVida(): number{
        return this.vida;
    }

    set nuevaVida(valor: number){
        if(valor >= 0){
            this.vida = valor;
        }else{
            console.log(`La vida debe ser cero o mayor que cero`)
        }
    }
}

class Mundo1 extends Jugador{
    constructor(nombre: string, vida: number){
        super(nombre, vida)
    }
    
    aventura(): void{
        let newVida = this.nuevaVida - 30;
        console.log(`Tu vida actual es de: ${newVida}`);
    }

    acuatico(): void{
        let newVida = this.nuevaVida - 50;
        console.log(`Tu vida actual es de: ${newVida}`);

        let sumaVida = newVida + 10;
        console.log(`Tu vida incremento, tu vida actual es de: ${sumaVida}`)
    }

    endGame(): void{
        const newVida = this.nuevaVida - 50;
        console.log(`Tu vida actual es de: ${newVida}`);
    }
}

const NuevoJugador = new Mundo1("Pepito", 100);
NuevoJugador.aventura();
NuevoJugador.acuatico();
NuevoJugador.endGame();