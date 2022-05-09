const prompt = require('prompt-sync')();

let sum = 0;
let numberAmount = 0;

let number = parseInt(prompt('introduce un nº: '));
let max = number;
let min = number;

while (number != 0) {
    //para la media
    sum = sum + number;
    numberAmount += 1;
    //para el máximo
    if (number > max) {
        max = number;
    }
    //para el mínimo
    if (number < min) {
        min = number;
    }

    number = parseInt(prompt('introduce un nº: '));
}
if (numberAmount === 0) {
    console.log('No se ha introducido ningún nº');
} else {
    const average = sum / numberAmount;
    console.log('La media es', average);

    console.log('El nº máximo es', max);
    console.log('El nº mínimo es', min);
}