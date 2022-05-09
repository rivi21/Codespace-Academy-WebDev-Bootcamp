//Ejemplo 1--Dado el objeto de ejemplo, escribe una función que liste
//las propiedades del objeto

const student = { name: 'Luis Vargas', age: 21, address: 'Calle Hilera' };

function getUserDetail({ name, age, address }) {
    console.log(`El estudiante ${name} tiene ${age} años y vive en ${address}`);
    console.log(`1. ${name}\n2. ${age}\n3. ${address}`);
}// "\n" sirve para hacer un salto de linea
getUserDetail(student);

//Ejemplo2--Crea un codigo que mueste el autor y titulo de estos libros

const books = [
    {
        autor: 'Bill Gates',
        titulo: 'The road ahead'
    },
    {
        autor: 'Steve Jobs',
        titulo: 'Walter Isaacson'
    },
    {
        autor: 'Suzanne Collins',
        titulo: 'Mockingjay; The final book of The hunger Games'
    },
];
//Hacer una función que reciba un array y muestre por consola
//el autor y título

function getBooks(array) {
    //recorrer el array para mostrar cada elemento
    for (let i = 0; i < array.length; i++) {
        //El autor del libro ... es ...
        console.log(`El autor del libro ${array[i].titulo} es ${array[i].autor}`);
    }
}

getBooks(books)