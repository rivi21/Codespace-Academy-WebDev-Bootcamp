const prompt = require('prompt-sync')();

let monto = Number(prompt('Cantidad gastada: ')); // Number es igual a parseInt
/* let descuento, montoTotal; */
if (monto <= 0) {
    console.log('La cantidad gastada Debe ser mayor que cero');
} else if (monto < 500) {
    monto = monto;
    /* descuento = 0
        montoTotal = monto */
} else if (monto <= 1000) {
    monto = monto * 0.95;
    /* descuento = 5
       montoTotal = monto * 0.95; */
} else if (monto <= 7000) {
    monto = monto * 0.9;
    /* descuento = 10
       montoTotal = monto * 0.9; */
} else if (monto <= 15000) {
    monto = monto * 0.8;
    /* descuento = 20
       montoTotal = monto * 0.8; */
} else {
    monto = monto * 0.75;
    /* descuento = 25
       montoTotal = monto * 0.75; */
}
console.log('Precio final', monto, '€');
/* console.log('Tienes un', descuento, '% de descuento. El total a pagar es: ', montoTotal); */