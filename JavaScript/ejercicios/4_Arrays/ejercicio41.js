const prompt = require('prompt-sync')();
let arrayLength = Number(prompt('Introduzca un número: '));

let array = [];
function randomArray() {
    for (i = 0; i < arrayLength; i++) {
        //genera los valores aleatorios + ó - del array
        array[i] = Math.floor((Math.random() - 0.5) * 100);
    }
    return array
}
console.log('array = ', randomArray());

let positiveNumbers = 0;
let averagePositive;
let averageAll;

function operationsArray() {
    let sumPositive = 0;
    let allNumbers = 0;
    let sumAll = 0;
    for (i = 0; i < arrayLength; i++) {
        //cuenta todos los números
        allNumbers++
        //suma todos los números
        sumAll = sumAll + array[i];
        //Cuenta y suma de todos los números mayores que cero
        if (array[i] > 0) {
            //cuenta
            positiveNumbers++;
            //suma
            sumPositive = sumPositive + array[i];
        }
    }
    //Calcula el promedio de los números positivos
    averagePositive = sumPositive / positiveNumbers;
    //calcula el promedio de todos los números
    averageAll = sumAll / allNumbers;

    console.log('El array contiene', positiveNumbers, 'números positivos');
    console.log('El promedio de los números positivos es', averagePositive);
    console.log('El promedio de todos los números es', averageAll);

    return positiveNumbers, averagePositive, averageAll;
}
console.log(operationsArray());


