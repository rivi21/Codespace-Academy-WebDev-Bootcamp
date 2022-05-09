/* Construir un algoritmo que dado la categoría y sueldo de un 
trabajador calcule el aumento de sueldo correspondiente teniendo en 
cuenta la siguiente tabla. Imprimir la categoría del trabajador y 
su nuevo sueldo.
CATEGORIA   1   2   3   4
INCREMENTO  15% 10% 6%  3% */


const prompt = require('prompt-sync')();

const categoría = parseInt(prompt('Categoría: '));
let sueldo = parseInt(prompt('sueldo en €: '));

if ((isNaN(categoría) || categoría < 1 || categoría > 4) && (!isNaN(sueldo) && sueldo > 0)) {
    console.log('La categoría ha de ser 1, 2, 3, ó 4');

} else if ((!isNaN(categoría) && categoría >= 1 && categoría <= 4) && (isNaN(sueldo) || sueldo <= 0)) {
    console.log('El sueldo ha de ser un número positivo');

} else if ((isNaN(categoría) || categoría < 1 || categoría > 4) && (isNaN(sueldo) || sueldo <= 0)) {
    console.log('A ver si nos centramos un poquito...');
} else {
    if (categoría === 1) {
        sueldo = sueldo * 1.15;
    }
    else if (categoría === 2) {
        sueldo = sueldo * 1.10;
    }
    else if (categoría === 3) {
        sueldo = sueldo * 1.06;
    }
    else /* if (categoría === 4) */ {
        sueldo = sueldo * 1.03;
    }
    console.log('Categoría: ', categoría, 'Nuevo sueldo: ', sueldo, '€');
}

