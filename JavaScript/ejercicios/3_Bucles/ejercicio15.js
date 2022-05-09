const prompt = require('prompt-sync')();

let choosenInt = parseInt(prompt('Introduce un nº natural: '));

while (choosenInt <= 0) {
    choosenInt = parseInt(prompt('Introduce un nº natural: '));
}
if (choosenInt % 2 === 0) {
    console.log('El número', choosenInt, 'es par');
}
else {
    console.log('El número', choosenInt, 'es impar');
}
