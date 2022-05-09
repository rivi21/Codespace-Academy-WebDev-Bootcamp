/* 1.- Para extraer valores de un array mediante la asignación de 
desestructuración de array, realice los siguientes pasos */

//Cree un array con tres valores, 1, 2 y 3, y guárdela 
//en una variable llamada datos.
let datos = [1, 2, 3];

//Desestructura el array creado con una sola expresión.
/* let [x, y, z] = datos;
console.log([x, y, z]); */

//Desestructura el primer valor del array en una variable llamada a. 
let [a] = datos;


//Omita el segundo valor del array.
let [primero, , ultimo] = datos


//Desestructura el tercer valor en una variable llamada b
let [, , b] = datos


// Intente desestructurar un cuarto valor en una variable llamada c

/* let [, , , c] = datos;
console.log(c); //da undefined */

// y proporcione un valor predeterminado de 4.
let [, , , c = 4] = [1, 2, 3];


console.log(a, b, c);





