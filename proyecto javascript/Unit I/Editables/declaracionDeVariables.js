/**
 * manuel
 * 
 */

var x = 5;
//declaracion global

let variable = 15;
console.log("valor global:" + variable);

//declaracion local
let revisarAlcance = () => {

    let variable = 50;
    console.log("valor local: " + variable);
};
revisarAlcance();
//las constantes tienen lcance a partir de donde las declaras y no se pueden modificar
const constante = 3.1416;
console.log("constante original: " + constante);


//Hoisting
function funcionHoisting() {
    // se eleva con hoisting
    var x;
    //indefinodo porque se elevo se declaracon a antes de la primer declaracion
    console.log("x:", x);
    //se redefine
    x = 10;
    console.log("x:", x);
}
funcionHoisting();