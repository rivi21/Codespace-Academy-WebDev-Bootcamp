//Ejercicio 4
//Crear una tabla que muestre un array de libros guardado en memoria. Requisitos:
//1. Usar estilos de Bootstrap 4. Se puede utilizar el CSS directamente desde el CDN.
//2. Crear un constructor de objeto Book con los siguientes atributos: ID, título, autor, ventas y precio.
//3. Rellenar un array con 10 libros.
//4. Para cada elemento del array, tendremos que crear una nueva fila en la tabla con las columnas para todas las
//  propiedades del objeto además de un botón para poder eliminar el libro.
//Se aconseja la creación de una función para actualizar la tabla (o el tbody) desde cero.
//5. Si el botón de eliminar es pulsado, borrará el libro del array y actualizará la tabla.
//6. Añadir un pequeño formulario después de la tabla para poder anexar un nuevo libro a nuestro array.
//Tras hacer submit, además de añadirlo, deberá actualizar la tabla y vaciar los inputs.
//Ejercicio 5
// 1. Realizar una tabla filtrable. Tendremos un input de búsqueda y una tabla de libros rellena
// por JavaScript. Cada vez que cambie el input, se actualizará la tabla para que aparezcan
// sólo los libros cuyos títulos contengan lo que estamos introduciendo en el input.
// Partiremos del ejercicio 4 en lo que nos haga falta.
// 2. Añadiremos un botón para ordenar la tabla por el precio de forma creciente / decreciente.
// (Efecto toggle).
// 3. Añadiremos una última fila en tfoot, separada del resto, que nos sume los precios de los
// libros que están presentes en la tabla en ese momento.
//2.
function Book(id, title, author, sales, price, /* remove */) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
    /* this.remove = remove; */

}

//3 Rellenar Array de libros
let books = [
    new Book(1, 'Drácula', 'Bram Stoker', 1000, 13),
    new Book(2, 'La Conjura de los necios', 'Jhon Kennedy Toole', 2000, 11),
    new Book(3, 'El Camino', 'Miguel Delibes', 1300, 9),
    new Book(4, 'El Camion', 'Miguel Delibes', 1500, 10),
    new Book(5, 'El Quijote', 'Miguel de Cervantes', 2500, 15)
]

//4 Ponemos los campos de las columnas de la tabla
// const tableHead = document.querySelector('.thead-dark');
// const row = document.createElement('tr');
// for (const propertyName in books[0]) {
//     row.innerHTML += `<th scope="col">${propertyName}</th>`;
// };
// tableHead.appendChild(row);

//Selectores
const booksTbody = document.querySelector('tbody');
/*//para el formulario
const inputID = document.getElementById('inputID');
const inputTitle = document.getElementById('inputTitle');
const inputAuthor = document.getElementById('inputAuthor');
const inputSales = document.getElementById('inputSales');
const inputPrice = document.getElementById('inputPrice');
const addBookButton = document.getElementById('addBookButton'); */

//5 
/* function updateTable() {
    //vaciamos el tbody por completo
    booksTbody.innerHTML = '';
    //rellenamos las filas
    books.forEach(book => {
        booksTbody.innerHTML +=
            `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td>
            <button class="btn btn-danger" id=${book.id}>Remove</button>
            </td>
        </tr>`
    })
};
updateTable(); */
//Añadimos el listener a todo el body  de la tabla
/* booksTbody.addEventListener('click', e => {
    //comprobamos si es un botón quien produce el evento 
    if (e.target.tagName === 'BUTTON') {
        //hay que llegar al identificador (ya lo sabemos xq se lo he dado en la linea 58)
        books = books.filter(book => book.id != e.target.id);// ponemos != porque book.id es un nº y e.target.id es un string
        //borramos del array y actualizamos la tabla
        updateTable();
    };
}); */

//NOTA EN EL VIDEO 13 EN 2:45:00 JESÚS EXPLICA COMO HACER CADA FILA INCLUIDO SU BOTÓN DE FORMA DINÁMICA, SIN HARCODEAR 

//Formulario: La base la ponemos en HTML y la lógica aquí

/* addBookButton.addEventListener('click', e => {
    //previene el comportamiento por defecto (aquí submit)
    //OJO: preventDefault evita todo por lo que los require tb y por eso si dejamos los inputs vacíos tb añade un libro pero vacio a la tabla
    e.preventDefault;
    //generamos un nuevo id accediendo al último índice del array de libros y sumándole 1
    //solo repetiría índice en el caso de haber borrado previa/ el último. Pero esto no es 
    //un problema xq el iD en realidad lo genera la base de datos que se encarga de darle 
    //un id único
    const newID = books[books.length - 1].id + 1;
    //Generamos un nuevo libro que directa/ añadimos al array con .push()
    books.push(new Book(
        newID,
        inputTitle.value,
        inputAuthor.value,
        inputSales.value,
        inputPrice.value));
    //actualizamos la tabla
    updateTable();
    //vaciamos los inputs 
    inputTitle.value = '';
    inputAuthor.value = '';
    inputSales.value = '';
    inputPrice.value = '';

}); */

//E5
//selectores
//para la búsqueda de libros
const search = document.getElementById('searchBooks');
//para ordenar por precio
const sortButton = document.getElementById('sortButton');//con el botón
const priceHeader = document.getElementById('priceHeader')//con el Header de price
//para sumar los precios
const pricesAmount = document.getElementById('pricesAmount');

//1----------------------
let booksToDisplay = [...books];

function updateTable() {
    //vaciamos el tbody por completo
    booksTbody.innerHTML = '';
    //generamos de nuevo todas las filas
    booksToDisplay.forEach(book => {
        booksTbody.innerHTML +=
            `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td>
            <button class="btn btn-danger" id=${book.id}>Remove</button>
            </td>
        </tr>`
    });
    //Hacemos aquí el 3º apartado xq quiero la suma de precios de los libros presentes en la tabla
    const totalPrice = booksToDisplay.reduce((priceSum, book) => priceSum + book.price, 0);
    pricesAmount.textContent = `${totalPrice} €`
};
updateTable();

search.addEventListener('input', e => {
    //V1 teniendo en cuenta las mayúsculas
    booksToDisplay = books.filter(book => book.title.includes(e.target.value));
    //Para filtrar por varios campos incluimos en la condición lo siguiente:
    // || book.author.includes(e.target.value) y podríamos añadir todos los campos así.
    //Aplicando un for..in, podríamos hacerlo para todos los campos de forma automática 

    //v2 sin tener en cuenta las mayúsculas
    booksToDisplay = books.filter(book => {
        return book.title.toUpperCase().includes(e.target.value.toUpperCase());
    });
    updateTable();
});
//2------------------------------------------
let ascendingOrder = true;//para saber el estado en que se encuentra
//Si clickamoes en el header de price:
priceHeader.style.cursor = 'pointer';
priceHeader.addEventListener('click', e => {
    ascendingOrder = !ascendingOrder; //alternamos el valor

    booksToDisplay.sort((book1, book2) => {
        return ascendingOrder ?
            book1.price - book2.price
            : book2.price - book1.price;
    });
    updateTable();
});

//Si clickamos en el botón
sortButton.addEventListener('click', () => {
    ascendingOrder = !ascendingOrder;

    booksToDisplay.sort((book1, book2) => ascendingOrder ? book1.price - book2.price : book2.price - book1.price);
    //Antes del click ascendingOrder es true, al clickear se pone a false y x eso ordena la 1º vez descendente
    //Al clickear de nuevo, se invierte y me oredena ascendente. Podemos hacerlo al revés  
    updateTable();
});