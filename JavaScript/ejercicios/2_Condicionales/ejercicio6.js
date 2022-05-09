/* Dado un número entero A, hacer un algoritmo que determine 
si es par, impar o nulo. Pista: para determinar el resto de una 
división, se usa la operación módulo %. */


const prompt = require('prompt-sync')();

let choosenInt = parseInt(prompt('Elige un número = '));


if (choosenInt === 0) {
    console.log('El número', choosenInt, 'es NULO');
}
else if (choosenInt % 2 != 0) {
    console.log('El número', choosenInt, 'es impar');
}
else {
    console.log('El número', choosenInt, 'es par');
}
