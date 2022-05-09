/* Comprobar si un número N positivo es primo. Se dice que un número entero positivo N es un número primo
 si los únicos enteros positivos que lo dividen son exactamente 1 y N (él mismo). */

const prompt = require('prompt-sync')();

let N = prompt('Introduce un nº positivo: ');
let numeroPrimo = true;

function primo() {
    let count = 2;
    while (count <= N / 2 && numeroPrimo === true) {
        if (N % count === 0) {
            numeroPrimo = false;
        }
        count++;
    }
    if (numeroPrimo === true) {
        console.log(`El nº ${N} es primo`);
    } else {
        console.log(`El nº ${N} no es primo`);
    }
}
primo()
//Hacerlo otra vez con for
