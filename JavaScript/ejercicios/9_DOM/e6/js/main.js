//Hacer una petición a una API de https://jsonplaceholder.typicode.com/comments
//con ela array que nos llegue iremos rellenando nuestar <ul> con <li> con los primeros 
//20 elementos

//selectores
const list = document.querySelector('ul');

//petición
const url = "https://jsonplaceholder.typicode.com/comments";

function twentyFirstObjects(objectsArray) {
    objectsArray.slice(0, 20).forEach(object => {
        list.innerHTML += `<li>${object.name}</li>`;
        /*  for (const property in object) {
             list.innerHTML += `<li>${property} : ${object[property]}</li>`;
         } */
    });
};

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw Error('Ha ocurrido un error: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        twentyFirstObjects(data)
    })
    .catch(error => console.log(error));

//Ej-2
const url2 = "https://jsonplaceholder.typicode.com/posts";

//selector
const body = document.querySelector('body');

function takeTwoProperties(array) {
    array.map(object => {
        body.innerHTML +=
            `<div>
            <h1>${object.title}</h1>
            <p>${object.body}</p>
        </div>`
    });
};

/* fetch(url2)
    .then(response => {
        if (!response.ok) {
            throw Error('Ha ocurrido un error: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        takeTwoProperties(data);
    })
    .catch(error => console.log(error)); */

//Ej-2 con Async-await

async function titleParagraph(url) {
    const response = await fetch(url);
    const data = await response.json();
    takeTwoProperties(data)
};
titleParagraph(url2);