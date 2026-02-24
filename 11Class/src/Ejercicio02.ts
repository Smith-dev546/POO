import * as readline from "readline";

class Sistema{
    private rl: readline.Interface;
    constructor(){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    iniciar(): void{
        this.pedirUsuario();
    }

    pedirUsuario(): void{
        this.rl.question("Ingrese Su usuario: ", (respuesta: string) =>{
            this.rl.question("Ingrese su contrasenia: ", (answer: string)=> {
                const usuario = respuesta;
                const contrasenia = answer;
                this.evaluarUsuario(usuario, contrasenia);
            });
        });
    }

    evaluarUsuario(usuario: string, contrasenia: string): void{
        let user = "Pepito Fuentes";
        let contra = "123";
        let estado = "Administrador";

        if(usuario === user && contrasenia === contra){
            console.log(`
                Inicio de sesion exitoso
                Su rol es: ${estado}`);
                this.cerrar();
        }else{
            console.log("Usuario y contrasenia son incorrrecto");
            this.iniciar();
        }
    }

    cerrar(): void{
        this.rl.close();
    }
}

const root = new Sistema();
root.iniciar();