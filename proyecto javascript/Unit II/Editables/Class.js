/**
 * manuel
 * 
 */
class Automovil {
    constructor(marca, modelo, numeroDeVelocidades, numeroCilindros, plazas) { // Lo primero que se va a ejecutar
        this.marca = marca;
        this.modelo = modelo;
        this.numeroDeVelocidades = numeroDeVelocidades;
        this.numeroCilindros = numeroCilindros;
        this.plazas = plazas;
    }
    encender() {
        console.log("Ruuuun.....Ruunnnn");
    }
    mostrarDatos() {
        console.log(this);
    }

};

const carro = new Automovil("Mazda", "Mazda 7", 7, 1000, 5);
carro.encender();
carro.mostrarDatos();