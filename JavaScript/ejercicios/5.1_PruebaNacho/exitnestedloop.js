/*
Modifica el codigo de abajo para que cuando se ejecute salta del indexInnerLoop
cuando tenga un valor de 10 y
del IndexOuterLoop cuando tenga un valor de 0
*/

let indexOuterLoop;
let iterationsOuterLoop = 1000;
let indexInnerLoop;
let iterationsInnerLoop = 100;
//En este primer bucle, Valor inicial; IndexOuterLoop la inicializo a 0
//La condición de parada: indexOuterLoop cambio el operador a mayor o igual que cero 
//Actualizo la condicion restando en lugar de sumar indexOuterLoop++ lo cambio por indexOuterLoop--

outerLoop://LOS BUCLES FOR SE PUEDEN NOMBRAR, PERO NO SE USA MUCHO
for (indexOuterLoop = 0; indexOuterLoop >= 0; indexOuterLoop--) {
  innerLoop:
  for (
    indexInnerLoop = 0;
    indexInnerLoop < iterationsInnerLoop;//100
    indexInnerLoop++
  ) {
    if (indexInnerLoop === 10) {
      console.log("indexInnerLoop is equals to 10");
      //el break; lo quito de aquí y lo añado al final para que el primer for de solo una vuelta
    }
  }
  break;
}

console.log(indexOuterLoop); // Should log 0.
