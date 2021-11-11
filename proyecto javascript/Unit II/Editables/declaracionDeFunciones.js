/**
 * manuel
 * 
 */
//declaracion tradicional

function funcionTradicional(parametro) {
    return parametro;
};

console.log("resulatdo funcion tradicional " + funcionTradicional(5));

//declaracion flecha

let funcionFlecha = () => {
    console.log("soy una funcion flecha");
}

// declacion en variable usando function
const funcionEnVariable = function() {
    console.log("funcion en variable");
};

funcionEnVariable();


//llamada usando valor de retorno
let otrafuncion = (paramtero) => {
    console.log("parametro padado con valor de retorno: " + paramtero);
}
otrafuncion(funcionTradicional(10));