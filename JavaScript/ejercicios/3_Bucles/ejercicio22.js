let count = 1;

let multiplosDe2 = 0;
let multiplosDe3 = 0;

while (count <= 100) {

    if (count % 2 === 0) {
        console.log(count, 'es múltiplo de 2');
        multiplosDe2++;
    }
    if (count % 3 === 0) {
        console.log(count, 'es múltiplo de 3');
        multiplosDe3++;
    }
    count++; //count = count + 1
}
console.log('Entre 1 y 100, el 2 tiene', multiplosDe2, 'múltiplos.');
console.log('Entre 1 y 100, el 3 tiene', multiplosDe3, 'múltiplos.');

// PARA DESHARCODEARLO. 
/* Esto es bueno para reutilizar código ya que es flexible y se adapta a cualquier dato */

let count = 1;
let limit = 100;

let multiplos1 = 0;
let multiplos2 = 0;

let numero1 = 2;
let numero2 = 3;

while (count <= limit) {

    if (count % numero1 === 0) {
        console.log(count, 'es múltiplo de', numero1);
        multiplos1++;
    }
    if (count % 3 === 0) {
        console.log(count, 'es múltiplo de ', numero2);
        multiplos2++;
    }
    count++; //count = count + 1
}
console.log('Entre 1 y ', limit, ' el ', numero1, 'tiene', multiplos1, 'múltiplos.');
console.log('Entre 1 y ', limit, ' el ', numero2, 'tiene', multiplos2, 'múltiplos.');

//con bucle For

let multiplos1 = 0;
let multiplos2 = 0;

const numero1 = 2;
const numero2 = 3;

const limit = 100;

for (let i = 1; i <= limit; i++) {

    if ((i % 2 === 0) && (i % 3 === 0)) {
        console.log(i, 'es múltiplo de', numero1, 'y', numero2);
        multiplos1++;
        multiplos2++;
    }
    if ((i % 2 === 0) && (i % 3 !== 0)) {
        console.log(i, 'es múltiplo de', numero1);
        multiplos1++;
    }
    if ((i % 2 !== 0) && (i % 3 === 0)) {
        console.log(i, 'es múltiplo de ', numero2);
        multiplos2++;
    }
}
console.log(`Hay ${multiplos1} múltiplos de ${numero1} entre 1 y ${limit}`);
console.log(`Hay ${multiplos2} múltiplos de ${numero2} entre 1 y ${limit}`);