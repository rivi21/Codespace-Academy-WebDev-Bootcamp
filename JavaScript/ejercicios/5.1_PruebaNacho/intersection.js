/*
Escribe un metodo que cree un array con valores unicos
que estan incluidos en todos los arrays que recibe la funcion como entrada.
*/

function intersection(arr1, arr2, arr3) {

}
//SOLUCIÓN NACHO
/* function intersection(arr1, arr2, arr3) {
    //crear un array para añadirle las coincidencias
    let arrayResult = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {
                if (arr1[i] === arr2[j] && arr1[i] === arr3[k]) {
                    if (!arrayResult.includes(arr1[i])) {
                        arrayResult.push(arr1[i]);
                    }
                }
            }
        }
    }
    return arrayResult;
} */
const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ["a", "b"];
const arr4 = ["b", "c"];
const arr5 = ["b", "e", "c"];
const arr6 = ["b", "b", "e"];
const arr7 = ["b", "c", "e"];
const arr8 = ["b", "e", "c"];

/* console.log(intersection(arr1, arr2)); // [2]
console.log(intersection(arr3, arr4, arr5)); // ['b'] */
console.log(intersection(arr6, arr7, arr8)); // ['b', 'e']
