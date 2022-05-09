// ahora hacemos el E10 con switch

const prompt = require('prompt-sync')();

const categoría = parseInt(prompt('Categoría: '));
let sueldo = parseInt(prompt('sueldo en €: '));

switch (categoría) {
    case 1:
        sueldo = sueldo * 1.15;
        break; //el break termina la ejecución
    case 2:
        sueldo = sueldo * 1.1;
        break;
    case 3:
        sueldo = sueldo * 1.06;
        break;
    case 4:
        sueldo = sueldo * 1.03;
        break;

    default:
        console.log('Categoría no válida');
        break;
}
if (categoría >= 1 && categoría <= 4) {
    console.log('Con categoría', categoría, 'tu nuevo sueldo es', sueldo);
}