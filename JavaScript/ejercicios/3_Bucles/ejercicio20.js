const prompt = require('prompt-sync')();

let password, tries = 0;

//usamos el do-while
/* do {
    password = (prompt('introduce contraseña: '));
    tries += 1;

} while (password != 'eureka' && tries < 3);

if (password === 'eureka') {
    console.log('conraseña correcta');

} else {
    console.log('Intentos agotados');
} */

//con while
password = (prompt('introduce contraseña: '));
tries += 1;//comprobar que estas dos lineas hace falta repetirlas

while (password != 'eureka' && tries < 3) {
    password = (prompt('introduce contraseña: '));
    tries += 1;
}
if (password === 'eureka') {
    console.log('conraseña correcta');

} else {
    console.log('Intentos agotados');
}
