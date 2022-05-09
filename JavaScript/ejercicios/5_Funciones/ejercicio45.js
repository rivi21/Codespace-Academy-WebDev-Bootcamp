const prompt = require('prompt-sync')();
const size = parseInt(prompt('introduce un número: '));
let vectorOne = [];

//función para generar un array
function initialVector() {
    /* let vectorOne = []; */
    for (i = 0; i < size; i++) {
        vectorOne[i] = Math.floor(Math.random() * 100);
    }
    return vectorOne;
}
initialVector();
let vectorTwo = [];

for (i = 0; i < size; i++) {
    //para comprobar que indice cumple las condiciones
    if ((vectorOne[i] % 2 === 0) && (vectorOne[i] > 25)) {
        //para añadir el indice que las cumpla al vector dos
        vectorTwo[i] = vectorOne[i];
    } else {
        vectorTwo[i] = '';
    }
}
//para eliminar del segundo vector los elementos que no cumplen la condición
vectorTwo = vectorTwo.filter(function (item) {
    return item !== '';
});

console.log(`vectorOne = [${vectorOne}]`);
console.log(`vectorTwo = [${vectorTwo}]`);