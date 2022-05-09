const prompt = require('prompt-sync')();

let arrayLength = Number(prompt('Introduzca el tamaño del array: '));

let array = new Array(arrayLength); //se puede hacer asi let array = newArray[arrayLength]
let sum = 0;

for (let i = 0; i < arrayLength; i++) {

    let numRandom = Math.floor(Math.random() * 10 + 1);
    array[i] = numRandom;
    console.log('El indice', i, 'tiene el valor', numRandom);
    sum = sum + numRandom;
}
console.log('array =', array);
console.log('suma = ', sum);