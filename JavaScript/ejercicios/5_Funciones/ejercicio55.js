/*  Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100.
    Imprimirla en forma de matriz o tabla, con sus filas y columnas. */

/* function matrix(rows, columns) {

    for (let i = 0; i < rows; i++) {
        let array = [];
        const voidPlace = ' ';

        for (let j = 0; j < columns; j++) {
            let randomNumber = Math.floor(Math.random() * (100) + 1);//si  math.random saca de 0 incluido a 1 no incluido el (100 -1) no hace falta

            if (randomNumber < 10) {
                randomNumber = voidPlace + voidPlace + randomNumber;

            } else if (randomNumber < 100) {
                randomNumber = voidPlace + randomNumber;

            }
            array = array + randomNumber + voidPlace;
        }
        console.log(array);
    }
} */

function matrix(rows, columns) {
    let array = [];

    for (let i = 0; i < rows; i++) {
        array[i] = [];
        const voidPlace = ' ';

        for (let j = 0; j < columns; j++) {
            let randomNumber = Math.floor(Math.random() * (100) + 1);

            if (randomNumber < 10) {
                randomNumber = voidPlace + voidPlace + randomNumber;

            } else if (randomNumber < 100) {
                randomNumber = voidPlace + randomNumber;

            }
            array[i] = array[i] + randomNumber + voidPlace;
        }
        console.log(array[i]);
    }                       //¿DONDE PONGO EL CONSOLE LOG?
    // console.log(array);
}
matrix(20, 20);




