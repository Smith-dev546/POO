"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Figura {
}
class Cuadrado extends Figura {
    calcularArea(lado) {
        let area = lado * lado;
        console.log(`El area del cuadrado es ${area}`);
    }
    calcularPerimetro(lado) {
        let perimetro = lado * 4;
        console.log(`El area del cuadrado es ${perimetro}`);
    }
}
class Rectangulo extends Figura {
    calcularArea(base, altura) {
        let area = (base) * (altura);
        console.log(`EL area de el ractangulo es: ${area}`);
    }
    calcularPerimetro(base, altura) {
        let perimetroSuma = ((base) + (altura));
        let perimetro = 2 * perimetroSuma;
        console.log(`El perimetro del rectangulo es: ${perimetro}`);
    }
}
class Circulo extends Figura {
    calcularArea(radio) {
        let area = 3.14 * (radio ** 2);
        console.log(`Area del circulo: ${area}`);
    }
    calcularPerimetro(radio) {
        let perimetro = 2 * 3.14 * radio;
        console.log(`perimetro de circul: ${perimetro}`);
    }
}
const rect = new Rectangulo();
rect.calcularArea(10, 5);
rect.calcularPerimetro(10, 5);
const cuad = new Cuadrado();
cuad.calcularArea(10);
cuad.calcularPerimetro(10);
const circu = new Circulo();
circu.calcularArea(5);
circu.calcularPerimetro(5);
//# sourceMappingURL=Ejercicio3.js.map