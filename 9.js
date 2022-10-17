/**
 * 
 * @param {String} string 
 * 
 * MAYUS, MIN, MIX
 */
function mayusMinMix(string) {
    const isMayus = Array.from(string).filter(char => hasMayus(char)).length;
    const isMinus = Array.from(string).filter(char => hasMinus(char)).length;

    if (isMayus && isMinus) return 'MIX';
    if (isMayus) return 'MAYUS';
    return 'MINUS';
}

// based on ascii table
function hasMayus(char) {
    return char.charCodeAt(0) <= 90;
}

function hasMinus(char) {
    return char.charCodeAt(0) > 90;
}

// tests
console.log(mayusMinMix('HOLA'));
console.log(mayusMinMix('keloke'));
console.log(mayusMinMix('MesClA'));