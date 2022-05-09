// Requisitos

/*
Funciones Nombradas

1.- Empezar con la plabra function.
2.- Darle un nombre a nuestra funcion
3.- Cerrar la funcion con parentesis ()
4.- Si tiene argumentos van dentro del parentesis
4.1.- Un argumento es un elemento que necesita la funcion para poder ejecutarse
4.2.- Los argumentos pueden ser de cualquier tipo --> string,number,boolean,array,objetos,funciones
5.- Abrir el bloque de codigo con los corchetes {}
6.- Dentro de los corchetes escribir lo que queramos que haga nuestra funcion
7.- Si necesitamos retornar algun resultado, se hará con la palabra return al final del bloque de codigo
7.1.- Si no retornamos nada el resultado se queda encerrado dentro del bloque de codigo de la funcion
8.- Cerrar la funcion con el corchete de cierre }
9.- Para invocar a la funcion tenemos que llamarla por su nombre y añadirle los parentesis, y añadirle argumentos en el caso de que los necesite.
10.- Si necesitas utilizar el resultado de una funcion en alguna otra parte de tu archivo, habrá que guardarlo en una variable.

*/

function sum(a, b) {
    let result = a + b;
    return result;
}

console.log(sum(3, 4));

const myArray = [1, 2, 3, 4];

// Necesitamos una funcion que sume los valores de un array y haga la media

function average(arrayNumbers) { //Los argumentos se pueden llamar como decidamos pero como buenas practicas, es importante que sean autodescriptivos
    //Recibir un array por parametros para poder sumar cada uno de sus elementos

    //Crear una variable suma para guardar la suma de los numeros del array y luego poder hacer la media
    let sum = 0;

    //Recorrer el array para sumar un elemento con los anteriores

    for (let i = 0; i < arrayNumbers.length; i++) {
        //Tenemos que sumar el numero que nos viene en cada iteracion con la suma que ya tenemos
        sum = sum + arrayNumbers[i];
    }

    //Dividir el resultado entre el numero de elementos del array
    let average = sum / arrayNumbers.length;

    //Retornar el resultado para que sea visible al exterior ---> media del array

    return average;

}

const averageNumbers = average(myArray);

console.log(averageNumbers);