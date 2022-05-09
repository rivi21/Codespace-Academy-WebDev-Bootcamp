const prompt = require('prompt-sync')();

const N = parseInt(prompt('N = '));

// caso A-------------------------------------------------------

for (let row = 1; row <= N; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) {
        line = line + column;  // se puede pomer line += column porque al ser una string la suma concatena los resultados
    } console.log(line);
}

//  caso B------------------------------------------------------

for (let row = 1; row <= N; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) {
        line = line + row;
    } console.log(line);
}

// caso C-------------------------------------------------------

let count = 1;
for (let row = 1; row <= N; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) {
        line = line + String(count) + ' '; //Idem a line += String(count) + ' '; ó line += '${count}'
        count++;
    } console.log(line);
}