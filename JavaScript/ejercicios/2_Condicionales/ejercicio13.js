const prompt = require('prompt-sync')();

const base = parseInt(prompt('base en cm: '));
const altura = parseInt(prompt('altura en cm: '));

const superficie = base * altura;
const perímetro = 2 * (base + altura);

if (isNaN(base) || isNaN(altura) || base <= 0 || altura < 0) {
    console.log('Los datos de base y altura son numeros positivos');
} else {
    console.log('Superficie = ', superficie, 'cm²');
    console.log('Perímetro = ', perímetro, 'cm');
}

