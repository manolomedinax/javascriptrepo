/**
 * manuel
 * 
 */
//json desde declaracion
const myJson = '{"nombre": "Paco", "direccion": "calle 7"}';
console.log(myJson, typeof myJson);


//serialzar objeto en json
const carro = {
    marca: "algo",
    modelo: "alguno",
    numeroDeVelocidades: 1,
    numeroCilindros: 3,
    plazas: 7

};

console.log("carro normal: " + carro);

//seralizamos en json
const carroJSON = JSON.stringify(carro);
console.log("carro en  json " + carroJSON, typeof carroJSON);


//desserializar json
const carroDesserializado = JSON.parse(carroJSON);
console.log("carro deserializado " + carroDesserializado);