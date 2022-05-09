/* 2.- Para extraer datos de un objeto mediante el uso de conceptos
de desestructuración de objetos,
realice los siguientes pasos */


let datos = {
    f1: 'v1',
    f2: 'v2',
    f3: 'v3'
}
let { f1: f1, f2: field2, f4: f4 = 'v4' } = datos;

console.log(f1, field2, f4);
