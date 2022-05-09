/* Construir algoritmo tal que con un número entero como entrada, 
determine e imprima si es positivo, negativo o nulo */


const prompt = require('prompt-sync')();

const inputIntNumber = parseInt(prompt('Escribe un número = '));

if (inputIntNumber === 0) {
    console.log('El número', inputIntNumber, 'es NULO');
}
else if (inputIntNumber > 0) {
    console.log('El número', inputIntNumber, 'es POSITIVO');
}
else {
    console.log('El número', inputIntNumber, 'es NEGATIVO');
}
