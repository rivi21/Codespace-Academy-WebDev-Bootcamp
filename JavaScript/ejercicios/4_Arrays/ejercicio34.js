//apartado A
const prompt = require('prompt-sync')();
const usuario = Number(prompt('Escribe un número entero del 1 al 10: '));

let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
if (usuario === randomNumber) {

    console.log('0UUUU YEAAAH!!!');
} else {
    console.log('YOU!! FUCKING LOOOOOSER...TRY AGAIN');
}
/* REPASAR LOS EJERCICIOS CON BUCLES WHILE HASTA QUE ACIERTE EL Nº */

//apartado B
/* const usuario = Number(prompt('Escribe un número entero del 1 al 100: '));

let randomNumber = Math.floor(Math.random() * 100 + 1);

console.log(randomNumber);
if (usuario > randomNumber) {

    console.log('Tu número es mayor');
} else {
    console.log('Tu número es menor');
} */