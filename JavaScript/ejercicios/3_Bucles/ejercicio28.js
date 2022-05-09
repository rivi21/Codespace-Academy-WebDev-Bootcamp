const prompt = require('prompt-sync')();

let seconds = Number(prompt('Introduce el nº de segundos del temporizador: '));

//con set interval()

/* const time = 1000;
const foo = function () {
    console.clear();
    number--;
    console.log(number);

    if (number === 0) {
        clearInterval(interval);
        console.log('riiiing');
    }
}

const interval = setinterval(foo, time); */

// mi solución
const delay = 1000;
const timer = setInterval(process, delay);

function process() {
    console.log(seconds);
    console.clear;
    seconds--;

    if (seconds === 0) {
        clearInterval(timer);
        console.log('¡¡Ring!!');
    }
}