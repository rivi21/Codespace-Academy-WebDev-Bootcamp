const prompt = require('prompt-sync')();

let sonidosGrillo = parseInt(prompt('sonidos grillo por minuto: '));
/* esto sería igual a poner:
let sonidosGrillo = Number(prompt('sonidos grillo por minuto: ')); */

if (sonidosGrillo > 0) {
    const temperatura = sonidosGrillo / 4 + 40;
    console.log('Temperatura: ', temperatura, 'ºC');
} else {
    console.log('error');
}
