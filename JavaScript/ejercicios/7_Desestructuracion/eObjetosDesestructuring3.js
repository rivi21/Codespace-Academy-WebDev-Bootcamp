/* 3.- Para desestructurar valores de una matriz que está anidada
dentro de un objeto usando el concepto de desestructuración anidada,
realice los siguientes pasos; */

// Cree un objeto con una propiedad, arr, es decir, establecido 
//en una matriz que contenga los valores 1, 2 y 3. 
//Guarde el objeto en la variable de datos. 
let datos = {
    arr: [1, 2, 3]
}

//Desestructura el segundo valor de la matriz en una variable haciendo lo siguiente:

//Desestructurar la propiedad arr del objeto y guardarla en una nueva variable 
//llamada v2, que es la matriz. 
let { arr: v2 } = datos;
//Reemplace v2 con desestructuración de matrices.
// En la desestructuración de la matriz, omita el primer elemento. 
let [, b, c] = v2;

//Guarde el segundo elemento en una variable llamada v2
let V2 = [b];

console.log(V2);