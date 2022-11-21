const equip_ciclista = require('./00');

const noms = equip_ciclista.ciclistes.map(c => c.nom).reduce((prev, next) => prev + ', ' + next);
console.log(noms);
