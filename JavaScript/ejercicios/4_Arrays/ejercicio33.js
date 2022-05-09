const prompt = require('prompt-sync')();


let array = [];

for (let i = 0; i < 10; i++) {

    array[i] = parseInt(prompt('Introduce índice ' + i + ':'));

}
console.log('array = ', array);