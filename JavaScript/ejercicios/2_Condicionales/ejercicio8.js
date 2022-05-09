/* Dado el sueldo de un trabajador, diseña un algoritmo que aplique 
un incremento de sueldo del 15% si el sueldo es inferior a 1000€. 
Imprimir el nuevo sueldo. */


let prompt = require('prompt-sync')();

let sueldoTrabajador = parseInt(prompt('sueldo = '));


if (sueldoTrabajador < 1000) {
    console.log('Aplicar subida del 15%');
    sueldoTrabajador = sueldoTrabajador * 1.15;
}
console.log('sueldo aplicable =', sueldoTrabajador, '€');