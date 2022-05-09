const prompt = require('prompt-sync')();

let notaTeorica;//se pueden declarar dentro del bucle (solo existirían dentro de él)
let notaProblemas;
let notaPractica;
let notaFinal;

let nombreAlumno = (prompt('Escribe nombre: '));
let cadenaVacia = '';

while (nombreAlumno !== cadenaVacia) {

    notaTeorica = parseInt(prompt('Nota teórica: '));
    notaProblemas = parseInt(prompt('Nota problemas: '));
    notaPractica = parseInt(prompt('Nota práctica: '));

    if (notaTeorica < 0 || notaTeorica > 10 || isNaN(notaTeorica)
        || notaProblemas < 0 || notaProblemas > 10 || isNaN(notaProblemas)
        || notaPractica < 0 || notaPractica > 10 || isNaN(notaPractica)) {

        console.log('Error de escritura en alguna nota ');

    } else {
        notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;
        console.log(nombreAlumno, ' Nota final: ', notaFinal);
    }
    nombreAlumno = (prompt('Escribe nombre: '));
}

//Jesús lo ha hecho con do-while así;
/* const prompt = require('prompt-sync')();

let nombreAlumno;

do {
    nombreAlumno = (prompt('Escribe nombre: '));

    if (nombreAlumno != '') {
        let notaTeorica = parseInt(prompt('Nota teórica: '));
        let notaProblemas = parseInt(prompt('Nota problemas: '));
        let notaPractica = parseInt(prompt('Nota práctica: '));

        if (notaTeorica < 0 || notaTeorica > 10 || isNaN(notaTeorica)
            || notaProblemas < 0 || notaProblemas > 10 || isNaN(notaProblemas)
            || notaPractica < 0 || notaPractica > 10 || isNaN(notaPractica)) {

            console.log('Error de escritura en alguna nota ');
        } else {
            const notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;
            console.log(nombreAlumno, ' Nota final: ', notaFinal);
        }
    }
} while (nombreAlumno != '') */




