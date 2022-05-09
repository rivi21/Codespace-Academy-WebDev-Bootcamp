const prompt = require('prompt-sync')();

const N = parseInt(prompt('N = '));

for (count = 1; count <= 10; count++) {

    console.log(N, 'X', count, '=', N * count);

}