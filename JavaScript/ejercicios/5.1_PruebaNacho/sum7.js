/*
  Escribe una función que tome un array de numeros enteros de mas de 3 elementos
  y retorne true si 3 elementos consecutivos suman 7
 */

function sumSeven(arr) {

  let sum = 0;
  let threeSeven = false; //Modificación: creo esta variable para asignarle true si se cumple la condición
  for (i = 0; i < arr.length; i++) {
    //compruebo la suma de tres indices seguidos
    sum = arr[i] + arr[i + 1] + arr[i + 2]
    //si la suma es 7 la variable de control la llevo mas alla del limite para que el bucle no de mas vueltas
    //y cambio el valor de threeOdd a true y la función retorna True
    if (sum === 7) {
      i = arr.length;
      threeSeven = true;
      return true;
    }
  }
  // Aquí si tras el bucle for, threeOdd sigue en false, la función retorna false
  if (threeSeven = false) {
    return false;
  }
}
//muestro por pantalla el retorno de la funciónn para un array concreto
console.log(sumSeven([2, 2, 5, 1, 0]));

//NOTA: No se como hacer para que retorne false cuando no se cumpla que tres elementos 
//seguidos sumen 7

//SOLUCION NACHO
/* function sumSeven(arr) {
  //primer requisito, que el array tenga mas de 3 elementos
  if (arr.length < 3) {
    return "not possible"
  }

  for (let i = 0; i < arr.length; i++) {
    //contruir la condicion para verificar si 3 elementos consecutivos suman 7
    if (arr[i] + arr[i - 1] + arr[i - 2] === 7) {
      return true;
    }
  }
  //si en ninguna de las iteraciones se ha cumplido, retornara false
  return false;
} */
function sumSeven(arr) {

  //1º requiasito que el array tenga mas de 3 elementos
  if (arr.length < 3) {
    return 'not possible';
  }

  for (let i = 2; i < arr.length; i++) {
    //construir la condición que verifique si 3 elems. consecutivos suman 7
    if (arr[i] + arr[i - 1] + arr[i - 2] === 7) {
      return true;
    }
  }
  //si en ninguna de las iteraciones se ha cumplido, retornará false
  return false;
}
console.log(sumSeven([2, 1, 5, 1, 0]));