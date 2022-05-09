/* Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase 
que introduciremos por teclado. */

const prompt = require('prompt-sync')();

let sentence = [];
sentence = prompt('Escribir frase: ');
let letter = prompt('Escribe una letra ');
let count = 0;

/* al decir que la frase es un array,
te mete directamente cada letra en un indice */
console.log('sentence = ', sentence);

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase() === letter.toLowerCase()) {
        count++
    }
}
console.log('La letra', letter, 'está', count, 'veces repetida');