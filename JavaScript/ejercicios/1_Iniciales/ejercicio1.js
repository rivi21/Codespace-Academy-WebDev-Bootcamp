/* Dadas dos variables numéricas A y B, que el usuario debe teclear, 
se pide realizar un algoritmo que intercambie los valores de ambas 
variables y muestre cuánto valen al final cada una de ellas 
(recuerda la asignación) */

const prompt = require('prompt-sync')();

let A = prompt('A = ');
let B = prompt('B = ');


let C = A;
A = B;
B = C;

console.log('A =', A, 'B =', B);