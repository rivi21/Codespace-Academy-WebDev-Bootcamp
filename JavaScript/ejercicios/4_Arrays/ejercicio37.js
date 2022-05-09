const prompt = require('prompt-sync')();

let array = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'H', 'L', 'C', 'K', 'E'];

let numberDni = Number(prompt('Introduzca el DNI: '));

const result = numberDni % 23;

console.log(numberDni, array[result]);