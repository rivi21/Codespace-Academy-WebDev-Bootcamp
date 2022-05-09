/*Rellenar un array con 10 números aleatorios entre 1 y 15. 
Posteriormente, buscar un número introducido por teclado y nos debe decir si está incluido en el array 
y el índice de su primera coincidencia.*/

const prompt = require('prompt-sync')();

/* let arraySize = 10;
   let maxValue = 15; */

function randomArray() {//genera los valores aleatorios del array
    let array = [];
    for (let i = 0; i < 10/* arraySize */; i++) {

        array[i] = Math.floor(Math.random() * 15);

    } return array;
}
/* 
const myArray = randomArray(arraySiza);
console.log(myArray); */

console.log('array = ', randomArray());

//buscar un nº dentro del array
let selectedNumber = Number(prompt('Introduzca un nº para comprobar si está en el array: '));

//crear una funcion que busque el nº

/* function findNumberInArray(array,value){
    return array.some(function (arrayVal){
        return value === arrayVal
    })
} 
const arrayHasNumberInserted = findNumberInArray(myArray, numberInserted);

if (arrayHasNumberInserted... //terminar de copiar del video*/

for (i = 0; i < 10; i++) {
    let position;
    if (array[i] = selectedNumber) {
        position = i;
    }
} console.log(selectedNumber, 'se encuentra en el array en el índice', position);

/*  Métodos de array a mirar: .some /.findIndex
    Repasar la solución de Nacho y la de Javi  */