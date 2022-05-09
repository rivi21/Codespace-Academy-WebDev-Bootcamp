const prompt = require('prompt-sync')();

const N = parseInt(prompt('N = '));

/* for(count = N; count > 0; count--){

} */
let factorial = 1;

for (count = 1; count <= N; count++) {
    factorial = factorial * count;
}
console.log(N, '! =', factorial);