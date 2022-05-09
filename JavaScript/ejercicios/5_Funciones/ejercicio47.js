/* Dados un array de 5 elementos con números aleatorios del 1 al 100. 
Imprimir el estado inicial del array, ordenarlo de forma ascendente y 
volver a imprimir el nuevo estado. */

//funcion para crear un nuevo array de N elementos y oredenarlos de forma ascendente

function createRandomArray(size) {
    //creo el array de N elementos (N aqui = size)
    let myArray = [];
    for (let i = 0; i < size; i++) {
        myArray.push(Math.floor(Math.random() * 100 + 1));
    }
    console.log(`Estado inicial del array creado: myArray = [${myArray}]`);
    //ordeno los elementos de forma ascendente con el método burbuja
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - 1; j++) {
            if (myArray[j] > myArray[j + 1]) {
                aux = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = aux;
            }
        }
    }
    console.log(`Ordenado de forma ascendente: myArray =[${myArray}]`);
}
createRandomArray(10);