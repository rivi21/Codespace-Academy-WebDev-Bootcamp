const prompt = require('prompt-sync')();

let dia = parseInt(prompt('Elige un día: '));
let mes = parseInt(prompt('Elige un mes: '));
let año = parseInt(prompt('Elige un año: '));

while (dia < 0 || dia > 31 || mes <= 0 || mes > 12 || año < 1) {
    console.log('Has introducido mal los datos.');

    dia = parseInt(prompt('Elige un día: '));
    mes = parseInt(prompt('Elige un mes: '));
    año = parseInt(prompt('Elige un año: '));
}
let mesNombre;
switch (mes) {
    case 1: mesNombre = 'Enero'; break;
    case 2: mesNombre = 'Febrero'; break;
    case 3: mesNombre = 'Marzo'; break;
    case 4: mesNombre = 'Abril'; break;
    case 5: mesNombre = 'Mayo'; break;
    case 6: mesNombre = 'Junio'; break;
    case 7: mesNombre = 'Julio'; break;
    case 8: mesNombre = 'Agosto'; break;
    case 9: mesNombre = 'Septiembre'; break;
    case 10: mesNombre = 'Octubre'; break;
    case 11: mesNombre = 'Noviembre'; break;
    case 12: mesNombre = 'Diciembre'; break;
    default: mesNombre = 'invalid'; break;
}
console.log('dia', dia, 'de', mesNombre, 'del', año);