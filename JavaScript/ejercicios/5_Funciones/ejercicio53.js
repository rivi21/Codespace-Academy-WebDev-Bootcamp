/* Usar una función para calcular el promedio recibiendo un array
y su longitud. En el algoritmo principal, leer la cantidad de datos
que introducirá el usuario y posteriormente los propios datos.
Escribir el resultado de su promedio. */

const prompt = require('prompt-sync')();


function averageArray() {

    let arrayLength = prompt(`Introduce el tamaño del array: `);
    let sumValues = 0;
    let array = [];

    for (i = 0; i < arrayLength; i++) {
        // genero el valor de cada índice del array
        array[i] = parseInt(prompt(`Introduzca el indice ${i + 1}: `));
        // compruebo que todos los índices sean números
        while (isNaN(array[i])) {
            array[i] = parseInt(prompt(`dato erróneo. Vuelva a introducir el indice ${i + 1}: `));
        }
        // sumo los valores de todos lo índices
        sumValues = sumValues + array[i];
    }

    console.log(`El array es [${array}]`);
    console.log(`La suma de los valores del array es ${sumValues}`);
    console.log(`Èl promedio de todos los datos del array es =  ${sumValues / arrayLength}`);
}

averageArray();