//Concat

//string.concat()

const userName = 'Nacho';
const surname = 'Viano';

//fullName = 'NachoViano'

//https://hospitalCentral/paciente/6574646849687
//`https://hospitalCentral/paciente/${patientId}`

const fullName = `${userName} ${surname}`//userName.concat(surname);

console.log(fullName);

//substring()

let string = 'JavaScript es un mundo maravilloso,viva JavaScript!';

//let result = string.substring(0, 10);
//console.log(result);

//substr()

result = string.substr(0, 10); // diferencia con substring() --> el primer parametro es
//el indice donde empieza la cadena de texto que queremos extraer
//y el segundo es la longitud de la cadena
console.log(result);

//replace

//string = string.replaceAll("JavaScript", "PHP");
//string = string.replace(/JavaScript/g, "PHP");
string = string.replace(/ /g, "").replace(/,/g, "").replace(/!/g, "");
console.log(string);

//array.concat()

const numbers = [1, 2, 3, 4];
const vowels = ['a', 'e', 'i'];
const consonants = ['p', 'f', 'r'];
const vectors = [[1], [2]];

//vectors[0][0]= 1

const concatArray = vowels.concat(consonants);
console.log(concatArray);

const unionArray = vowels.concat(vectors); //4687 //6798
// [ 'a', 'e', 'i', [ 1 ], [ 2 ] ] ===> ['a', 'e', 'i', [ 1 ], [ 2 ] ] //985749
console.log(unionArray);
vectors.push([5])
vectors[0].push(5);
console.log(unionArray);