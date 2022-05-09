/* Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente.
Para la entrada de datos se utiliza una estructura Mientras, sin saber a priori
la cantidad de datos que se ingresarán.
Pista: Los datos alfanuméricos (strings) también se pueden comparar
con los operadores < y >. */

const prompt = require('prompt-sync')();

function namesList() {
    let namesArray = [];
    let count = 0;
    let name;
    //se introducen todos los nombres que se necesiten
    do {
        count++;
        name = (prompt(`Introduce el nombre nº ${count}: `));
        //se añade el nombre escrito como último elemento del array
        namesArray.push(name);
        //Si no introducimos ninguna letra, el ultimo elemento lo borramos con .pop
        if (name === '') {
            namesArray.pop();
        }
    }
    while (name !== '');
    //ordeno los elementos alfabéticamente con el método burbuja
    let size = namesArray.length;

    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - 1; j++) {
            if (namesArray[j] > namesArray[j + 1]) {
                aux = namesArray[j];
                namesArray[j] = namesArray[j + 1];
                namesArray[j + 1] = aux;
            }
        }
    }
    return namesArray;
}
console.log(namesList());


