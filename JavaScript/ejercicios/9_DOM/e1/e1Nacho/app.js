//Apartado 1

const contedor = document.getElementById('contenedor');

const paragraph1 = document.createElement('p');
const paragraph2 = document.createElement('p');

paragraph1.textContent = "Párrafo 1: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, voluptatem!"
paragraph2.textContent = "Párrafo 2: adipisicing elit. Voluptas, voluptatem!"

contedor.appendChild(paragraph1);
contedor.appendChild(paragraph2);

//Apartado 2

document.getElementsByTagName('button')[0].addEventListener('click', function () {
    document.body.style.backgroundColor = "red"
})

//Apartado 3

const listItems = document.getElementsByTagName('li');
const image = document.getElementsByTagName('img')[0];

function changeImage(event) {
    console.log(event);
    image.src = event.target.textContent
}

listItems[0].addEventListener('click', changeImage);
listItems[1].addEventListener('click', changeImage);
listItems[2].addEventListener('click', changeImage);

//Apartado 4

const firstParagraph = document.getElementsByClassName('fillableParagraph')[0];
const firstInput = document.getElementsByTagName('input')[0];

/* const firstButton = document.getElementsByTagName('button')[1];

firstButton.addEventListener('click', () => {
firstParagraph.textContent = firstInput.value
}) */

document.getElementsByTagName('button')[1].onclick = function () {
    firstParagraph.textContent = firstInput.value
}

//Aparatado 4.2

const secondParagraph = document.getElementsByClassName('fillableParagraph')[1];
const secondInput = document.getElementsByTagName('input')[1];

secondInput.addEventListener('keyup', function () {
    secondParagraph.textContent = secondInput.value
});

//Apartado 5

const textArea = document.querySelector('#textareaToValidate');

textArea.addEventListener("input", function (e) {
    console.log(e.target);
    if (e.target.value.length > 15) {
        e.target.style.color = "green";
    } else {
        e.target.style.color = "red";
    }
})

//Apartado 6

const eventInput = document.querySelector('#eventNumberInput');

//Dos formas de capturar el boton y añadirle un onclick

// -------------------1---------------------------------
/* document.getElementsByTagName('button')[2].onclick = function () {
if (eventInput.value % 2 === 0) {
eventInput.style.border = ""
} else {
eventInput.style.border = "2px solid red"
}
} */

// ---------------------------2----------------------------------
eventInput.nextElementSibling.onclick = function () {
    if (eventInput.value % 2 === 0) {
        eventInput.style.border = ""
    } else {
        eventInput.style.border = "2px solid red"
    }
}

//Apartado 7

const ul = document.querySelector('#listToFill');
const fragment = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
    //tenemos que crear un elemento li
    const li = document.createElement('li');
    //tenemos que ponerle un texto
    li.textContent = `Elemento ${i + 1}`;
    //empujarlo a la lista que hemos capturado anteriormente
    fragment.appendChild(li)
}
ul.appendChild(fragment);

//Apartado 8

//capturar nuestro boton
const newTabButton = document.querySelector('#newTab');
//capturar el elemento a
const link = document.querySelector('a');
newTabButton.addEventListener('click', () => link.target = "_blank")

//Apartado 9
document.getElementById('colors').addEventListener("change", function (e) {
    console.log(e);
    document.getElementById('colorsLabel').style.color = e.target.value;

    //otra opcion
    //e.target.previousElementSibling.style.color = e.target.value
})

//Apartado 10
const num = document.getElementById('randomNum');
const totalNumbers = document.getElementById('totalNumbers');
const odds = document.getElementById('odds');
const evens = document.getElementById('evens');

document.getElementById('randomButton').onclick = function () {
    //generamos el numero aleatorio
    const randomNumber = Math.floor(Math.random() * 100);
    //Empujamos el numero aleatorio dentro del span 'totalNumbers'
    num.textContent = randomNumber;
    //Sumar los numeros totales que ha generado el usuario
    totalNumbers.textContent = Number(totalNumbers.textContent) + 1;

    //Sumar a los pares o impares ese numero generado
    randomNumber % 2 === 0 ?
        evens.textContent = Number(evens.textContent) + 1
        : odds.textContent = Number(odds.textContent) + 1
}

//Apartado 11

const uniqueNumbersList = document.getElementById('uniqueNumbersList');
document.getElementById('addNumber').onclick = function () {
    //Capturamos el valor del input
    const inputNumber = uniqueNumbersList.nextElementSibling.value;

    //Añadimos los valores de los elementos li y los metemos en un array
    const listItems = Array.from(uniqueNumbersList.children);

    let alreadyInList = false;

    listItems.forEach(element => {
        if (element.textContent == inputNumber) {
            alreadyInList = true;
        }
    });

    if (alreadyInList) {
        alert('El numero ya existe!')
    } else {
        const newLi = document.createElement('li');
        newLi.textContent = inputNumber;
        uniqueNumbersList.appendChild(newLi);
    }
}

console.log('Hola desde JS')