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
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Persona {
    nombre = "";
    fechaNacimiento = "";
    _edad = 0;
    telefono = "";
    responsable = "";
    telefonoResponsable = "";
    sintomas = "";
    porcentaje = 84; //U20241584
    get edad() {
        return this._edad;
    }
    set edad(valor) {
        if (valor > 0 && valor <= 110) {
            this._edad = valor;
        }
        else {
            console.log("Edad no valida, se asignara 0");
            this._edad = 0;
        }
    }
}
class Paciente extends Persona {
    pedirDatos() {
        rl.question("Ingrese su nombre: ", (nombre) => {
            this.nombre = nombre;
            rl.question("Ingrese su fecha de nacimiento (DD/MM/AAAA): ", (fecha) => {
                this.fechaNacimiento = fecha;
                rl.question("Ingrese su edad: ", (edad) => {
                    this.edad = parseFloat(edad);
                    rl.question("Ingrese su numero de telefono: ", (telefono) => {
                        this.telefono = telefono;
                        rl.question("Ingrese el nombre de su responsable: ", (responsable) => {
                            this.responsable = responsable;
                            rl.question("Ingrese el telefono del responsable: ", (telefonoResponsable) => {
                                this.telefonoResponsable = telefonoResponsable;
                                rl.question("Ingrese sus sintomas: ", (sintomas) => {
                                    this.sintomas = sintomas;
                                    this.evaluarConsulta();
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    evaluarConsulta() {
        rl.question("Tipo de consulta (1: General, 2: Especialidad): ", (tipo) => {
            if (tipo === "1") {
                let costoBase = 50;
                let descuento = costoBase * this.porcentaje / 100;
                let costoFinal = costoBase - descuento;
                console.log("--- CONSULTA GENERAL ---");
                console.log(`Paciente: ${this.nombre}`);
                console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
                console.log(`Edad: ${this.edad}`);
                console.log(`Telefono: ${this.telefono}`);
                console.log(`Responsable: ${this.responsable}`);
                console.log(`Telefono del responsable: ${this.telefonoResponsable}`);
                console.log(`Sintomas: ${this.sintomas}`);
                console.log(`Descuento: $${descuento}`);
                console.log(`Costo a cancelar: $${costoFinal.toFixed(2)}`);
                this.categoriaEdad();
            }
            else if (tipo === "2") {
                let costoBase = 90;
                let descuento = costoBase * 0.81;
                let costoConDescuento = costoBase - descuento;
                console.log("--- CONSULTA DE ESPECIALIDAD ---");
                console.log(`Paciente: ${this.nombre}`);
                console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
                console.log(`Edad: ${this.edad}`);
                console.log(`Telefono: ${this.telefono}`);
                console.log(`Responsable: ${this.responsable}`);
                console.log(`Telefono del responsable: ${this.telefonoResponsable}`);
                console.log(`Sintomas: ${this.sintomas}`);
                console.log(`Descuento: $${descuento}`);
                console.log(`Costo a cancelar: $${costoConDescuento.toFixed(2)}`);
                this.categoriaEdad();
            }
            else {
                console.log("Opcion no valida");
                rl.close();
            }
        });
    }
    categoriaEdad() {
        console.log("--- CATEGORIA DE EDAD ---");
        if (this.edad > 0 && this.edad <= 12) {
            console.log(`Categoria: Niño (${this.edad} años)`);
        }
        else if (this.edad >= 13 && this.edad <= 17) {
            console.log(`Categoria: Adolescente (${this.edad} años)`);
        }
        else if (this.edad >= 18 && this.edad <= 30) {
            console.log(`Categoria: Joven (${this.edad} años)`);
        }
        else if (this.edad >= 31 && this.edad <= 59) {
            console.log(`Categoria: Adulto (${this.edad} años)`);
        }
        else if (this.edad >= 60 && this.edad <= 110) {
            console.log(`Categoria: Tercera Edad (${this.edad} años)`);
        }
        else {
            console.log(`La edad no es valida`);
        }
        rl.close();
    }
}
const paciente1 = new Paciente();
paciente1.pedirDatos();
//# sourceMappingURL=Parcial.js.map