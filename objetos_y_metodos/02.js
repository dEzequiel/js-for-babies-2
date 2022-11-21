const equip_ciclista = require('./00');

const nomsOrdenats = equip_ciclista.ciclistes.map(c => c.nom).sort().reduce((prev, next) => prev + ', ' + next);
console.log(nomsOrdenats);