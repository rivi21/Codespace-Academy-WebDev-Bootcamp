/* Diseñar un algoritmo que pida por teclado tres números; 
si el primero es negativo, debe imprimir el producto de los tres 
y si no lo es, imprimirá la suma. */


const prompt = require('prompt-sync')();

let firstNumber = prompt('Escribe un número = ');
let secondNumber = prompt('Escribe otro número = ');
let thirdNumber = prompt('Escribe un tercer número = ');


console.log(typeof firstNumber, typeof secondNumber, typeof thirdNumber);
/* estos son tipo string, no tipo number,porque el prompt las considera así. 
Por eso hay que transformarlos con parseInt()*/
// mejor hacerlo antes de operar con ellos, así:
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
thirdNumber = parseInt(thirdNumber);

if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
    console.log('Los datos han de ser números');
} else if (firstNumber < 0) {
    // const producto = firstNumber * secondNumber * thirdNumber; 
    console.log('El producto de los tres números es', firstNumber * secondNumber * thirdNumber);
    // console.log('El producto de los tres números es', producto);
} else {
    // const suma = firstNumber + secondNumber + thirdNumber;
    console.log('La suma de los tres números es', firstNumber + secondNumber + thirdNumber);
    // console.log('La suma de los tres números es', suma)
}