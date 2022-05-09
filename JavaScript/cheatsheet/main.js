// Tipos de datos 

// Numeros

number1 = 5;

number2 = 3.55568;

number3 = -14.8;

number4 = number1 + number3;

console.log(number1, number2, number3, number4);


//Strings

address = "Calle Larios nº5";

lastname = "Díaz";

postfile = "Teletrabajo, ¿sí o no?";

console.log("vivo en la", address);
console.log("Y me llamo Fernando", lastname);


//Booleanos o lógicos

isAlive = true;
examPassed = false;

//operador typeof
console.log(typeof number1, typeof 5, typeof lastname, typeof "", typeof isAlive, typeof false);


//Variables y constantes
//"let variable"  La primera vez que declaramos una variable hay que poner let delante
//"const constante"  Para una constante ponemos const

let variable;//Definiendo

variable = 5;// Inicializando

const year = 1990;

variable = 10;

/* year = 1991; */ /* Al cambiar el valor de la constante me daria error porque no se puede 
y me dice la linea concreta donde está el error:
home/javirivas/Documentos/Tema2.4_javascript/cheatsheet/main.js:46
TypeError: Assignment to constant variable */

console.log(variable);
/* si no inicializamos una variable, javascript no peta a no ser que
queramos hacer cálculos con ella, sino que si la imprimimos la considera
"undefined" hasta que la inicialicemos*/
/* sin embargo la constante hay que inicializarla a la vez que la definimos,
porque si no da error de sintaxis:
SyntaxError: Missing initializer in const declaration */
/* si no sabemos si algo va a cambiar es mejor usar constantes antes que variables
 para tener mas control. Siempre podremos volver atrás para cambiarlo */
/* Hasta ecma6 se usaba var en lugar de let. Por eso veremos muchos programadores
que siguen usándolo porque es retrocompatible. Pero si vemos código con var
se lo cambiamos a let */

/* es mejor desclosar el codigo y hacerlo legible para el programador
que ponerlo todo en una linea */

//SCOPE (Ámbito)
// var ->  scope / ámbito de función
// let / const -> scope / ámbito de bloque

function saludar() {
    console.log(count);

    for (var count = 0; count < 5; count++) {
        console.log(count);
    }

    console.log('Final', count);
}/* el log de var antes de definirla funcionaría xq var se comporta así, 
es más flexible que let y const pero no detecta los errores. Tiene un comportamiento global.
Sin embargo let y const al existir y morir dentro del bloque donde se han definido limitan mas los 
errores como dos let con el mismo nombre, o que se utilice antes de que exista */


//Expresiones lógicas
let p = true;
let q = true;

console.log("p:", p, "q:", q);
/* en una expresion podremos hacer cómputos con datos, variables o lo que sea
 siempre que todas sean del mismo tipo, es decir que sean lógicas, o números, etc.
 ex: p = (5>=5) && true && q Esto se podría computar (p = true)*/

/* este operador = hace que la parte derecha se guarda en la de la izqda
== no es una asignación sino una comparación
En javascript 6 == "6" este operador  */

p = !p;    //(false) Inversión
p == q;    //(false)Comparación de igualdad
5 > 2;     //(true)Mayor que 
2 <= 5;    //(true)menor o igual que
5 === "5"; //(false)operador de igualdad estricta (valor y tipo iguales)
5 == "5";  //(true)operador de igualdad laxo (solo valor, aunque el tipo sea distinto)
5 != 4;    //(true) operador de diferencia

//Condicionales

//If

let nota = 4;

if (nota >= 5) {
    //operaciones a ejecutar si se cumple la condición
    console.log("Con nota", nota, ". Estás aprobado.");
    //if else
} else {//en cualquier otro caso
    console.log("Con nota", nota, ". Estás suspenso");

}
/* edge cases (casos extremos para la condición dada. En este caso ¿qué nºs
están al límite? aquí solo el 5. Esto se comprueba para buscar
los posibles errores */

//if else if: para ir sumando opciones o escenarios posibles. Cuando se cumple una
// deja de procesar
//switch: para comprobar variables con un  nº finito y pequeño de valores posible


// prompt module/ Pedir datos al usuario por teclado / https://www.npmjs.com/package/prompt-sync
const prompt = require('prompt-sync')(); //esta linea es obligatoria. Tal cual
//
// get input from the user.
//
/* const name = prompt('Como te llamas? ');
const surname = prompt('Y tu apellido?') */

/* console.log("Encantado de conocerte", name, surname); */

console.clear();/* limpia los console(log) anteriores */

// BUCLES

/* let count = 1;

while (count < 10) {
    console.log(count);
    count = count + 1;
} */

/* let count = 20

while (count > 0) {
    console.log(count);
    count = count - 2;
} */

// bucle de 1 a 1,000.000 que imprima en saltos *10
/* let count = 1;

while (count <= 1000000) {
    console.log(count);
    count = count * 10;
} */

// Bucle que imprima los count pares (CON IF DENTRO)
/* let count = 0;

while (count <= 10) {
    if (count % 2 === 0) {
        console.log(count);
    }
    count = count + 1; /* estas modificaciones siempre abajo del todo
    porque son para el siguiente ciclo  
} */

/* Ahora para comprobar datos introducidos erroneos,
no saldría del bucle hasta que el dato no sea válido */

let userNumber = parseInt(prompt('Introduce un nº natural '));

while (userNumber < 0) {
    userNumber = parseInt(prompt('Introduce un nº natural '));
}

console.log('Nº introducido:', userNumber);
//do-while
//Asegura que la 1ª iteración se ejecute si o si
//después de la 1ª, es un while normal
do {
    userNumber = parseInt(prompt('Introduce un nº natural '));
} while (userNumber <= 0);

//BUCLE FOR

// SE USA CUANDO SABES EL Nº DE REPETICIONES DE ANTEMANO

/* let initialValue = 0;
let limit = 15 */

// for(definimos variable; condición de control; incremento)
/* for (let count = initialValue; count < limit; count++) {
    console.log(count);
} */

//dos for loops anidados, imprimiendo los dos pero uno con "interno" Y SU CONTADOR
// Y EL OTRO "EXTERNO" Y SU CONTADOR

let initialValue = 0;
let limit = 3;


for (let count1 = initialValue; count1 < limit; count1++) {

    console.log('Iteración ', count1, ' del bucle externo');

    for (let count2 = initialValue; count2 < limit; count2++) {
        console.log('Iteración ', count2, ' del bucle interno');
    }

    console.log("");
}

//ARRAYS ; Lista ordenada de elementos. La primera posición es cero

//Array Unidimensional
let array = [1, 3, 56, 100]; //array de numeros
console.log(array);

let peliculas = ['Avatar', 'El Padrino', 'Matrix'];//Array de Strings
peliculas[1] = 'Rambo';

console.log(peliculas);

let diasDeTrabajo = [true, false, false, true, false];//Array de booleanos

diasDeTrabajo[2] = true;

diasDeTrabajo.length;// .length es uno de los métodos de los arrays. Hay muchos y son VIP

console.log(diasDeTrabajo.length);

let myArray = new Array(3); // esto es = a let myArray = [] Es otra forma de declarar un array pero se usa poco
// El nº entre paréntesis es el nº de posiciones del Array
// Así crearía un array de 3 posiciones vacías

//método Burbuja
// Dado un array de números desordenados, ordenar dichos numeros
// de menor a mayor
let arrayNum = [5, 8, 2, 9, 7];

for (let i = 0; i < arrayNum.length - 1; i++) {

    for (let j = 0; j < arrayNum.length - 1; j++) {

        if (arrayNum[j] > arrayNum[j + 1]) {
            /* let aux = arrayNum[j];
            arrayNum[j] = arrayNum[j + 1];
            arrayNum[j + 1] = aux; */ /* Lo de abajo es lo mismo que esto */
            [arrayNum[j], arrayNum[j + 1]] = [arrayNum[j + 1], arrayNum[j]];
        }
    }
}
//otra forma de hacerlo
for (let i = 0; i < arrayNum.length - 1; i++) {
    for (let j = arrayNum.length - 1; j >= 1; j--) {
        if (arrayNum[j - 1] > arrayNum[j]) {
            let aux = arrayNum[j - 1];
            arrayNum[j - 1] = arrayNum[j];
            arrayNum[j] = aux;
        }
    }
    console.log(arrayNum);
}
//Array Multidimensional

const subGeneros = ['Terror', 'Suspense', 'Thriller'];
const generos = [subGeneros, 'Fantasia', 'Acción'];

const peli1 = ['Drácula', generos[0][0], 1995]; //el 2º [0] corresponde a subgeneros
const peli2 = ['Avatar', generos[1], 2009];
const peli3 = ['Rambo', generos[2], 1982];

const listaPelis = [peli1, peli2, peli3];

for (let i = 0; i < listaPelis.length; i++) {
    console.log(listaPelis[i]);
}

//ejemplo array multidimensional

