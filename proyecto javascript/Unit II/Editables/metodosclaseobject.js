/**
 * manuel
 * 
 */
const carro = {
    marca: "algo",
    modelo: "alguno",
    numeroDeVelocidades: 1,
    numeroCilindros: 3,
    plazas: 7,
    encender: function() {
        console.log("RUUUUNNNN...RUUNNNN");
    }

};


// obteniendo las claves del arreglo
let llavesDelObjeto = Object.keys(carro);
console.log("claves: " + llavesDelObjeto);

// obteniedo los valores de  las claves
let valores = Object.values(carro);
console.log("valores de claves: " + valores);