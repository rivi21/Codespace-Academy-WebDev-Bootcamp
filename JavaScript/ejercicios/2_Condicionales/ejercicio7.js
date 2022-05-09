/* Construir un algoritmo que dado el coste de un artículo vendido 
y la cantidad de dinero entregado, calcule e imprima el cambio que 
se debe entregar al cliente. */


let prompt = require('prompt-sync')();

let costeArticulo = parseInt(prompt('Precio de venta = '));
let dineroEntregado = parseInt(prompt('Dinero entregado = '));

let cambio = dineroEntregado - costeArticulo;

console.log('Devolución = ', cambio);
