//---------for()


const bootcamp = ['HTML', 'CSS', 'JAVASCRIPT', 'BBDD', 'PHP'];

/* for (let i = 0; i < bootcamp.length; i++) {

    console.log(`${i + 1}.- ${bootcamp[i]}`);
} */

//----------for...of()

//es una mejora del for. Hace lo mismo de una forma menos tediosa 
//de construir

for (const language of bootcamp) {
    //lo que hace cada vuelta es asignar 
    //constlanguage = bootcamp[i]
    /* console.log(language); */
}
//No se puede acceder al índice, si necesitas eso 
//no necesitas un for of
//se suele usar para listar los elementos del array



//----------forEach

const numbers = [1, 2, 3, 4, 5, 10, 15];

//el forEach recibe una función como argumento, es decir, recibe un callback

/* numbers.forEach(writeNumbers);

function writeNumbers(value, index) {
    console.log(`number[${index}] -> ${value}`);
} */

//-----------------------------------

let sum = 0;

//función flecha
numbers.forEach(number => {
    sum += number;
});
//función anónima
numbers.forEach(function (number) {
    sum += number;
});
//no hace falta poner return para que devuelva un resultado.
//COMPROBARLO EN CASA

//Retorna en un objeto con las veces que se repite cada letra
//del tipo ==>{a:0,b:3...}
const letters = ['a', 'b', 'a', 'c', 'a', 'd', 'b'];

let counter = {};// pares tipo clave/valor como las propiedades de los objetos

letters.forEach(letter => {
    if (counter[letter]) {  //counter[letter] es la letra del array --> clave
        //aumentando el valor de esa clave en 1
        counter[letter]++;
    } else {
        counter[letter] = 1;//si no exite la creas y le das valor 1
    }
})
console.log(counter);