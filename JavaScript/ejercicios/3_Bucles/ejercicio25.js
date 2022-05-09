// con For

let side = 4;

for (let row = 0; row < side; row++) {
    let cell = '';

    for (let column = 0; column < side; column++) {

        if (((row > 0) && (column > 0)) && ((row < 3) && (column < 3))) {

            cell = cell + ' ';

        } else {

            cell = cell + '*';

        }

    } console.log(cell);
}

/* solucion Jesus */
/* let side = 4;

for (let filas = 0; filas < side; filas++) {
    let row = '';
    for (let columnas = 0; columnas < side; columnas++) {
        row = row + '*';
    }
    console.log(row);
} */