"use strict";
//Ejercicio 2
Object.defineProperty(exports, "__esModule", { value: true });
// Codifique un Ejercicio donde se evalué el precio a pagar por un producto, los
// atributos pueden ser a su criterio, tomar en cuenta que se debe de manejar un
// parámetro descuento que seria un porcentaje, el parámetro se debe de enviar en la
// función no debe de inicializarse con el objeto. El método que cree debe de mostrar el
// siguiente mensaje:
// ****Cantidad de producto: cantidad*****
// ****Precio: $Precio******
// ****Descuento: $descuento****
// ****Iva: $iva****
// ****Total a pagar******
class producto {
    nombre;
    precio;
    cantidad;
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    Pago() {
        let Total = (this.cantidad * this.precio);
        let TotalDesc;
        if (Total > 100) {
            TotalDesc = Total * 0.20;
            Total = Total - TotalDesc;
        }
        else {
            console.log("No Aplicas a ningun descuento");
        }
        let IVA = Total * 0.13;
        let TotalPagar = Total + IVA;
        console.log(`Nombre: ${this.nombre}
            Cantidad del producto: ${this.cantidad}
            Precio: $${this.precio}
            Descuento: $${TotalDesc}
            IVA: $${IVA}
            Total a Pagar: $${TotalPagar}`);
    }
}
let Product = new producto("Toallas", 40, 3);
Product.Pago();
//# sourceMappingURL=Ejercicio2.js.map