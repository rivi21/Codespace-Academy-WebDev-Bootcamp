const prompt = require('prompt-sync')();

const gallons = Number(prompt('Introduce la cantidad de galones: '));

const gallonsToLitres = 3.78541;
const litrePrice = 1.333;

const litres = gallons * gallonsToLitres;
const price = litres * litrePrice;

console.log(gallons, 'galones son', litres, 'litros y el precio es', price, '€');

//opcion 2

/* price = gallons * 3.78541 * 1.333;

console.log(gallons, 'galones son', litres, 'litros y el precio es', price, '€'); */
