/* a) Algoritmo que lea dos números y nos diga cuál de ellos es mayor 
o si son iguales (recuerda usar la estructura condicional if).*/

const firstNumber = 11;
const secondNumber = -5;

if (firstNumber < secondNumber) {
    console.log(secondNumber, 'es mayor que', firstNumber);
}
else if (firstNumber > secondNumber) {
    console.log(firstNumber, 'es mayor que', secondNumber);
}
else {
    console.log(firstNumber, 'es igual a', secondNumber);
}
/* con prompt sería

const prompt = require('prompt-sync')();

let firstNumber = prompt('Escribe un número = ');
let secondNumber = prompt('Escribe otro número = ');

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

Siempre que usemos el prompt, por seguridad, si sabemos
que han de ser números, los transformaremos a números con
parseInt()  */

//------------------------------------------------------------

// b)Ahora con 3 números diferentes.

const firstNumber = 1;
const secondNumber = 2;
const thirdNumber = 3;

if (firstNumber === secondNumber && secondNumber === thirdNumber) {
    console.log('los tres números son iguales');
}
else if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(firstNumber, 'es el mayor de todos');
}
else if (secondNumber > thirdNumber) {
    console.log(secondNumber, 'es el mayor de todos');
}
else {
    console.log(thirdNumber, 'es el mayor de todos');
}
/* if (firstNumber === secondNumber || firstnumber === thirdNumber || secondNumber === thirdNumber) {
    console.log('Los números DEBEN SER DIFERENTES')
    else if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        console.log(firstNumber, 'es el mayor de todos');
    }
    else if (secondNumber > thirdNumber) {
        console.log(secondNumber, 'es el mayor de todos');
    }
    else {
        console.log(thirdNumber, 'es el mayor de todos');
    }
} De esta forma nos protegemos de que el usuario meta dos números iguales*/
