const prompt = require('prompt-sync')();

const N = Number(prompt('elige un número: '));

/* let count = 0;
let sum = 0;

while (count < N) {
    sum = sum + count;
    count += 1;
}
console.log('La suma es: ', suma); */

// con bucle FOR
let sum = 0;
for (i = 0; i <= N; i++) {

    sum = sum + i;
}
console.log(`La suma de los ${N} primeros números naturales es: ${sum}`);
