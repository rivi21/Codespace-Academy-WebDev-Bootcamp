// Recursividad


function foo() {
    console.log('Codespace');
    foo();
}
foo();

//crea un contexto de ejecución para la función bar
//----dentro del contexto de bar crea otro para la función foo
//estos contextos van apilados, lo que significa que cuando termina
//la ejecución de foo se devuelve el control a bar y cuando este termina
//se devuelve el control al programa principal

// Una vez queda claro esto, debemos saber que una función se puede llamar a si misma
// Ejemplo de funciones recursivas:
//Ej mal hecho:
function foo() {
    console.log('Hola');
    foo(); //---------Esto va a ser un bucle infinito xq no tiene condición de parada
}
//foo imprimiría 'Hola' y se volvería a llamar y así una y otra vez y no pararía nunca
// Habría que pensar como hacer para que, llegado a un punto, deje de llamarse a si misma y
//evitar que el pc se quede sin memoria. Esto lo haremos introduciendo en la función una condición
//de parada;
// 1)- CONDICIÓN DE PARADA
// 2)- LLAMAR A LA FUNCION CON UN ARGUMENTO DISTINTO QUE NOS PERMITA LLEGAR EN ALGÚN MOMENTO A 
// LA CONDICIÓN DE PARADA
// Ej: Una función que suma todos los nºs desde él mismo hasta el 8:

function sumN(number) {
    if (number === 0) {
        return 0;
    } return number + sumN(number - 1);
}
console.log(sumN(2));//3
// 
// 
// 

const array = [2, 3, 4];

//funcion recursiva que suma los elementos del array

function sumArray(arr) {
    //tiene que ir mi condición de parada
    if (arr.length === 0) {
        return 0;
    }
    //tiene que ir caso recursivo
    //eliminar el primer elemento del arrray
    return arr.shift(0 + sumArray(arr));
}
console.log(sumArray(array));

//sumArray([2,3,4]) ---> return 2 + sumArray([3,4]) ===> 2 + 3 + 4 + 0
//  sumArray ([3.4]) ---> return 3 + sumArray([4])  ===> 3 + 4 + 0
//      sumArray([4]) ---> return 4 + sumArray([])  ===> 4 + 0
//        sumArray([]) ---> return 0

// Una función que calcule la potencia de un nº N
//2^3 = 2*2*2
//A la hora de plantear una función, hacer el problema grande en cositas pequeñas
function potencia(number, exponente) { //cuantos argumentos necesitamos
    // condición de parada
    if (exponente === 0) {
        return 1;
    }
    //caso base o caso recursivo (construirlo para llegar a la condición de parada)
    return number * potencia(number, exponente - 1)
    //entonces irá apilando number*number*number*1 y al llegar a la parada,(1)
    //empieza a resolver en sentido contrario 1*number*number*number
}




