/*
Comprobar si un string es palindromo.
Se dice que un string es palindromo cuando se puede leer
igual de izquierda a derecha que de derecha a izquierda.
*/

function palindrome(string) {
    // tenemos que transformar la cadena de texto en minusculas y quitarle los 
    // puntos, comas y espacios
    string = string.toLowerCase().replace(/ /g, "").replace(/./g, "").rplace(/\./g, "");
    //string =string.toLowerCase.replaceAll(" ","").replaceAll()(",","").replaceAll(".","");
    //esto último es lo mismo que lo de arriba
    console.log(string);
    //guardamos en una variable la longitud de la cadena de texto para recorrerla
    let length = string.length

    //recorremos la cadena de texto con un bucle

    for (let i = 0; i < length / 2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0011223333221100")); // true


/* solucion Nacho copiada

function palindrome(string) {
    //tenemos que transformar la cadena de texto en minusculas y quitarle
    // los puntos, comas y espacios
    string = string.toLowerCase().replace(/ /g, "").replace(/,/g, "").replace(/\./g, "");
    //string = string.toLowerCase().replaceAll(" ", "").replaceAll(",", "").replaceAll(".", "");
    console.log(string);
    // guardamos en una variable la longitud de la cadena de texto para recorrerla
    let length = string.length

    //recorremos la cedena de texto con un bucle

    for (let i = 0; i < length / 2; i++) { // dividimos la longitud de la cadena entre 2 para poder comparar las dos mitades
        if (string[i] !== string[length - 1 - i]) {
            return false
        }
    }
    return true;
} */