// // Ejercicio 1

// class Usuario {
//   public username: string;
//   private password: string;

//   constructor(username: string, password: string) {
//     this.username = username;
//     this.password = password;
//   }

//   login(pass: string): string {
//     if (pass === this.password) {
//       return "Acceso concedido";
//     } else {
//       return "Contraseña incorrecta";
//     }
//   }
// }

// const u = new Usuario("Pepito", "password123");
// console.log(u.login("password123"));


//Ejercicio 2

// class Producto {
//   constructor(
//     public nombre: string,
//     private precio: number
//   ) {}

//   evaluarPrecio(): string {
//     if (this.precio < 10) {
//       return "Producto barato";
//     } else if (this.precio <= 50) {
//       return "Precio normal";
//     } else {
//       return "Producto caro";
//     }
//   }
// }

// const product = new Producto("Banana", 51);
// console.log(product.evaluarPrecio());

//Ejercicio 3

class Empleado {
  constructor(
    public nombre: string,
    protected salario: number
  ) {}
}

class Gerente extends Empleado {
  bono(): number {
    if (this.salario > 1000) {
      return this.salario * 0.2;
    } else {
      return this.salario * 0.1;
    }
  }
}

const trabajador = new Gerente("Pepito", 1000);
console.log(`Su bono es de: ${trabajador.bono()}`);
