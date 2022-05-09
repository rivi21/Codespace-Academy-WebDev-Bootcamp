//-------------------1.Define e inicializa un array con 5 elementos string
//en una sola línea.

const personalPronouns = ['yo', 'tú', 'él', 'nosotros', 'ellos'];

//--------------------2.Define un array inicialmente vacío. 
//Añade tres elementos de tipo number posteriormente.
//Elimina por completo el primero y añade dos nuevos números al inicio. 
//En cada paso, imprime la longitud y el array entero por consola 
//utilizando un stringtemplatedel tipo: `Longitud: ${}`.

const myNumbers = [];
console.log(`Longitud: ${myNumbers.length}, myArray [${myNumbers}]`);
myNumbers.push(1, 2, 3);
console.log(`Longitud: ${myNumbers.length}, myArray [${myNumbers}]`);
myNumbers.shift();
console.log(`Longitud: ${myNumbers.length}, myArray [${myNumbers}]`);
myNumbers.unshift(4, 5);
console.log(`Longitud: ${myNumbers.length}, myArray [${myNumbers}]`);

//-------------------3.Escribe una función nombrada que devuelva true si el 
//argumento dado es de tipo boolean y false en caso contrario.

function isBoolean(argument) {

    if (typeof (argument) === "boolean") {
        return true;
    } else {
        return false;
    }
}
console.log(isBoolean(5 == '5'));

//otra forma mas corta y menos redundante xq el===ya nos devuelve true o false
function isBool(value) {
    return typeof value === 'boolean'
}
console.log(isBool(true));
console.log(isBool('true'));
console.log(isBool(4));

//-------------------4.Escribe una función que devuelva la longitud de un string 
//recibido por argumento
function stringLength(string) {
    return string.length;
}
console.log(`La longitud del string es: ${stringLength('Hola Mundo')}`);

//en flecha sería:
const lengthString = string => string.length;
console.log(lengthString('Hola Mundo'));


//--------------------5.Crea una función de flecha que reciba una cantidad de 
//minutos y lo devuelva convertido en segundos

function minToSeg(minutes) {
    return minutes * 60
}
console.log(minToSeg(10));

const seconds = minutes => minutes * 60
console.log(seconds(5));

const secondsIn = (minutes) => console.log(`${minutes} minutos son ${minutes * 60} segundos`);

//---------------------6.Crea una función que reciba un número y devuelva el siguiente 
//número par. (Si él es par, lo devolverá directamente)

function nextEven(number) {
    if (number % 2 === 0) {
        return number
    } else {
        return number + 1
    }
}
console.log(nextEven(4), nextEven(5));

//con operador ternario y función flecha:
const isEven = number => (number % 2 === 0) ? number : number + 1
console.log(isEven(4), isEven(5));

//---------------------7
//---------------------8


//---------------------9.Un granjero necesita contar la cantidad de patas de los animales 
//en sus diferentes granjas muy frecuentemente, pero tiene tres especies: pollos (2 patas), 
//vacas (4 patas) y cerdos (4 patas). Tu función recibirá la cantidad de animales en ese orden 
//y devolverá la cantidad de patas totales. Ejemplo:---countLegs(5,2,8);//output:50---

/* const prompt = require('prompt-sync')();

let numberOfLegs = prompt('Escribe un número = ');
let secondNumber = prompt('Escribe otro número = ');
let thirdNumber = prompt('Escribe un tercer número = '); */

function legsNumber(pollos, vacas, cerdos) {

    return (pollos * 2) + (vacas * 4) + (cerdos * 4)
}
console.log(legsNumber(5, 2, 8));

//10.Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.

function compareType(data1, data2) {
    if (typeof (data1) === typeof (data2)) {
        console.log(`${data1} y ${data2} son datos del mismo tipo`);
    } else {
        console.log(`${data1} y ${data2} son datos de diferente tipo`);
    }
}
compareType('a', 5)

//11.Crea una función que reciba un string con una frase y devuelva un array 
//donde cada elemento será una palabra de la frase original. 
//Investigar método existente de los strings para este fin.
const str = 'Este es mi string';

let strArray1 = str.split(' ');
console.log(strArray1);


//12.Inicializa dos objetos, address1 y address2 con las propiedades:
// provincia, ciudad, municipio, código postal, calle, número, planta, y número de puerta.

const address1 = {
    provincia: 'Valencia',
    ciudad: 'Valencia',
    municipio: 'Valencia',
    codigoPostal: 46009,
    calle: 'Menéndez Pidal',
    numero: 11,
    planta: 1,
    numeroDePuerta: 2,
}
const address2 = {
    provincia: 'Málaga',
    ciudad: 'Cala del Moral',
    municipio: 'Cala del Moral',
    codigoPostal: 23720,
    calle: 'Pintor Sorolla',
    numero: 40,
    planta: 2,
    numeroDePuerta: 3 + 'd',
}
console.log(address1, address2);

//13.Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y 
//de un TLD (top-leveldomain) como, por ejemplo .com/ .es / .org, etc. 
//Crea una función que se llame parseDomain()que reciba por argumento un string 
//y devuelva un objeto con dos propiedades: domain y tld. 
/*Ejemplo:
parseDomain("codespaceacademy.com");
 output:
{
    domain:"codespaceacademy",
    tld:"com"
} 
*/
function parseDomain(string) {
    const nombreDominio = {
        domain: '',
        tld: ''
    }
    counter = 0
    for (let i = 0; string[i] !== '.'; i++) {
        nombreDominio.domain = nombreDominio.domain + string[i];
        counter++
    }
    for (let i = counter; i < string.length; i++) {
        nombreDominio.tld = nombreDominio.tld + string[i];
    }
    return nombreDominio
}
console.log(parseDomain('codespaceacademy.com'));

//14.Nos han prohibido el uso del operador de igualdad estricta (===), 
//pero queremos poder seguir utilizando esa funcionalidad. 
//Crea una función que devuelva true si dos números tienen el mismo valor 
//y el mismo tipo de dato. Debemos usar el operador lógico “&&”. 
//Prueba tu función con estos dos inputs:---strictEquality("5",5);//false---strictEquality(5,5);//true

function stritEquality(number1, number2) {
    if (typeof (number1) == typeof (number2) && number1 == number2) {
        return true;
    } else {
        return false;
    }
}
console.log(stritEquality('5', 5))

//15.Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso contrario.

function twoStrings(stringOne, stringTwo) {
    if (stringOne.length === stringTwo.length) {
        return true;
    } else {
        return false;
    }
}
console.log(twoStrings('pepe', 'Luis'));

//16.Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

function isVoidString(string) {
    if (string === '') {
        console.log(`Es un string vacío`);
    } else {
        console.log(string);
    }
}
isVoidString('');

//17.Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes: •while•for•forof•forEach.

const personalPronounsTwo = ['yo', 'tú', 'él', 'nosotros', 'ellos'];

//while
counterWhile = 0;
console.log('Con bucle while:');
while (counterWhile < personalPronounsTwo.length) {
    console.log(personalPronounsTwo[counterWhile]);
    counterWhile++
}
//for
console.log('Con bucle for:');
for (i = 0; i < personalPronounsTwo.length; i++) {
    console.log(personalPronounsTwo[i]);
}
//for...of
console.log('Con bucle for...of:');
for (const argument of personalPronounsTwo) {
    console.log(argument);
}
//forEach
console.log('Con bucle forEach:');
personalPronounsTwo.forEach(writePronouns)
function writePronouns(argument) {
    console.log(argument);
}
//forEach con función flecha
console.log('Con bucle forEach + función flecha');
personalPronounsTwo.forEach((argument) => console.log(argument));

//18. Crea una función que reciba un string y un número N y devuelva el string original repetido N veces.
//---------repeatString("No haré memes sobre el profesor. ", 2);
//--------------output: ”No haré memes sobre el profesor. No haré memes sobre el profesor. ”
function repeatString(string, numberN) {
    output = '';
    for (i = 0; i < numberN; i++) {
        output = output + string;
    }
    return output;
}
console.log(repeatString('Y volé y voló ', 3));


//19. Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva 
//la cuenta final.
//---------getVoteCount({upVotes: 35, downVotes: 15}); // 20

function getVoteCount({ upVotes, downVotes }) {
    const finalCount = upVotes - downVotes;
    return finalCount;
}
console.log(getVoteCount({ upVotes: 30, downVotes: 10 }));

//----------------------------20. Crea una función que recibe un array de tipos de datos mezclados y que devuelva 
//otro array con el tipo de cada uno de los elementos.
//--------getTypes(["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"]);
//--------..output ["string", "number", "object", "number", "undefined", "object", "string"];

const mixedTypes = ["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"];

function getTypes([]) {
    let output = [];
    for (i = 0; i < mixedTypes.length; i++) {
        output[i] = `${typeof (mixedTypes[i])}`;
    }
    return output;
}
console.log(getTypes(["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"]));

//----------------------  -21. Función que dado un array de números con formato string devuelva un array con 
//los números ya parseados.----getParsedNumbers(["1.5", "10", "0"]); // output: [1.5, 10, 0];
let stringsArray = ["1.5", "10", "0"];
let newArray = [];

function getParsedNumbers(array) {
    array.forEach((element => {
        newArray.push(Number(element));

    }));
    return newArray;
}
console.log(getParsedNumbers(stringsArray));

// function getParsedNumbers(array) {
//     array.map(element => {
//         newArray.filter(Number(element));
//         return newArray;
//     });
// }
// getParsedNumbers(stringsArray.filter);
// console.log(newArray);
// console.log(newArray.values);

//--------------------------22. Crea una función de flecha que devuelva “Positivo” si el número que recibe  
//por argumento es mayor o igual que cero y “Negativo” en caso contrario. Usa el operador ternario.
let signo = (number) => (number >= 0) ? 'Positivo' : 'Negativo';
console.log(signo(-5));

//--------------------------23. Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.
const removeIndex = (array, index) => array.splice(index, 1);

// const arrayFilterIndex = [1, 2, 3, 4, 5];
// removeIndex(arrayFilterIndex, 3);
// console.log(arrayFilterIndex);

//--------------------------24. Usando la función del apartado anterior, crea otra función que dado un array de números y un número a 
//filtrar, devuelva un array borrando todos las apariciones de dicho número.
//--------filterNumber([1, 5, 6, 7, 5], 5); // output: [1, 6, 7]
const filterNumber = (array, numberToFilter) => {
    //con un for normal si hay dos elementos iguales seguidos se saltaría el segundo xq al eliminar el 1º el array se acorta,
    //los siguientes ocupan una posición anterior pero el bucle sigue para adelante y se salta el segundo al ocupar ahora la
    //posición del primero
    array.forEach((element, index) => {
        if (element === numberToFilter) {
            removeIndex(array, index);
        }
    });
    //lo correcto sería:
    // for (i = array.length; i >= 0; i--) {
    //     if (array[i] === numberToFilter) {
    //         removeIndex(array, i);
    //     }
    // }
}
const arrayToFilter = [1, 5, 5, 2, 4, 5];
filterNumber(arrayToFilter, 5)
console.log(arrayToFilter);


//---------------------------25. Crea dos funciones que recibirán un objeto, la primera devolverá un array 
//con los nombres de todas sus propiedades. La segunda devolverá un array con los valores de dichas propiedades.
//Investigar los métodos keys y values del prototipo de Object.
const address3 = {
    provincia: 'Málaga',
    ciudad: 'Cala del Moral',
    municipio: 'Cala del Moral',
    codigoPostal: 23720,
    calle: 'Pintor Sorolla',
    numero: 40,
    planta: 2,
    numeroDePuerta: 3 + 'd',
}
//Para sacar las Keys podemos usar mejor el metodo Object.keys()
function objectProperties(object) {
    return Object.keys(object);
}
// function objectProperties(object) {
//     let newArray = [];
//     for (const key in object) {
//         newArray.push(key);
//     }
//     return newArray;
// }

//para los values usaríamos Object.values()
function objectValues(object) {
    return Object.values(object);
}
// function objectValues(object) {
//     let newArray = [];
//     for (const key in object) {
//         newArray.push(address3[key]);
//     }
//     return newArray;
// }

//Un tercer método interesante es Object.entries que devuelve un array de arrays de las keys mas sus values
function objectBoth(object) {
    return Object.entries(object);
}
//NOTA: NO HACE FALTA METER EN OTRA FUNCIÓN LOS Object. LO HEMOS HECHO SOLO POR PRACTICAR FUNCIONES
console.log(objectProperties(address3));
console.log(objectValues(address3));
console.log(objectBoth(address3));

//---------------------------26. Crea una función que invierta un string.
//stringReverse(".nóicamargorp ed sedrat sal ne llub der led érasuba oN");
// output: No abusaré del red bull en las tardes de programación.
function stringReverse(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
        //o tb así que es igual
        //reversedString += string.charAt(i);
    }
    return reversedString;
}
//Otra forma más sencilla:

console.log(stringReverse(".nóicamargorp ed sedrat sal ne llub der led érasuba oN"));

//Otra forma mejor:
function stringInvertido(texto) {
    return texto.split('').reverse().join((''));
}
//document.write(".nóicamargorp ed sedrat sal ne llub der led érasuba oN");
//esta forma paso a paso hace:
/* .split() convierte un string en un array ('')separará por letras, (' ')separará por espacios o palabras, ('m') por emes...*/
console.log((".nóicamargorp ed sedrat sal ne llub der led érasuba oN".split('')));
/* .reverse() invierte el array (este método no existe para string directa/) */
console.log((".nóicamargorp ed sedrat sal ne llub der led érasuba oN".split('').reverse()));
// .join() convierte un array en un string.Juntará según el delimitador como split pero al revés  ('..')('|')
console.log((".nóicamargorp ed sedrat sal ne llub der led érasuba oN".split('').reverse().join('')));

//---------------------------27. Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.
//compareStrings("Darth CODER", "darth coder"); // output: true
function compareStrings(string1, string2) {
    /* if (string1.toLowerCase === string2.toLowerCase) {
        return true;
    } */
    //O mejor asi que es lo mismo pero menos redundante.Devolvemos la propia comparación que dará true o false
    return string1.toLowerCase === string2.toLowerCase
}
console.log(compareStrings("Darth CODER", "darth coder"));

//---------------------------28. Crea una función que convierta en mayúscula sólo la primera letra de cada 
//palabra de un string dado. El apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.
//capitalize("comprobaré los errores de la consola antes de pedir ayuda.");
// output: "Comprobaré Los Errores De La Consola Antes De Pedir Ayuda."

function capitalize(string) {
    let upperCheck = true;
    let capitalizedString = '';

    for (const character of string) {
        //las pone todas mayúsculas no se por qué
        if (upperCheck) {
            capitalizedString = capitalizedString.concat('', character.toUpperCase());
        } else {
            capitalizedString = capitalizedString.concat('', character.toLowerCase());
        };

        character === " " ? upperCheck = true : upperCheck = false;
    }

    return capitalizedString;

}
let prueba = "comprobaré los errores de la consola antes de pedir ayuda."
console.log(capitalize(prueba));

//29. Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.

const ilogic = logical => !logical
console.log(ilogic(true));
console.log(ilogic(false));