"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventario {
    id;
    producto;
    codigo;
    fecha;
    precio;
    constructor(id, producto, codigo, fecha, precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fecha = fecha;
        this.precio = precio;
    }
    Agregar(precio2, precio3) {
        console.log(`Producto agregado con precio: $${this.precio}`);
        console.log(`Precios de descuento: $${precio2}  y $${precio3}`);
    }
}
let producto = new Inventario(1, 'Toallas humedas', "psdm32", '2026/02/12', 2.5);
producto.Agregar(2.45, 2.40);
//# sourceMappingURL=index.js.map