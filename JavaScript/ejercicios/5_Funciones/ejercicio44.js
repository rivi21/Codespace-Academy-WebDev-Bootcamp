const prompt = require('prompt-sync')();
const firstNumber = Number(prompt('Introduzca un nº: '));
const secondNumber = Number(prompt('Introduzca otro nº: '));

const suma = firstNumber + secondNumber;
const resta = firstNumber - secondNumber;
const producto = firstNumber * secondNumber;
const division = firstNumber / secondNumber;

function results() {
    console.log('1: Sumar');
    console.log('2: Restar');
    console.log('3  Multiplicar');
    console.log('4: Dividir');
    console.log('5: Salir del programa');
}

const salir = 5;
let election = 0;

while (election !== salir) {
    results();
    election = Number(prompt('Seleccione el nº de una de las opciones anteriores: '));
    if (election === 1) {
        console.log('La suma es =', suma);

    } else if (election === 2) {
        console.log('La resta es =', resta);

    } else if (election === 3) {
        console.log('El producto es =', producto);

    } else if (election === 4) {
        console.log('La división es =', division);

    } else if (election !== 5) {
        console.log('La opción marcada es incorrecta');

    }
} console.log('Hasta luego');



