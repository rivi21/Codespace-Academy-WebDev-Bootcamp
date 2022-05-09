// ahora do-while

/*
 const prompt = require('prompt-sync')();

let choosenInt = parseInt(prompt('Introduce un nº natural: '));

while (choosenInt <= 0) {
    choosenInt = parseInt(prompt('Introduce un nº natural: '));
} */

const prompt = require('prompt-sync')();

let number;

do {
    number = parseInt(prompt('Introduce un nº natural: '));
} while (number <= 0);

/* esto  nos permite no repetir dos veces el prompt.
Hace lo del do, si o si, y luego comprueba. Asegura que la primera iteración se
ejecute si o si. Desps de la 1ª iteración es un bucle normal
Todo lo que se puede hacer con un while, se puede hacer con un do-while
No es que uno sea mejor que el otro, sino que el do-while es mas limpio */