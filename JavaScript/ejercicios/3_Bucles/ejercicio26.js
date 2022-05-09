const prompt = require('prompt-sync')();


for (let count = 1; count <= 10; count++) {

    console.log('Introduce el número ', count, 'º');

    const numero = parseInt(prompt('> '));

    console.log('El cubo de ', numero, 'es', numero ** 3);
}