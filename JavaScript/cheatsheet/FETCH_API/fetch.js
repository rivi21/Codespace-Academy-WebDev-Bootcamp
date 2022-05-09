const url = "https://jsonplaceholder.typicode.com/users";

//---------------------Fetch() es un método que no pertenece a ningún prototipo. Se usa directa/

console.log(fetch(url));    // Al logearlo vemos que nos devuelve una 'promesa' de información.
//No la información xq no la tiene de forma inmediata. Y como promesa, se puede romper, es decir, 
// q la info solicitada puede llegar o no xq el servidor esté caido etc...
let promise = fetch(url);
//Las promesas se pueden tratar facil/ aplicando funciones callback sobre ellas

//El metodo .then() se usa sobre la promesa para ejecutar esa función callback cuando la promesa esté
//resuelta, es decir que haya llegado o no la información.

console.log(1);
promise.then(response => console.log(response));
console.log(2); //Se imprimen antes el 1 y el 2 y después lo de dentro del .then que solo se imprime cuando esté resuelta la promesa

//sin desglosarlo, sería así la sintaxis
fetch(url).then(response => console.log(response));
//La respuesta no llega como queremos sino que hay que tratarla para sacar los datos. Para ello la forma más sencilla es con .json()
fetch(url)
    .then(response => response.json())//Me devuelve otra promesa. Podemos usar entonces otro .then()
    .then(data => {
        //Aquí proceso los datos
    });
//Aquí ya tendremos nuestros datos buenos con arrays, objetos, todo bien
//El 1º then comprueba que todo ha ido bien y el 2º ya con los datos los procesamos para obtener lo que necesitemos
//Lo que queramos hacer con esos datos lo ponemos en la función del 2º then porque si lo ponemos fuera
//tendremos el problema de la asincronía, que se ejecutará antes esa función de que lleguen los datos

//Ej función que imprima solo los nombres de los usuarios
function printNames(arrayData) {
    arrayData.forEach(object => console.log(object.name));
}
//ahora la ciudad
function printCities(arrayData) {
    arrayData.forEach(object => console.log(object.address.city));
}
// y la latitud
function printLats(arrayData) {
    arrayData.forEach(object => console.log(object.address.geo.lat));
}

/* fetch(url)
    .then(response => response.json())//Me devuelve otra promesa. Podemos usar entonces otro .then()
    .then(data => {
        printNames(data)
        printCities(data)
        printLats(data)
    }) */

//--------------------then()

//Hasta ahora no hemos tenido en cuenta si se producen errores en el camino.
//Si ocurre para evitar que pete, lanzamos un error a propósito con throw Error
//Para ello hay que validar la respuesta con un if:.
//Si pasa algo, lanzo el error, si no procesamos los datos

/* fetch(url)
    .then(response => {// validamos la respuesta
        if (response.ok) { //ok es una prop de las respuestas que es booleana
            return response.json();
        }
        //si no está ok lanzamos el error creado por nosotros
        throw Error("Hay un problema con la respuesta" + response.statusText);//statusText es otra prop de la respuesta 
        //lo podemos poner al revés (es más legible) xq el throw al igual que el return corta la ejecución de la función
        //tiene sentido q siendo un error, corte la ejecución, como así es. 

        if (!response.ok) {//x ej si la url no es correcta
            throw Error("Hay un problema con la respuesta: " + response.statusText);
        }
        return response.json();
    })
    .then(data => {//si la respuesta es ok aquí procesamos los datos
        printNames(data)
        printCities(data)
        printLats(data)
    })
    .catch(error => console.log(error));//si no es ok aquí procesamos el error */

//-----------------------Async / await - Alternativa a .then

//con await sobre una promesa espero a que se reuelva y bloqueo el código ahí a propósito
//Entonces el flujo en el ej de abajo sería:
// -   imprimo el 1
//     - Entra en la función: - imprime el 2
//         - llega al await para el flujo dentro de la función hasta que se reuelva la promesa
// - Continúa por fuera e imprime el 3
//                 - resuelve la 1ª promesa
//                     - resuelve la 2ª promesa
//                         - imprime 4

async function requestURL(url) {
    console.log(2);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(4);
}
console.log(1);
requestURL(url);
console.log(3);

//LA DIFERENCIA FUNDAMENTAL CON THEN ES QUE THEN NO BLOQUEA EL CÓDIGO EN NINGÚN MOMENTO MIENTRAS QUE AWAIT
//SI QUE LO HACE DENTRO DE LA FUNCIÓN ASYNC,. FUERA DE LA FUNCIÓN NO SE PUEDE BLOQUEAR JAVASCRIPT PORQUE
//SI NO LA WEB SE QUEDA COLGADA.
//SI PODEMOS TENER UN CÓDIGO SENCILLO ES MEJOR USAR .THEN PERO SI TENEMOS QUE HACER VARIAS PETICIONES Y 
//SE COMPLICA EL CÓDIGO PUEDE PRODUCIRSE LO QUE SE CONOCE COMO 'CALLBACK HELL' Y SER BASTANTE ILEGIBLE.
//EN ESE CASO TIENE SENTIDO METER EL CÓDIGO EN UNA FUNCIÓN, USANDO EL ASYNC-AWAIT

//ASYNC.AWAIT ES UN CONCEPTO AVANZADO QUE LO BUENO QUE TIENE ES QUE SE APLICA AL SOFTWARE EN GRAL. CUALQUIER 
//LENGUAJE TIENE ESTA OPCIÓN PARA LA SINCRONÍA

//----------------------------Petición con método HTTP POST en lugar de GET

//El método POST tenemos que asegurarnos que esté soportado por la API

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
//Se pone en mayúsculas xq en muchos lenguajes donde las constantes están diseñadas para no cambiar jamás
//se escriben así para identificarlas rápido dentro del código. Es como un estandar no escrito.
//Las rutas las escribiremos así, con guión bajo y URL para identificarlas rápida/
//En estas peticiones para publicar algo, necesitamos pasarle algo de información, para comunicarnos correcta/ con el servidor:
//      -   el método: aquí sería POST
//      -   las cabeceras: En cualquier petición siempre hay cabeceras con un montón de info.Nosotros solo necesitamos especificar el content-type
//      -   El cuerpo: Lo que queremos enviar (necesitaremos la sintaxis de la API) Aquí en JSONPlaceholder.../users son objetos con userID, ID, title 
//y body. El ID no se los enviamos nosotros xq ellos ya sabŕán que ID tienen que asignar desde el servidor, no tengo por qué saberlo yo.
//Entonces le ponemos el title y body con algo dentro, en un objeto. Luego habrá que convertir este objeto a formato JSON
const newPost = {
    title: "mi título",
    body: "mi cuerpo de publicación"
}

const http = {//Aqúi solo decidimos el nombre de nuestra variable(http)
    method: "POST",
    headers: {//la propiedad headers ha de ser un objeto con las cabeceras que queramos, cookies, navegador, fecha, etc...
        //Nosotros aquí solo necesitamos content-type
        "Content-type": "application/json"
        //NOTA VIP: En JS las propiedades de un objeto se pueden escribir como un string
        //Las escribiremos así cuando el nombre de la prop tenga caracteres prohibidos en las 
        //variables como nº en el comienzo, guiones y demás.
        //Por esto content-type al llevar el guión nos obliga a escribirl en formato string
        //Para acceder a ella (no lo necesitamos aquí) usamos los corchetes, no el punto <<http["content-type"]>>
    },
    body: JSON.stringify(newPost) //Asi se convierte a formato JSON, con strigify. Esto es neceario xq solo se puede enviar texto, no variables
};

fetch(POST_URL, http)
    //como 1º argumento tiene la url a donde quiero enviar la información
    //y como 2º arg. un objeto. Se puede poner dentro pero mejor hacerlo fuera,
    //guardarlo en una variable y ponerla para que quede más limpio.
    //el resto de es idéntico
    .then(response => response.json())
    .then(data => console.log(data))