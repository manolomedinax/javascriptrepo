/*
    manuel
    CONVERSION DE DATOS

*/

//conversiones directas
console.log(Number.parseInt(cadena));
console.log(Number.parseFloat(cadena));

//Siempre que se concatene una vriable numerica con string se covertira en string
let cadenanormal = "una cadena cualuqiera";
let cadenaconnumero = 1000 + cadenanormal;

console.log(cadenaconnumero);

var numero = 3.1416;
var cadena = "Cesar";

//se imprime el tipo de dato original
console.log(typeof numero);
//cambiamos el tipo  de dato
numero = String(numero);
//confirmamos que se cambio correctamente
console.log(typeof String(numero));
//tranformaciones a booleano
let valoresParaConvertir = [
    [], " ", "", {}
];

let convertirABooleano = () => {
    for (let valor of valoresParaConvertir) {
        console.log(Boolean(valor));
    }

}

convertirABooleano();