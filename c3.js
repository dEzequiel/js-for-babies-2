/**
 * 
 * @param {string} fecha
 * 
 * dia/mes ej-> 23/9
 */
function signoZodiaco(fecha) {
    console.log('Escribe una fecha con el formato DD/MM');
    const data = new Date();
    const dia = data.getDay()
    const mes = data.getMonth() + 1; // months start with 0 in js

    var signos = {
        ''
    }
}