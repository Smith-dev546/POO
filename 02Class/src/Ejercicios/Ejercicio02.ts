//Modelar un producto con información comercial y una función para mostrarla

let producto ={
    nombre: "tablet",
    precio: 500,
    Modelo: "Gt20",
    

    MostrarProduct(): void {
        console.log("Productos: " + this.nombre + ", y su precio es: " + this.precio);
    }
};

producto.MostrarProduct();