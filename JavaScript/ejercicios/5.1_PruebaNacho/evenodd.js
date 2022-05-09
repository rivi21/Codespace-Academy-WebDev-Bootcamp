/*Ejecutando el codigo siguiente,
se supone que devuelve solamente los numeros impares.*/

(function () {
  let values = [3, 8, "15", Number.MAX_VALUE, Infinity, -23],
    oddValues = [],
    lenValues = values.length,
    isOdd = function (value) {
      //Retorna un 1 o un 0, 1 para si es impar y 0 para cuando es par
      return value % 2;
    };

  while (lenValues--) {
    if (isOdd(values[lenValues])) {
      oddValues.push(values[lenValues]);
    }
  }
  console.log(oddValues);
})();

//SOLUCIÓN NACHO

/* (function () {
  let values = [3, 8, "15", Number.MAX_VALUE, Infinity, -23],
    oddValues = [],
    lenValues = values.length,
    isOdd = function (value) {
      //retorna un 1 o un 0, 1 para si es impar y 0 para cuendo es par
      return value % 2;
    };
  while (lenValues--) {
    if (isOdd(values[lenValues])) {
      // si retorna un true (un 1) entra y añade el valor al array
      //si retorna un false (un 0) no entra y no añade el elemento
      oddValues.push(values[lenValues]);
    }
  }
  console.log(oddValues);
})(); */



/* Sin embargo cuando lo ejecutamos nos devuelve  [-23, Infinity, "15", 3].

- Por que Number.MAX_VALUE no se ha incluido en la respuesta?
// porque  no puede calcular si el modulo de infinito es impar o par

- Modificar el codigo para que Infinity no se incluya en la respuesta */
