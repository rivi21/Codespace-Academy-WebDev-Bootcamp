//-------------1. Partimos de un HTML con un div vacío. 
//Con JS, añadir dos elementos p con un texto dentro

const contenedor = document.getElementById('mainContainer');
const paragraph1 = document.createElement('p');
const paragraph2 = document.createElement('p');

paragraph1.textContent = 'Párrafo1: Lorem ipsun';
paragraph2.textContent = 'Párrafo2: Lorem ipsun 2';

// contenedor.appendChild(paragraph1);      //appenChild para añadir un elemento
// contenedor.appendChild(paragraph2);       
contenedor.append(paragraph1, paragraph2);  //append para añdir multiples elementos


//-------------2. Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.

/* const body = document.querySelector('body'); */
const buttonA2 = document.querySelector('button');

buttonA2.addEventListener('click', function (event) {
    // document.body.style.backgroundColor = 'red'
    // paragraph1.style.color = 'white';
    // paragraph2.style.color = 'yellow';

    document.body.classList.toggle('bodyBackColor');
})


//------------3. Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un 
//element img. Al hacer click en cada URL, cambiará la imagen a la que contenga 
//dicha URL.

//V1
// const listItems = document.getElementsByTagName('li');
//uso .querySelectorAll, o, .getElementsByTagName xq tiene que coger todos los li
//y el .querySelector solo coge el primero
const image = document.querySelector('img');
const changeImage = e => image.src = e.target.textContent; //flecha

// listItems[0].addEventListener('click', changeImage);
// listItems[1].addEventListener('click', changeImage);
// listItems[2].addEventListener('click', changeImage);

//V2
const List = document.querySelector('ul')

List.addEventListener('click', changeImage); //esta versión es más corta y vale igual
//porque e.target nos devuelve el que lo dispara. Aquel sobre el que aprieto


//-----------4.Añadir un input de tipo texto y un botón. 
//Al pulsar el botón debe escribirse el texto del input en 
//un párrafo.
const paragraphA4 = document.querySelector('#paragraphA4');
const inputA4 = document.querySelector('input');
const buttonA4 = document.querySelectorAll('button')[1];


// buttonA4.addEventListener('click', (() => paragraphA4.textContent = inputA4.value));
//los () van vacíos xq no necesito el evento

//si queremos vaciar los inputs al guardar en el párrafo sería:
buttonA4.addEventListener('click', (() => {
    paragraphA4.textContent = inputA4.value;
    inputA4.value = '';//con string vacío vaciamos el valor del input
}));


//buttonA4.addEventListener('click', copyText)
//buttonA4.onclick = copyText
//estas dos lineas hacen lo mismo pero el onclick, accede de manera nativa a la propiedad del objeto
//eventListener encapsula lo que le digamos. Por eso si necesitamos que el evento click
//haga varias cosas pondremos eventListener ya que con onclick machacaríamos las anteriores asignaciones.
// Es decir si definimos:
//buttonA4.onclick = copyText;
//buttonA4.onclick = otraFunción; la 1ª se machacaría y haría solo la segunda

//-----------4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada 
//pulsación de tecla del usuario.

const inputA42 = document.querySelectorAll('input')[1];
const paragraphA42 = document.getElementById('paragraphA42');

inputA42.addEventListener('input', () => paragraphA42.textContent = inputA42.value);
//para los input el mejor tipo de evento es 'input' xq gestina cualquier tipo de cambio
//sin preocuparme de como se produzca, pulsando tecla, copiando y pegando con el ratón etc


//---------5.Similar al anterior, pero será para un textarea 
//y validará si lo introducido es mayor de 15 caracteres.

const textarea = document.querySelector('textarea');
const paragraphA5 = document.querySelector('#p-apt5');

textarea.addEventListener('input', validateFifteen);
function validateFifteen(e) {
    // if (e.target.value.length > 15) {
    //     e.target.style.color = 'green';
    // } else {
    //     e.target.style.color = 'red';
    // }

    //con operador ternario
    // e.target.value.length > 15 ? e.target.style.color = 'green' : e.target.style.color = 'red';
    //o así un poco mas corto
    e.target.style.color = (e.target.value.length > 15) ? 'green' : 'red';
}

//----------6.Añadir un input de tipo texto con leyenda: “Escribir un número par”. 
//Añadir un botón. Al pulsar el botón nos validará si el número es par 
//o no. En caso negativo, cambiar los bordes del input a rojo.
//Para revertir el estado de una propiedad, podemos utilizar el valor 
//“revert” o dejarla vacío.

const evenInput = document.querySelector('#evenNumberInput');

/* evenInput.nextElementSibling.addEventListener('click', () => {
    if (evenInput.value % 2 !== 0) {
        evenInput.style.border = '2px solid red';
        // evenInput.style.borderColor = 'red';
    } else {
        evenInput.style.border = '';//o tb = 'revert' funcionaría tb.
        // evenInput.style.borderColor = '';
    }
}); */

//Es más recomendable usar clases xq no afectan a lo que hubiera antes. add y remove la ponen o la quitan. 
//Si ya está add no hace nada. si no está remove tampoco hace nada.
//con flecha y op. ternario sería:
evenInput.nextElementSibling.addEventListener('click', () =>
    (evenInput.value % 2 !== 0) ? evenInput.classList.add('borderInput') : evenInput.classList.remove('borderInput'));


//----------7.Partiendo de una lista ul, crear 10 li con un texto indicando 
//el número del elemento (“Elemento X”) usando un bucle for.
const ul = document.getElementById('listToFill');

for (i = 0; i < 10; i++) {
    //creo el li
    const newLi = document.createElement('li');
    //le doy sus propiedades
    newLi.textContent = `Elemento ${i + 1}`;
    //lo meto en la ul
    ul.appendChild(newLi); //appendChild anexa cada hijo al final
}

/* //otra forma:
let elements = '';

for (i = 0; i < 10; i++) {
    elements += `<li>Elemento ${i + 1}</li>`;
}
ul.innerHTML = elements; */


//---------8.Crear un enlace y un botón. Si pulso el enlace se me abre 
//la URL en la misma página. Si pulso primero el botón y luego el enlace, 
//se me abre en una nueva pestaña.
const link = document.querySelector('a');
const newTabButton = document.querySelector('#newTab');
/* newTabButton.addEventListener('click', () => link.target = '_blank'); */
//otra forma
newTabButton.addEventListener('click', () => link.setAttribute('target', '_blank'));


//----------9. Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, 
//rojo, amarillo, verde y azul. Al seleccionar un color del select, cambiar 
//el color del párrafo.

const paragraphA9 = document.querySelector('#colorsParagraph');

document.querySelector('#colorsSelect').addEventListener('change', e => {
    paragraphA9.style.color = e.target.value
});
//Cuando cambie el select cambia el color del párrafo. Con el value de los select podemos
//hacer mas cosas como añadir clases xej: paragraphA9.classList.add(lo que sea)
//Es lo bueno de los select.


//----------10. Incluir un botón que al pulsarlo genere un número aleatorio y mantenga 
//en una lista actualizada el número de elementos que se han generado, los que 
//son pares y los que son impares.
const num = document.getElementById('randomNumber');
const totalNumbers = document.getElementById('totalNumbers');
const odds = document.getElementById('odds');
const evens = document.getElementById('evens')
const newRandombutton = document.querySelectorAll('button')[4];

/* newRandombutton.onclick = function () {
    const random = Math.floor(Math.random() * 100 + 1);
    num.textContent = random;
    totalNumbers.textContent++;
    if (random % 2 === 0) {
        evens.textContent += random + ',';
    } else {
        odds.textContent += random + ',';
    }
}; */
//Así mas corto
newRandombutton.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 100 + 1);
    num.textContent = random;
    totalNumbers.textContent++;
    (random % 2 === 0) ? evens.textContent += random + ',' : odds.textContent += random + ',';
});

//-----------11. Construir una lista que tenga números. Añadir un input donde poder añadir 
//números y un botón. Al pulsar el botón, si el número ya existe en la lista, 
//mostrar un mensaje de error, si no existe, lo añadirá al principio.

const numbersList = document.getElementById('list-apt11');
const inputA11 = document.getElementById('input-apt11');
const buttonA11 = document.getElementById('btn-apt11');

buttonA11.onclick = () => {
    //capturamos el valor del input
    const inputNumber = numbersList.nextElementSibling.value;
    //creamos un array con los valores de los 'li' de la lista
    const itemsList = Array.from(numbersList.children);
    //Creamos una variable para comprobar si el nº está en la lista
    let alreadyInList = false;
    //iteramos sobre los argumentos del array creado xa ver si está o no
    itemsList.forEach(element => {
        if (element.textContent == inputNumber) {
            alreadyInList = true;
        }
    });
    if (isNaN(inputA11.value)) {
        window.alert(`Error, "${inputNumber}" no es un número`);
        inputA11.value = '';
    } else if (alreadyInList) {
        alert(`El número ya está en la lista`);
        inputA11.value = '';
    }
    else {
        const newLi = document.createElement('li');
        newLi.textContent = inputNumber;
        numbersList.appendChild(newLi);
    }
};

//-----------12. Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. 
//Al hacer click en el botón haremos “toggle” o alternaremos esa clase, es decir,
//si está presente la quitaremos y si no está, la añadiremos.

document.getElementById('toogler').addEventListener('click', (e) => {
    e.target.classList.toggle('button');
});

//-----------FALTA EL AÑADIDO------------
