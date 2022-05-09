/* Construir un algoritmo que dado como datos 5 calificaciones de 
un alumno imprima el promedio y la palabra “aprobado” si el alumno 
tiene un promedio mayor o igual que 5, y la palabra “no aprobado” 
en caso contrario. */


const prompt = require('prompt-sync')();

const nota1 = parseInt(prompt('calificación 1: '));
const nota2 = parseInt(prompt('calificación 2: '));
const nota3 = parseInt(prompt('calificación 3: '));
const nota4 = parseInt(prompt('calificación 4: '));
const nota5 = parseInt(prompt('calificación 5: '));
/* Al hacer el prompt dentro del parseInt podemos declararla como constante
porque no habrá que transformar luego  */

if (isNaN(nota1)
    || isNaN(nota2)
    || isNaN(nota3)
    || isNaN(nota4)
    || isNaN(nota5)) {
    console.log('Las calificaciones DEBEN ser números');
} else {
    const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    if (media >= 5) {
        console.log('nota media: ', media, 'aprobado');
    } else {
        console.log('nota media: ', media, 'no aprobado');
    }
}