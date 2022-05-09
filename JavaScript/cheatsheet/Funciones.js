function sum(num1, num2) {
    const result = num1 + num2;
    return result;
    /* return num1 + num2 */
}

console.log(sum(2, 4));//te sacaria la suma de 2+4

//Tipos de funciones:
//Con nombre: Mejor para funciones complejas. Se usan estas casisiempre
function multiplyBy2(num) {
    const result = num * 2;
    return result;
}
//Sin él: Mejor para funciones simples, que quepen en una linea
//Anónima: 
const multiplyBy2 = function (num) { return num * 2 }
//De flecha: 
const multiplyBy2 = (num) => num * 2;



function double(num) {
    const result = multiplyBy2(num);
    return result;
}
/* Como parámetros se pueden poner variables de cualquier tipo
number, string, boolean, otras funciones, y mezcladas entre ellas
según nos interese  */

function saludar(nombre, apellido, dia) {
    console.log('Hola', nombre, apellido);
    if (dia === 'viernes') {
        console.log('Buen finde');
    } else {
        console.log('A seguir con la semana');
    }
}
saludar('Elisa', 'Sanchez', 'jueves');

/* LAS FUNCIONES SE PUEDEN PASAR POR VALOR(copia del valor no modificable) 
O POR REFERENCIA (si que se puede modificar) 
(PREGUNTA DE ENTREVISTA) */

// Función paso de variables por valor

let name2 = 'Javi';
console.log(('Antes de pasar por la función; ', name2));

function changeName(nombre) {
    nombre = 'pepe';
    return nombre;
}
console.log(changeName(name2));
console.log(name2); //el valor de name2 no cambia, 
//solo cambia dentro de la función

//Función pasode variables por referencia

const a = [1, 2, 3];
const b = a;

a.push(4);//el metodo .push mete posiciones al final

console.log(a);
console.log(b);
/* En ambos log daria un array [1,2,3,4] es decir lo modifica */

