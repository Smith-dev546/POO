import * as readline from "readline";

class Aplicacion{
    private rl: readline.Interface;
    constructor(){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    Iniciar(): void{
        this.PedirDatos();
    }

    PedirDatos(): void{
        this.rl.question("Ingrese el nombre del cliente: ", (respuesta1: string)=>{
            this.rl.question("Ingrese el numero de telefono del cliente (sin ion o espacios): ", (respuesta2: string)=>{
                this.rl.question("Ingrese el DUI del cliente (Sin ion): ", (respuesta3: string)=>{
                    this.rl.question("Ingrese el Correo electronico del cliente: ", (respuesta4: string)=>{
                        this.rl.question("Ingrese la fecha de la compra: ", (respuesta5: string)=>{

                            const Nombre = respuesta1;
                            const Telefono = Number(respuesta2);
                            const DUI = Number(respuesta3);
                            const Correo = respuesta4;
                            const Fecha_Compra = respuesta5;

                            this.EvaluarCompra(Nombre, Telefono, DUI, Correo, Fecha_Compra);
                            this.cerrar();
                        })
                    })
                })
            })
        })
    }

    EvaluarCompra(Nombre:string, Telefono:number, DUI:number, Correo:string, Fecha_Compra:string): void{
        let Producto = "camisa";
        let Precio = 400;
        let Categoria = "Ropa";
        
        let descuento

        if(Categoria === "Tecnologia"){
            descuento = 0.10;
            this.CalcularDesc(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, Producto);
        }else if(Categoria === "Ropa"){
            descuento = 0.15;
            this.CalcularDesc(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, Producto);
        }else if(Categoria === "Caalzado"){
            descuento = 0.20;
            this.CalcularDesc(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, Producto);
        }else{
            descuento = 0;
            console.log("Tu compra no aplica a ningun descuento")
            this.CalcularDesc(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, Producto);
        }
        
    }

    CalcularDesc(Nombre:string, Telefono:number, DUI:number, Correo:string, Fecha_Compra:string, Precio: number, descuento: number, Producto: string): void{

        let Descuento = Precio * descuento;
        let PrecioDesc = Precio - Descuento;

        this.CalcularIVA(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, PrecioDesc, Producto, Descuento);
    }

    CalcularIVA(Nombre:string, Telefono:number, DUI:number, Correo:string, Fecha_Compra:string, Precio: number, descuento: number ,PrecioDesc:number, Producto: string, Descuento: number): void{
        const IVA = 0.13;

        let CalculoIVA = PrecioDesc * IVA;
        let Total = PrecioDesc + CalculoIVA;

        this.mostrar(Nombre, Telefono, DUI, Correo, Fecha_Compra, Precio, descuento, PrecioDesc, Total, Producto, CalculoIVA, Descuento);
    }

    mostrar(Nombre:string, Telefono:number, DUI:number, Correo:string, Fecha_Compra:string, Precio: number, descuento: number ,PrecioDesc:number, Total:number, Producto: string, CalculoIVA: number, Descuento: number): void{
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
                    TOTAL A PAGAR: $${Total}`)


    }

    cerrar(): void{
        this.rl.close();
    }

}

const Cliente = new Aplicacion();
Cliente.Iniciar();