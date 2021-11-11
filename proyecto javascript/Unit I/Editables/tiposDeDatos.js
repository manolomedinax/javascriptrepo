/**
 * manuel
 * 
 */
let palabraOriginal = "tengo hambre";
let buscarPalabra = (variable, palabra) => {

    if (variable.includes(palabra)) {
        return true;
    };
    return false;
}

if (buscarPalabra(palabraOriginal, "hambre")) {
    console.log("si existe");
}


let subcadena1 = palabraOriginal.substring(1, palabraOriginal.indexOf("o"));
console.log(subcadena1);

let palabraRellena = palabraOriginal.padEnd(10, "*");
console.log(palabraRellena);