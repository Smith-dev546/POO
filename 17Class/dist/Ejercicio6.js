"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notificacion {
    destino;
    constructor(destino) {
        this.destino = destino;
    }
}
class Email extends Notificacion {
    constructor(destino) {
        super(destino);
    }
    enviar(mensaje) {
        console.log(`Mensaje "${mensaje}" enviado al Email ${this.destino}`);
    }
}
class SMS extends Notificacion {
    constructor(destino) {
        super(destino);
    }
    enviar(mensaje) {
        console.log(`Mensaje "${mensaje}" enviado al Numero ${this.destino}`);
    }
}
class WhatsApp extends Notificacion {
    constructor(destino) {
        super(destino);
    }
    enviar(mensaje) {
        console.log(`Mensaje "${mensaje}" enviado al contacto ${this.destino}`);
    }
}
const mensajeEmail = new Email("pepito@gmail");
mensajeEmail.enviar("Hola");
const mensajeSMS = new SMS(12345678);
mensajeSMS.enviar("Byee");
const mensajeWhatsApp = new WhatsApp("Pepito");
mensajeWhatsApp.enviar("Holiwis");
//# sourceMappingURL=Ejercicio6.js.map