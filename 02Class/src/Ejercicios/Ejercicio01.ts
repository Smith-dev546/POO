//Representar una persona con datos básicos y una acción que describe quién es

let persona ={
    nombre: "Pepito Fuentes",
    edad: 20,
    altura: 170,
    profesion: "Estudiante",
    nacionalidad: "Salvadoreño",

    saludar(): void {
        console.log("Hola, Soy " + this.nombre + ", y soy de nacionalidad " + this.nacionalidad);
    }
};

persona.saludar();