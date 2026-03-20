"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    nombre;
    precio;
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class electrodomestico extends Producto {
    desc = 0;
    Total = 0;
    calcularPrecioFInal() {
        let descuento = 0.10; //Descuento a aplicar
        this.desc = this.precio * descuento;
        this.Total = this.precio - this.desc;
    }
    mostrarInfo() {
        console.log(`
                    Producto: ${this.nombre}
                    Precio base: $${this.precio} dolares
                    Descuento: $${this.desc} dolares
                    Total a pagar: $${this.Total} dolares`);
    }
}
class ropa extends Producto {
    desc = 0;
    Total = 0;
    calcularPrecioFInal() {
        let descuento = 0.20; //Descuento a aplicar
        this.desc = this.precio * descuento;
        this.Total = this.precio - this.desc;
    }
    mostrarInfo() {
        console.log(`
                    Producto: ${this.nombre}
                    Precio base: $${this.precio} dolares
                    Descuento: $${this.desc} dolares
                    Total a pagar: $${this.Total} dolares`);
    }
}
class alimentos extends Producto {
    PrecioIVA = 0;
    Total = 0;
    calcularPrecioFInal() {
        let IVA = 0.13; //Descuento a aplicar
        this.PrecioIVA = this.precio * IVA;
        this.Total = this.precio + this.PrecioIVA;
    }
    mostrarInfo() {
        console.log(`
                    Producto: ${this.nombre}
                    Precio base: $${this.precio} dolares
                    IVA: $${this.PrecioIVA}
                    Total a pagar: $${this.Total}`);
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
Tomate.mostrarInfo();
//# sourceMappingURL=Ejercicio8.js.map