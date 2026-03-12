"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class Aplicacion {
    rl;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    Iniciar() {
        this.PedirDatos();
    }
    PedirDatos() {
        this.rl.question("Ingrese el nombre del cliente: ", (respuesta1) => {
            this.rl.question("Ingrese el numero de telefono del cliente (sin ion o espacios): ", (respuesta2) => {
                this.rl.question("Ingrese el DUI del cliente (Sin ion): ", (respuesta3) => {
                    this.rl.question("Ingrese el Correo electronico del cliente: ", (respuesta4) => {
                        this.rl.question("Ingrese la fecha de la compra: ", (respuesta5) => {
                            const Nombre = respuesta1;
                            const Telefono = Number(respuesta2);
                            const DUI = Number(respuesta3);
                            const Correo = respuesta4;
                            const Fecha_Compra = respuesta5;
                            this.EvaluarCompra(Nombre, Telefono, DUI, Correo, Fecha_Compra);
                            this.cerrar();
                        });
                    });
                });
            });
        });
    }
    EvaluarCompra(Nombre, Telefono, DUI, Correo, Fecha_Compra) {
        let Producto = "camisa";
        let Precio = 400;
        let Categoria = "Ropa";
        let descuento;
        if (Categoria === "Tecnologia") {
            descuento = 0.10;
            this.CalcularDesc(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, Producto);
        }
        else if (Categoria === "Ropa") {
            descuento = 0.15;
            this.CalcularDesc(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, Producto);
        }
        else if (Categoria === "Caalzado") {
            descuento = 0.20;
            this.CalcularDesc(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, Producto);
        }
        else {
            descuento = 0;
            console.log("Tu compra no aplica a ningun descuento");
            this.CalcularDesc(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, Producto);
        }
    }
    CalcularDesc(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, Producto) {
        let Descuento = Precio * descuento;
        let PrecioDesc = Precio - Descuento;
        this.CalcularIVA(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, PrecioDesc, Producto, Descuento);
    }
    CalcularIVA(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, PrecioDesc, Producto, Descuento) {
        const IVA = 0.13;
        let CalculoIVA = PrecioDesc * IVA;
        let Total = PrecioDesc + CalculoIVA;
        this.mostrar(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, PrecioDesc, Total, Producto, CalculoIVA, Descuento);
    }
    mostrar(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, PrecioDesc, Total, Producto, CalculoIVA, Descuento) {
        console.log(`
                    ******code 0001******
                    Cliente: ${Nombre}
                    DUI: ${DUI}
                    Telefono: ${Telefono}
                    Fecha: ${Fecha_Compra}
                    
                    ------------------------
                    
                    Cant.   Producto        Total
                     1      ${Producto}       $${Precio}
                            Descuento: ${Descuento}
                            IVA: ${CalculoIVA}
                    TOTAL A PAGAR: $${Total}`);
    }
    cerrar() {
        this.rl.close();
    }
}
const Cliente = new Aplicacion();
Cliente.Iniciar();
//# sourceMappingURL=U20241584.js.map