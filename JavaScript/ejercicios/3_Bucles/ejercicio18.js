/* const prompt = require('prompt-sync')();

const N = parseInt(prompt('elige un número: '));

let count = 0;
let sum = 0;
let par;

while (count < N) {
    if (N % 2 === 0) {
        par = N + count * 2;
        sum = sum + par;
        count++;
    } else {
        par = N + 1 + count * 2;
        sum = sum + par;
        count++;
    }
} console.log('Los N pares suman:', sum); */

// SOLUCIÓN DE JESÚS

const prompt = require('prompt-sync')();

let N = parseInt(prompt('elige un número N: '));

let initialNumber = N;

//asegura que initialNumber sera el primer número a sumar
/* if (initialNumber % 2 !== 0) {
    initialNumber = initialNumber + 1;
}
let count = 0;
let sum = 0;


while (count < N) {
    sum = sum + initialNumber;

    console.log(initialNumber);

    initialNumber = initialNumber + 2;
    count = count + 1;

} console.log('La suma final es de:', sum) */


//Con Bucle FOR
let sum = 0;
if (initialNumber % 2 !== 0) {
    initialNumber = initialNumber + 1;
}
for (i = 0; i < N; i++) {

    sum = sum + initialNumber;
    initialNumber = initialNumber + 2;

}
console.log('La suma final es de:', sum);
