/* Dados A, B y C que representan a números enteros diferentes
construir un algoritmo para escribir estos números de forma descendente. */

const prompt = require('prompt-sync')();

let A = Number(prompt('Introduzca el número A: '));
let B = Number(prompt('Introduzca el número B: '));
let C = Number(prompt('Introduzca el número C: '));
let letters = [A, B, C];
let aux = 0;
//al array creado con los números introducidos, le aplico el algoritmo buble sort
//para que los ordene de mayor a menor
for (let i = 0; i < letters.length - 1; i++) {

    for (let j = 0; j < letters.length - 1; j++) {

        if (letters[j] < letters[j + 1]) {
            aux = letters[j];
            letters[j] = letters[j + 1];
            letters[j + 1] = aux;
        }

    }
}
//imprimo los elementos de los indices del primero al último
console.log(`los Números ordenados de mayor a menor son: ${letters[0]} >
${letters[1]} > ${letters[2]}`);


