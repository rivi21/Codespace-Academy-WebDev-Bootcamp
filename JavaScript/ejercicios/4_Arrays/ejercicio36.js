const prompt = require('prompt-sync')();

let arrayLength = 10; // repasar
let array1 = new Array(arrayLength);
let array2 = new Array(arrayLength);
let arrayResultado = [];
for (let i = 0; i < arrayLength; i++) {
    array1[i] = Math.floor(Math.random() * (20 - 1) + 1);
    array2[i] = Math.floor(Math.random() * (20 - 1) + 1);
}
console.log(array1, array2);

for (let j = 0; j < arrayLength; j++) {
    arrayResultado[j] = array1[j] + array2[j];
    console.log(array1, array2, 'La multiplicación es: ', arrayResultado);
}