/*
  Escriba una función llamada oddSum que tome una lista
  de números y devuelva la suma de todos los elementos impares.

  Intenta resolverlo con y sin el método "reduce" de los arrays.
 */

function oddSum(numbers) {
  // creo una variable suma que inicializo a cero
  let sum = 0;
  // con un for itero sobre todos los indices del array numbers
  for (i = 0; i < numbers.length; i++) {
    // si el indice que estoy comprobando en la vuelta es impar lo sumo a la variable suma
    if (numbers[i] % 2 !== 0) {
      sum = sum + numbers[i];
    }
  }
  // muestro el valor final de la variable suma por pantalla
  console.log(`La suma de todos los números es: ${sum}`);
}

//SOLUCIÓN NACHO

/* function oddSum(numbers) {
  //necesitamos una variable donde guardar la suma
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      sum = sum + numbers[i];
    }
  }
  return sum;
}

//con el metodo reduce

function oddSumReduce(arrayNumbers) {
  return arrayNumbers.reduce(function (total, item) {
    if (item % 2 === 1) {
      return total += item
    }
    return total;
  })
} */

oddSum([1, 2, 3, 4, 5]);
