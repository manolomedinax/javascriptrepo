/**
 * manuel
 * 
 */
//como declarar un arreglo
var arreglo = [1, 2, 3, 4, 5];
//como recorrer un arreglo
for (let valor in arreglo) {
    console.log(arreglo[valor]);
};


//como agregar elementos al array
let datos = [];
console.log("arreglo sin datos" + datos);
datos.push(100);
datos.push(50);
datos.push(300);
datos.push(400);
console.log("arreglo con datos " + datos);
//obtener tamaño de un arreglo
const arregloParaTamaño = arreglo.length;
console.log("tamaño d eun arreglo" + arregloParaTamaño);

//--------------------------------Operaciones connarreglos------------------------------------------
// elimina el ulimo elemento
datos.pop();
console.log("despues de eliminar con pop" + datos);
//Elimina el primero
datos.shift();
console.log("despues de eliminar con shift" + datos);

//Eliminar y agregar elementos a la vez
datos.splice(1, 3, 500);
console.log("despues de usar splice " + datos);
//-------------------------------------------------copiar arreglos----------------------------------------

//arreglo original

var valores = ["Vaca", "Perro", "Gato", "caballo"];

//se copia el arreglo
var valoresCopia = valores.slice(1);
console.log("arreglo original " + valores);
console.log("arrgelo copia: " + valoresCopia);

//--------------------------Aplicar una misma operacion a todos los elementos de un arreglo---------------------
var masValores = [100, 90, 80, 70];
masValores = masValores.map(function(valorDelElemento, index) {
    return valorDelElemento - 2;
})
console.log("valores reducidos: " + masValores);