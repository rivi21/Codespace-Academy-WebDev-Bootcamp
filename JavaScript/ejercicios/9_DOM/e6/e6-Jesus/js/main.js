/* // 6.1 Paginación del lado del cliente----------------------------

//constantes
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

//variables
let posts = [];
let currentPage = 1;

//selectores
const postDiv = document.querySelector('#posts');
document.querySelectorAll('.previousPage').forEach(button => button.addEventListener('click', changePage));
document.querySelectorAll('.nextPage').forEach(button => button.addEventListener('click', changePage));

// Utilidades 
function fillDiv() {
    const newPagePosts = paginate(posts, PAGE_SIZE, currentPage);//para calcular el post que quiero de mi array completo
    postDiv.innerHTML = "";
    newPagePosts.forEach(post => postDiv.innerHTML += `<h3>${post.id} ${post.title}</h3><p>${post.body}</p> `);
}

function changePage(event) {
    if (event.target.className === "previousPage" && currentPage > 1) {
        currentPage--;
    } else if (event.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE) {
        currentPage++;
    }
    fillDiv();
}

//----FUNCIÓN DE PUTA MADRE PARA PAGINAR ARRAYS---(Sacada de stackoverflow)
//https://stackoverflow.com/questions/42761068/paginate-javascript-array --Es buena idea guardar la referencia--

function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
//Ej: console.log(paginate([1, 2, 3, 4, 5, 6], 2, 2));

fetch(POSTS_URL).then(response => response.json()).then(data => {
    posts = [...data];
    fillDiv();
});
 */
// 6.2 paginación del lado del servidor

// Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

//selectores
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
const usersList = document.querySelector('#usersList');
document.querySelector("#loginButton").addEventListener('click', login);

function login(event) {
    event.preventDefault();
    //creamos el objeto que queremos crear. Lo copiamos de la api xq la estructura ha de ser =. 
    const userInfo = {
        email: emailInput.value,//Y lo desharcodeamos para pillar el valor de los inputs
        password: passwordInput.value//truquillo con el value del input para poner en el input el email y la contraseña
    };  //y así no estar metiéndolo cada vez que necesitemos iniciar sesión
    //configuración o settings
    const config = { // config dentro de la función login porque userInfo va a cambiar y me hace falta
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(userInfo)
    };
    //petición
    fetch(LOGIN_URL, config)
        .then(response => response.json())
        .then(data => { /* con ternary: (data => data.error? alert(data.error):fetchAllUsers()) */
            if (data.error) {
                alert(data.error);//alerta con el mensaje del error
            } else {// si todo ha ido bien, y solo en ese caso, hacemos otra petición diferente
                //2º Apartado. Refactorizamos en una función fuera para que el then no crezca mucho 
                fetchAllUsers();
                // fetchAllUsersV2(USERS_URL);
            }
        });
}

//con async await (forma recomendada)
async function fetchAllUsers() {
    //Primero una llamada para que nos diga el nº total de páginas
    let response = await fetch(USERS_URL);//primera promesa que al resorverla es ya la respuesta()
    let data = await response.json();//segunda promesa

    let users = [];
    //Página a página va haciendo peticiones y concatenando al array existente
    for (let page = 1; page <= data.total_pages; page++) {
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data);//alternativa users = [...users, ...newData.data]
        //concat combina dos o mas arrays pero no cambia el original, por eso debemos modificarlo
        //nosotros haciendo users = users.concat....
    }
    //En este ejemplo el then.then sería un problema porque no para el código y 
    console.log(users);  // aquí el array llegaria vacio 

    //para cada usuario le añado un li a la lista(vaciamos para que no se acumulen cada vez q inicie sesión)
    usersList.innerHTML = "";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);

    //ESTE CÓDIGO NOS VA A HACER FALTA SEGURO. VALE PARA CUALQUIER API Y Nº DE PÁGINAS
    // VIP--VIP--VIP--VIP--VIP--VIIIIIIIIIIIIIIIIP
}

// Alternativa para recuperar todas las páginas de una API usando .then() (AVANZADO ENTENDERLO PARA EL FUTURO)
// En lenguajes que no tienen await es la forma mas corta y limpia, pero para nosotros, mejor el await
let users = [];

function fetchAllUsersV2(URL) {
    fetch(URL)
        .then(response => response.json())
        .then(newData => {
            users = users.concat(newData.data);

            if (newData.page < newData.total_pages) {
                fetchAllUsersV2(`${USERS_URL}?page=${newData.page + 1}`);//--función recursiva--Hay que tenerla muy controlada con la condición
            } else {
                usersList.innerHTML = "";
                users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
            }
        });
}


//----------------------mi ejercicio---------------------------

/* const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw Error('"Hay un problema con la respuesta: ' + response.statusText);
        } else {
            return response.json();
        }
    })
    .then(data => {
        const posts = [...data];
        console.log(posts);
        //selectores:
        const previousData = document.getElementById('before');
        const nextData = document.getElementById('next');
        const list = document.querySelector('ul');

        //paginación
        let index = 0
        dataOnScreen = 20;
        // function screenList() {
        //     list.innerHTML +=
        //         `<li>
        //         <h1>${element.id}-${element.title}</h1>
        //         <p>${element.body}</p>
        //     </li>`
        // }

        //Navegación
        nextData.addEventListener('click', () => {
            // index = index + 20;
            if (index < posts.length) {
                list.innerHTML = "";
                posts.slice(index, index + dataOnScreen).map(element => {
                    index++
                    list.innerHTML +=
                        `<li>
                            <h1>${element.id}-${element.title}</h1>
                            <p>${element.body}</p>
                        </li>`
                });
            }
        });
        previousData.addEventListener('click', () => {
            // index = index - 20;
            if (index > 0) {
                list.innerHTML = "";
                posts.slice(index - dataOnScreen, index).map(element => {
                    index--
                    list.innerHTML +=
                        `<li>
                            <h1>${element.id}-${element.title}</h1>
                            <p>${element.body}</p>
                        </li>`

                });
            };
        });

    }).catch(error => console.log(error)); */

// 6.2 paginación del lado del servidor

