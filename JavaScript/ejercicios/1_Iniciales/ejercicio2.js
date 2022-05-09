/* Algoritmo que lea dos números, calcule y escriba el valor 
de su suma, resta, producto y división. */

const firstNumber = 8; // tendría que cambiar const por let para poder sobreescribirla 
const secondNumber = 4; // dsps esto const prompt = require('prompt-sync')();

/* firstNumber = parseInt(firstNumber)
   secondNumber = parseInt(secondNumber) 
Asi sobreescribo la variable original. Es bueno hacerlo para no tener que acordarme si 
vuelven a salir después*/

const suma = firstNumber + secondNumber;
const resta = firstNumber - secondNumber;
const producto = firstNumber * secondNumber;
const división = firstNumber / secondNumber;

console.log('firstNumber =', firstNumber, 'secondNumber =', secondNumber,
    'suma =', suma, 'resta =', resta, 'producto =', producto, 'división =', división);


/* En caso de pedir los números por consola, habría que
utilizar parseInt() o Number() en la suma para que no
las concatene ya que el prompt() considera, lo que pongas,
una string y no un número auque sea un número */