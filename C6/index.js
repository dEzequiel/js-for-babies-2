/**
 * Actividad C6
a) Escribe un programa que «piense» un número entre 0 y 100, y entregue pistas al usuario
para que lo adivine. El usuario debe ingresar su intento, y el programa debe decir si el
número pensado es mayor, menor, o el correcto:
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function guessNumber() {
  console.log("Guess the number");
  var tryouts = 1;
  var answer;

  while (answer != number) {
    answer = rl.question(`Tryout ${tryouts}: `);
  }
}

console.log(guessNumber());
