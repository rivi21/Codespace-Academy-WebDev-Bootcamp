/* Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas) 
correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:
a)¿En qué mes se registró el mayor coste de producción de dulces?
b)Promedio anual de los costes de producción de bebidasc)¿En qué mes se registró el mayor coste 
de producción en bebidas, y en qué mes el menor coste?
d)¿Cuál fue el que tuvo menor coste de producción en diciembre? */

let costSweet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
let costDrinks = [2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let costPreserves = [1, 3, 5, 7, 9, 11, 9, 7, 5, 3, 1, 0];
let month = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

// A)  Mes con mayor coste de producción de dulces
function biggestCostSweet() {
    let biggestCost = costSweet[0];
    let biggestCostMonth = '';
    for (i = 0; i < costSweet.length; i++) {
        if (costSweet[i] > biggestCost) {
            biggestCost = costSweet[i];
            biggestCostMonth = month[i];
        }
    }
    console.log(`El mayor coste en dulces fue de ${biggestCost}€ en ${biggestCostMonth}`);
}
// B) Promedio anual de los costes de producción de bebidas
function anualDrinksAverage() {
    let sum = 0;
    let average;
    for (i = 0; i < costSweet.length; i++) {
        sum = sum + costDrinks[i]
    }
    average = sum / costDrinks.length;
    console.log(`El coste promedio anual en bebidas es de ${average}€`);
}
// C) Meses de mayor y menor coste de producción en bebidas
function biggestAndSmallestDrinksCostMonth() {
    let biggestCost = costDrinks[0];
    let biggestCostMonth = '';
    for (i = 0; i < costDrinks.length; i++) {
        if (costDrinks[i] > biggestCost) {
            biggestCost = costDrinks[i];
            biggestCostMonth = month[i];
        }
    }
    console.log(`El mayor coste en bebidas fue de ${biggestCost}€ en ${biggestCostMonth}`);

    let smallestCost = costDrinks[0]
    let smallestCostMonth = '';
    for (i = 0; i < costDrinks.length; i++) {
        if (costDrinks[i] < smallestCost) {
            smallestCost = costDrinks[i];
            smallestCostMonth = month[i];
        }
    }
    console.log(`El menor coste en bebidas fue de ${smallestCost}€ en ${smallestCostMonth}`);
}
// D)  Menor coste de producción en diciembre
function compareDecemberCost() {
    let decSweet = costSweet[costSweet.length - 1];
    let decDrinks = costDrinks[costDrinks.length - 1];
    let decPreserves = costPreserves[costPreserves.length - 1];

    if ((decSweet < decDrinks) && (decSweet < decPreserves)) {
        console.log(`El menor coste en Diciembre fue en Dulces`);
    } else if (decDrinks < decPreserves) {
        console.log(`El menor coste en Diciembre fue en Bebidas`);
    } else {
        console.log(`El menor coste en Diciembre fue en Conservas`);
    }
}

biggestCostSweet();
anualDrinksAverage();
biggestAndSmallestDrinksCostMonth();
compareDecemberCost();
//HAY QUE DESHARCODEARLO PARA PODER REUTILIZAR EL CÓDIGO