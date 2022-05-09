//--------OBJETOS

const person = { name: 'nacho' };//15941561
const friend = { name: 'nacho' };//978454

/* console.log(person === friend); */
//esto daria false porque aunque tengan el mismo valor 
//al ser elementos complejos lo que guardan es la referencia

//person.surname='Viano':

/* console.log(person.name === friend.name); */
/*  Esto sin embargo daria true */



/* si queremos blindar un objeto para que ninguna de sus propiedades
pueda ser cambiada habria que utilizar un método que se llama freeze

Object.freeze(person);
delete person.name;
//person.name = 'Pepito';
//console.log(person); */

//const person = 2;

//-------CLONACIÓN DE OBJETOS

let clonedPerson = { ...person };
//hemos clonado el valor de la variable person y hemos creado otra con esos valores

/* console.log(clonedPerson); */

const person2 = {
    name: 'Nacho',
    age: 30,
    address: {
        street: 'Calle Hilera',
        number: 4,
    }
}
const clonedPerson2 = { ...person2 };

console.log(clonedPerson2);

person2.name = 'Pepito';//esto no cambia porque al ser un dato primitivo
// se ha copiado por valor, no por referencia

person2.address.street = 'Calle Codespace';//este si que lo modifica xq se ha copiado por referencia
//al estar dentro de un array, lo que lo hace un dato complejo

console.log(clonedPerson2);

//--------Clonación paso a paso

const clonedPerson2 = {};
clonedPerson2.name = person2.name;
clonedPerson2.age = person2.age;
clonedPerson2.address = person2.address;//aquí hacemos una asignación y lo que hace es una copia por valor
//lo que no pasa es esto
clonedPerson2.address = { ...person2.address };

console.log(clonedPerson2);
person2.name = 'Pepito';

person2.address.street = 'Calle CodeSpace';
console.log(clonedPerson2);

//----------DESESTRUCTURACIÓN DE OBJETOS

const { name: userName, age, street } = person2;
console.log(userName);//para cambiar un dato, en este caso name.

const { address, ...rest } = person2;//para quitar address y quedarme con todo lo demás
console.log(rest);

const person3 = {
    name: 'Nacho',
    age: 30,
    address: null //['Calle Hilera','Calle Larios'] 
}

const { name = '', address = [], ...rest } = person3;
console.log(rest);

//------Funciones

function printName({ name }) {//va a llegar un obj. que tiene la propiedad name
    console.log(`Este name lo imprime la función ${name}`);
}
printName(person3)
