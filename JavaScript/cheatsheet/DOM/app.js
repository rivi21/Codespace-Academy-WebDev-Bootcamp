//------------------------Acceder al DOM------------------------------

// .querySelector

console.log(document.querySelector('h3')); //captura por la etiqueta (el 1º que haya en el documento, si hay más, no las coge)
console.log(document.querySelector('#h3-main')); //captura por el iD
console.log(document.querySelector('.h3-danger')); //captura por la clase 

//Si tienes varias etiquetas iguales lo mejor es capturarlas por class o iD 

console.log(document.querySelectorAll('h3')); //captura todos los de la misma etiqueta, en este caso <h3>

//NOTA: con JS podemos "darle vida a nuestro html", hacerlo dinámico

// .getElementById

console.log(document.getElementById('h3-main'));//sin '#' xq ya sabe que 'h3-main' es un iD.

//.getElementById es más rápido que querySelector('#...') xq siempre vas a tener menos nodos(elementos) con iD que etiquetas en tu documento.
//querySelector recorre todas las etiquetas para comprobar cuales tienen iD y ver cual coincide
//sin embargo getElementById recorre solo las etiquetas con iD

// .getElementsByClassName

console.log(document.getElementsByClassName('h3-danger'));//sin '.' xq ya sabe que es una clase


//--------------Modificar el contenido de un elemento(añadir código html al doc desde JS)-------------------


//en una constante metemos la selección
const parrafo = document.querySelector('p');

//dsps le aplicamos la propiedad de elemento(nodo) En este caso '.textContent' que cambia el texto del elemento 
parrafo.textContent = "Parrafo desde archivo JS"

//Tb podemos añadir una clase a un elemento con la propiedad de elemento '.classlist.add()'
parrafo.classList.add('h3-danger');//aquí tampoco hace falta el '.' 
console.log(parrafo);

//O crear un elemento con el método del documento '.createElement()' 
const lista = document.getElementById('lista');
console.log(lista);
//aquí lo creamos
const li = document.createElement('li');
//aquí le damos un contenido
li.textContent = 'Primer elemento de la lista';

// y/o empujarlo(añadirlo) como un hijo, a otro elemento con el método de nodo '.appenChild()'
lista.appendChild(li);

//-------EJEMPLO----------

//Esto nos puede servir x ej. para mostrar los argumentos de un array (los elementos de una lista) en el documento:

const bootcamp = ['HTML', 'CSS', 'JavaScript', 'BBDD', 'PHP'];

//aquí listamos los argumentos del array por consola
bootcamp.forEach(item => {
    console.log(item)
})
//aquí los mostramos en el documento
bootcamp.forEach(item => {
    const li = document.createElement('li');//lo creamos
    li.textContent = item;//le damos contenido
    lista.appendChild(li);//lo añadimos al padre
})

//Esta forma de añadir elementos a una lista no es el más adecuado xq caemos en el reflow
//Es decir actualiza la pagina cada vuelta del bucle y si tenemos muchos elementos, puede
//ralentizar mucho el funcionamiento o incluso saturar la memoria

//-----------//

//otra forma de añadir elementos de una lista al doc sería con '.innerHTML' (propiedad que inserta en el HTML lo que le indiquemos)
//---<li>${item}</li>--- Esto sería lo que queremos añadir:

bootcamp.forEach(item => {
    lista.innerHTML += `<li>${item}</li>`; //ha insertado una concatenación de li con su elemento
})

//Tampoco es la adecuada xq cae tb en el reflow.

//-----------//

//La forma adecuada sería usando un 'fragment'

//Con esta guardamos todas las vueltas del foreach en un 'fragmento' de código (constante) y una vez está toda
//la estructura lo empujamos (añadimos) al doc. HTML. Con lo que la página se actualiza una sola vez

//lo creamos
//const fragment = document.createDocumentFragment();
//const fragment = new DocumentFragment(); //hace lo mismo

bootcamp.forEach(item => {
    const li = document.createElement('li');//lo creamos
    li.textContent = item;//le damos contenido
    fragment.appendChild(li);//lo guardamos en el fragment
})
console.log(fragment);
//tras esto aún no tenemos nada en el documento, hay que añadirlo a 'lista'

lista.appendChild(fragment); //y ya lo tendremos en el documento

//------------//

//para añadir los elementos del array en orden inverso usaremos el método '.insertBefore()'

//insertBefore recibe 2 argumentos, el hijo anterior y el actual

bootcamp.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;//el actual
    const childNode = fragment.firstChild;//el anterior
    //console.log(item, childNode); esta linea es para ver lo que hace el childNode pero no hace falta
    fragment.insertBefore(li, childNode);//inserta el actual por delante del anterior
})
lista.appendChild(fragment);//y así nos salen los elementos en orden inverso


//---------formas de añadir código HTML mas complejo a nuestro documento ----------

/* <li class="list">
    <b>Lenguaje:</b><span class="text-danger">descripción...</span>
</li>*/

//----vamos a meter la estructura anterior en un fragment para añadirla a la lista del doc.

bootcamp.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('list');
    const b = document.createElement('b');
    b.textContent = 'Lenguaje: ';
    const span = document.createElement('span');
    span.classList.add('text-danger');
    span.textContent = item;
    li.appendChild(b);
    li.appendChild(span);
    fragment.appendChild(li);
})
lista.appendChild(fragment);
//Es una forma correcta pero muy tediosa, a la vieja usanza.

//----otra forma seria con '.innerHTML' que no soporta los fragment

let fragment = '';
//asignamos el fragment a un string vacío
bootcamp.forEach(item => {
    //concateanamos fragment con la estructura anterior:
    fragment += `
    <li class="list">
    <b>Lenguaje: </b><span class="text-danger">${item}</span>
    </li>`
});//insertamos el resultado en el elemento 
lista.innerHTML = fragment;


//-------otra forma sería con la etiqueta <template></template> que como recomendación,
//la añadiremos siempre al final. Esta etiqueta y su contenido no se renderiza y x eso
//no se muestra en el doc. El objetivo es quedarnos con el contenido del template
//para poder manipularlo dinámicamente

//creamos una constante y capturamos el contenido(.content) del template:
const templateLi = document.querySelector('#template-li').content;
//creamos el fragment:
const fragment = document.createDocumentFragment();
//recorremos el bucle
bootcamp.forEach(item => {
    //dentro de la etiqueta template capturamos el elemento que va a ser dinámico (el span)
    //y le añadimos un contenido con .textcontent. Como queremos los elementos de la lista (array)
    // y no los '...' lo igualamos a item y así nos sacará todos los elementos de la misma
    templateLi.querySelector('.list span').textContent = item;
    //tb valdría en este caso poniendo ('.text-danger) xq dentro de template solo el span 
    //tiene la clase que se llame text-danger 

    //Necesitamos hacer un clon del contenido, porque la estructura del<template> no se 
    //puede modificar, e incluirlo en el fragment
    const clone = templateLi.cloneNode(true);
    fragment.appendChild(clone);
})

//finalmente lo añadimos a la lista
lista.appendChild(fragment);
















