/* Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos
 desde 2 hasta N. */

const prompt = require('prompt-sync')();

function showPrimeNumbers(numberN) {

    let primeNumbers = 2;//inicializo en 2 porque el nº 2 y 
    let amountPrime = 1;//inicializo a 1 porque el nº 2 es primo y lo cuento de entrada

    // itero sobre los números desde 2 hasta N
    for (let i = 3; i <= numberN; i++) {

        let checkPrime = true;
        //Compruebo si el numero es primo 
        for (let j = 2; j <= i / 2; j++) {
            //si es divisible por un número diferente a 1 o él mismo dejo de comprobar si es primo
            if (i % j === 0) {
                checkPrime = false;
                break;
            }
        }
        // si no es divisible, lo guardo en la variable primeNumbers y amountPrime suma 1
        if (checkPrime === true) {
            primeNumbers = `${primeNumbers},${i}`;
            amountPrime++
        }
    }
    console.log(`Hay ${amountPrime} números primos desde 2 hasta ${numberN} y son: ${primeNumbers}`);
}
showPrimeNumbers(8)