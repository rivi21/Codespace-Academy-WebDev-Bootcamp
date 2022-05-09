/* MÉTODOS DE ARRAY VIP

map
filter
find
reduce
push
forEach */

/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
Array - JavaScript | MDNLos arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación.Tanto la longitud como el tipo de los elementos de un array son...developer.mozilla.org */

//Concat -- concatena un string con otro. No se usa mucho, lo mismo se 
//puede hacer con un strin literal

//string.concat()

const userName = 'Nacho';
const surName = 'Viano';

const fullName = `${userName} ${surName}`//userName.concat(surName);

console.log(fullName);//fullName = NachoViano

//subString()
const string = 'JavaScript es maravilloso Viva JavaScript';

let result = string.substring(0, 10);
console.log(result);

//substr()
result = string.substr(0, 10);
console.log(result);
/* diferencia con substring--el primer parametro es el indice donde empieza
la cadena de texto que queremos extraer
Y el segundo es la longitud de la cadena */

//replace y replaceAll
//string = string.replaceAll("JavaScript", "PHP");
//string = string.replace(/JavaScript/g, "PHP");
string = string.replace(/ /g, "").replace(/,/g, "").replace(/!/g, "");
console.log(string);

//slice()

let languajes = 'python, JavaScript, Kotlin';

//indices positivos

let result = languajes.slice(8, 18);

//indices negativos

result = languajes.slice(-18, -8);
console.log(result)

//Array.concat()

const numbers = [1, 2, 3, 4];
const vowels = ['a', 'e', 'i'];
const consonants = ['p', 'f', 'r'];
const vectors = [[1], [2]];//un vector es un array con arrays por elementos

const concatArray = vowels.concat(consonants);
console.log(concatArray);

const unionArray = vowels.concat(vectors);
console.log(unionArray);
vectors[0].push(5);
console.log(unionArray);
