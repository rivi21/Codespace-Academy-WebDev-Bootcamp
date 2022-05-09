/*Leer y guardar en una matriz las notas de los alumnos de un colegio
en función del número de cursos (filas) y del número de alumnos por curso (columnas).
El máximo de alumnos será 5 para cada uno de tres cursos.*/

const prompt = require('prompt-sync')();


/* function schoolQualifications(courses, students) {
    // Creo un array vacío que guardará para todos los cursos, las notas de todos los alumnos
    let ratings = [];
    //Un bucle for para iterar por cada curso
    for (let i = 0; i < courses; i++) {
        // Por cada curso creo otro array que guardará las notas de cada alumno del curso
        ratings[i] = [];
        //otro bucle for para iterar por cada alumno del curso
        for (let j = 0; j < students; j++) {
            //y registrar la nota de cada alumno
            let studentQuali = Number(prompt(`Nota final del alumno ${j + 1} del curso ${i + 1}º:  `))
            ratings[i].push(studentQuali);
        }

    }
    console.log(`Las notas por curso son:`);
    console.log(`1º curso: ${ratings[0]}`);
    console.log(`2º Curso: ${ratings[1]}`);
    console.log(`3º Curso: ${ratings[2]}`);
}
schoolQualifications(3, 5); */

function schoolQualifications() {
    const course = new Array(3);
    const student = new Array(5);
    // Creo un array vacío que guardará para todos los cursos, las notas de todos los alumnos
    let ratings = [];
    //Un bucle for para iterar por cada curso
    for (let i = 0; i < course.length; i++) {
        // Por cada curso creo otro array que guardará las notas de cada alumno del curso
        ratings[i] = [];
        //otro bucle for para iterar por cada alumno del curso
        for (let j = 0; j < student.length; j++) {
            //y registrar la nota de cada alumno
            let studentQuali = Number(prompt(`Nota final del alumno ${j + 1} del curso ${i + 1}º:  `))
            ratings[i].push(studentQuali);
        }
    }
    console.log(ratings);
}
schoolQualifications();