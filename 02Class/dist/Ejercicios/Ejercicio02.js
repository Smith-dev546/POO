"use strict";
//Modelar un producto con información comercial y una función para mostrarla
Object.defineProperty(exports, "__esModule", { value: true });
let producto = {
    nombre: "tablet",
    precio: 500,
    Modelo: "Gt20",
    MostrarProduct() {
        console.log("Productos: " + this.nombre + ", y su precio es: " + this.precio);
    }
};
producto.MostrarProduct();
//# sourceMappingURL=Ejercicio02.js.map