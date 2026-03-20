abstract class Notificacion{
    destino: any
    constructor(destino: any){
        this.destino=destino
}

    abstract enviar(a: any, b: any): any;
}

class Email extends Notificacion {
    constructor(destino:any){
        super(destino)
    }
    enviar(mensaje:string): void{
          console.log(`Mensaje "${mensaje}" enviado al Email ${this.destino}`)
    }
}

class SMS extends Notificacion {
    constructor(destino:any){
        super(destino)
    }
    enviar(mensaje:string): void{
          console.log(`Mensaje "${mensaje}" enviado al Numero ${this.destino}`)
    }
}

class WhatsApp extends Notificacion {
    constructor(destino:any){
        super(destino)
    }
    enviar(mensaje:string): void{
          console.log(`Mensaje "${mensaje}" enviado al contacto ${this.destino}`)
    }
}

const mensajeEmail = new Email("pepito@gmail")
mensajeEmail.enviar("Hola")

const mensajeSMS = new SMS(12345678)
mensajeSMS.enviar("Byee")

const mensajeWhatsApp = new WhatsApp("Pepito");
mensajeWhatsApp.enviar("Holiwis")