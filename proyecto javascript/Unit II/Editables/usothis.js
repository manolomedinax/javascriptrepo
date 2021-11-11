/**
 * manuel
 * 
 */
//usando this en contexto de un objeto da como resultado el propio objeto
const carro = {
    marca: "algo",
    modelo: "alguno",
    numeroDeVelocidades: 1,
    numeroCilindros: 3,
    plazas: 7,
    encender: function() {
        console.log(this);
    }
};
carro.encender();
//usando this en ambito global, da por resultado vacio(archivo actual), pero ejecutandose en navegador hace referencia a la ventana
console.log(this);