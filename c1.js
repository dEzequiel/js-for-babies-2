function getMonth() {
    var letras = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
                    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return letras[new Date().getMonth()];
}

// test
console.log(getMonth()); // -> Octubre