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

for (key in carro) {
    console.log(`${key}: ${carro[key]}`);
};

// obteiene la descripcion de cada propiedad del objeto
console.log(Object.getOwnPropertyDescriptors(carro));
// obteiene las propiedades del objeto enumerables y no enumerables
console.log(Object.getOwnPropertyNames(carro));