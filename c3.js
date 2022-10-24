/**
 * 
 * @param {string} fecha
 * 
 * dia/mes ej-> 23/9
 */

window.onload = signoZodiaco;

function signoZodiaco() {

    const MONTHS = { 'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3, 'mayo': 4, 'junio': 5, 'julio': 6, 'agosto': 7, 'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11 };
    const MONTH_INDEX = MONTHS[prompt("Introduce el mes: ").toLowerCase()];
    const DAY = parseInt(prompt('Introduce el número del día: '));
    const DATE = new Date(new Date().getFullYear(), MONTH_INDEX, DAY);

    var zodiacos = [
        {
            sign: 'ARIES',
            start: new Date(DATE.getFullYear(), MONTHS['enero'], 21),
            end: new Date(DATE.getFullYear(), MONTHS['abril'], 19)
        }, {
            sign: 'TAURO',
            start: new Date(DATE.getFullYear(), MONTHS['abril'], 20),
            end: new Date(DATE.getFullYear(), MONTHS['mayo'], 21)
        }, {
            sign: 'GÉMINIS',
            start: new Date(DATE.getFullYear(), MONTHS['mayo'], 21),
            end: new Date(DATE.getFullYear(), MONTHS['junio'], 20)
        }, {
            sign: 'CÁNCER',
            start: new Date(DATE.getFullYear(), MONTHS['junio'], 21),
            end: new Date(DATE.getFullYear(), MONTHS['julio'], 22)
        }, {
            sign: 'LEO',
            start: new Date(DATE.getFullYear(), MONTHS['julio'], 23),
            end: new Date(DATE.getFullYear(), MONTHS['agosto'], 22)
        }, {
            sign: 'VIRGO',
            start: new Date(DATE.getFullYear(), MONTHS['agosto'], 23),
            end: new Date(DATE.getFullYear(), MONTHS['septiembre'], 22)
        }, {
            sign: 'LIBRA',
            start: new Date(DATE.getFullYear(), MONTHS['septiembre'], 23),
            end: new Date(DATE.getFullYear(), MONTHS['octubre'], 22)
        }, {
            sign: 'ESCORPIO',
            start: new Date(DATE.getFullYear(), MONTHS['octubre'], 23),
            end: new Date(DATE.getFullYear(), MONTHS['noviembre'], 21)
        }, {
            sign: 'SAGITARIO',
            start: new Date(DATE.getFullYear(), MONTHS['noviembre'], 22),
            end: new Date(DATE.getFullYear(), MONTHS['diciembre'], 21)
        }, {
            sign: 'CAPRICORNIO',
            start: new Date(DATE.getFullYear(), MONTHS['diciembre'], 22),
            end: new Date(DATE.getFullYear(), MONTHS['enero'], 19)
        }, {
            sign: 'ACUARIO',
            start: new Date(DATE.getFullYear(), MONTHS['enero'], 20),
            end: new Date(DATE.getFullYear(), MONTHS['febrero'], 18)
        }, {
            sign: 'PISCIS',
            start: new Date(DATE.getFullYear(), MONTHS['febrero'], 19),
            end: new Date(DATE.getFullYear(), MONTHS['marzo'], 20)
        },
    ];

    const theSign = 'Tu signo es ' + zodiacos.filter(zodiaco =>
        (DATE.getTime() >= zodiaco.start.getTime())
        && (DATE.getTime() < zodiaco.end.getTime())
    )[0].sign;

    alert(theSign);
}