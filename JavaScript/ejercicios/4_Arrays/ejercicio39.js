/* const arrayA = [1, 2, 3];
const arrayB = [1, 2, 3]; */

function sonIguales(arrayA, arrayB) {

    if (arrayA.length !== arrayB.length) {
        return false;
    }
    for (let i = 0; i < arrayLength; i++) {
        if (arrayA[i] !== arrayB[i]);
        return false;
    }
    return true;
}
console.log(sonIguales([1, 2, 3], [1, 2, 3]));
console.log(sonIguales([1, 3, 2], [1, 2, 3]));


//mi solución
/*
const arrayLength = 3;
let compare = 0;
let substraction;

for (let i = 0; i < arrayLength; i++) {
    substraction = arrayA[i] - arrayB[i];
    compare = compare + substraction;
}
if (compare !== 0) {
    console.log('Los dos array son diferentes');
} else {
    console.log('Los dos array son iguales');
} */