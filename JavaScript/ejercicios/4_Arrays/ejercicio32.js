const prompt = require('prompt-sync')();

let product = ['Bocadillo de Jamón', 'Refresco', 'Cerveza', 'Pan'];
let price = [1.5, 1.05, 0.75, 2];
let totalAmount = 0;

for (let i = 0; i < product.length; i++) {
    let units = Number(prompt('Unidades consumidas de ' + product[i] + ': ')); // `Unidades consumidas de ${product[i]}: `

    totalAmount = totalAmount + units * price[i];
}
console.log('Cuenta Total: ', totalAmount, '€');// `Cuenta total: ${totalAmount} €`