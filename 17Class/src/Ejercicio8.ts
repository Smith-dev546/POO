abstract class Producto{
    nombre: string;
    precio: number;

    constructor(nombre:string, precio:number){
        this.nombre = nombre
        this.precio = precio
    }

    abstract calcularPrecioFInal(): void;

    abstract mostrarInfo(): void;

}

class electrodomestico extends Producto{

    desc: number = 0;
    Total: number = 0;

    calcularPrecioFInal(): void {
        let descuento = 0.10    //Descuento a aplicar

        this.desc = this.precio * descuento;
        this.Total = this.precio - this.desc;
    }

    mostrarInfo(): void {
        console.log(`
                    Producto: ${this.nombre}
                    Precio base: $${this.precio} dolares
                    Descuento: $${this.desc} dolares
                    Total a pagar: $${this.Total} dolares`)
    }
}

class ropa extends Producto{

    desc: number = 0;
    Total: number = 0;

    calcularPrecioFInal(): void {
        let descuento = 0.20    //Descuento a aplicar

        this.desc = this.precio * descuento;
        this.Total = this.precio - this.desc;
    }

    mostrarInfo(): void {
        console.log(`
                    Producto: ${this.nombre}
                    Precio base: $${this.precio} dolares
                    Descuento: $${this.desc} dolares
                    Total a pagar: $${this.Total} dolares`)
    }
}

class alimentos extends Producto{

    PrecioIVA: number = 0;
    Total: number = 0;

    calcularPrecioFInal(): void {
        let IVA = 0.13    //Descuento a aplicar

        this.PrecioIVA = this.precio * IVA;
        this.Total = this.precio + this.PrecioIVA;
    }

    mostrarInfo(): void {
        console.log(`
                    Producto: ${this.nombre}
                    Precio base: $${this.precio} dolares
                    IVA: $${this.PrecioIVA}
                    Total a pagar: $${this.Total}`)
    }
}

const laptop = new electrodomestico("Laptop gamer", 700);
laptop.calcularPrecioFInal();
laptop.mostrarInfo();

const Pantalon = new ropa("Jeans", 20);
Pantalon.calcularPrecioFInal();
Pantalon.mostrarInfo();

const Tomate = new alimentos("Tomates", 5);
Tomate.calcularPrecioFInal();
Tomate.mostrarInfo()