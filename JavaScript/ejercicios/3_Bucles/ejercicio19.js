const prompt = require('prompt-sync')();

let sum = 0;
let numberAmount = 0;

let number = Number(prompt('elige un número: '));

while (number != -1) {
    sum = sum + number;
    numberAmount += 1// asi el -1 no me lo cuenta para la media

    number = Number(prompt('elige un número: '));

    /* numberAmount += 1  si lo ponemos aquí si que lo cuenta */
}
if (numberAmount === 0) {
    console.log('No se ha introducido ningun nº');
} else {
    const average = sum / numberAmount;

    console.log('La media es', average);
}