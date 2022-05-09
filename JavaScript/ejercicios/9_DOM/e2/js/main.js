/* Ejercicio 2
Vamos a crear una LISTA que muestre toda la información de un usuario. Habrá un SELECTOR para poder
elegir los diferentes usuarios que tenemos guardados en un ARRAY. Al seleccionar uno diferente
actualizará la lista para mostrar la información del usuario que esté seleccionado.
Los usuarios serán OBJETOS y contendrán las siguientes propiedades y métodos:

• Nombre, Primer apellido, Segundo apellido, Email, Edad, Ciudad, Número de artículos en carrito de
compra, Función que incremente en 1 el número de artículos y Función que vacíe el carrito.

Añadir dos botones fuera de la lista, uno que incremente de uno en uno los artículos del carrito y el otro
que los vacíe. La lista será generada con un bucle for...in sobre las propiedades del objeto para obtener
el nombre y los valores (pares de key y values). */

//1. Crear el constructor del usuario con sus propiedades y métodos.
class User {
    constructor(name, firstLastName, secondLastName, email, age, city) {
        this.name = name;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.email = email;
        this.age = age;
        this.city = city;
        this.nProducts = 0;     //las props no obligatorias situarlas al final     
        this.incrementProducts = function () {
            this.nProducts++;
        };
        this.emptyProducts = function () {
            this.nProducts = 0;
        }
    }
};


//2. Rellenar el array con varios usuarios:
//Data
const users = [
    new User('Pepe', 'Díaz', 'Marco', 'pepediaz@gmail.com', 10, 'Málaga'),
    new User('Ana', 'Flores', 'Ruiz', 'anaflores@outlook.com', 20, 'Córdoba'),
    new User('Carlos', 'Gonzalez', 'Navarro', 'cargonzalez@msn.com', 30, 'Soria')
];


//3. Creamos el HTML y CSS necesarios y accedemos desde JS a los elementos 
//necesarios del DOM y guardamos las referencias:
//Selectors
const select = document.querySelector('#userSelect');
const list = document.querySelector('#userInfo');
const incrementButton = document.querySelector('#incrementButton');
const emptyButton = document.querySelector('#emptyButton');


//4. Rellenamos el selector con el nombre de cada usuario.
//V1 bucle for...of
for (let user of users) {
    const newOption = document.createElement('option');
    newOption.textContent = user.name;
    select.appendChild(newOption);
}
//V2 bucle for-Each
// users.forEach(user => {
//     const newOption = document.createElement('option');
//     newOption.textContent = user.getNombreCompleto();
//     select.appendChild(newOption);
// })


//5. Rellenamos la lista con todas las propiedades de un usuario cualquiera.
for (const propertyName in users[0]) {
    const value = users[0][propertyName];//lo guardamos en una variable para que sea mas legible
    //para que no me coja las funciones del final del constructor:
    //V1
    if (typeof value !== 'function') {
        /*  //check---> console.log(`propertName: ${propertyName}-/- value: ${users[0][propertyName]}`);
         const newListItem = document.createElement('li');
         //newListItem.textContent = `${propertyName} : ${value}`;
         newListItem.innerHTML = `<b>${propertyName}</b> : ${value}`;
         //truquillo par ponerlo en negrita usando innerHTML aunque está harcodeado pero aquí nos vale
         newListItem.classList.add('list-group-item')//añado la clase de bootstrap para que coja el estilo
         list.appendChild(newListItem); */

        //V1.1
        //todo lo de dentro del if podríamos hacerlo así:
        list.innerHTML += `<li class="list-group-item"><b>${propertyName}:</b> ${value}</li>`;
        //Lo malo es que está harcodeado pero en algunos casos puede ser útil. Es válido y hay gente que lo prefiere.

    }
    //V2
    //otra forma casi igual es con instanceof que devuelve true o false si lo 1º es una instancia de lo 2º 
    //xej: (users[0] instanceof User) que daría true
    //si const five = new Number(5)--->(five instanceof Number) = true,
    //si const five = 5            --->(five instanceof Number) = false, xq no es una instancia propiamente dicha.
    // entonces:
    /*   if (!(value instanceof Function)) { //si value no es una instancia del prototipo Funcion...
          // check---> console.log(`propertName: ${propertyName} value: ${user[0][propertyName]}`);
          const newListItem = document.createElement('li');
          newListItem.textContent = `${propertyName} : ${value}`;
          newListItem.classList.add('list-group-item')//añado la clase de bootstrap para que coja el estilo
          list.appendChild(newListItem);
      } */
}


//6. Añadir listeners necesarios
select.addEventListener('change', (e) => {
    //asi seleccionamos al usuario
    const selectedUser = (users.find(user => user.name === select.value));
    //la función find es parecido a un forEach. Itera sobre los elementos del array 
    //y devuelve el primer elemento que cumpla con la condición. Solo el 1º.
    //Otra función es filter() que funciona = que find() pero devuelve un array de todos los que 
    //cumplan la condición. Si ninguno la cumple devuelve un array vacío.

    //cogemos el FOR de antes,lo metemos en una función y refactorizamos para desharcodear el usuario: cambiamos users[o] por user.
    //una vez hecho le pasamos selectedUser como parámetro y ya sirve par cualquiera del array de usuarios
    updateList(selectedUser);
});


//7. Si el selector cambia, actualizamos la lista con toda su información.
function updateList(user) {
    //solucionamos el problema de que imprima uno detrás de otro.
    list.innerHTML = '';//antes de imprimir limpiara de contenido la lista

    for (const propertyName in user) {
        const value = user[propertyName];

        if (typeof value !== 'function') {
            const newListItem = document.createElement('li');
            newListItem.innerHTML = `<b>${propertyName}</b> : ${value}`;
            newListItem.classList.add('list-group-item');
            list.appendChild(newListItem);

            //list.innerHTML += `<li class="list-group-item"><b>${propertyName}:</b> ${value}</li>`;
        }
    }
}


//8. Si pulsamos los botones, tendrá que actualizarse el número de productos del usuario seleccionado
function processProducts(e) {
    //usamos la constante creada antes para seleccionar el usuario
    const selectedUser = (users.find(user => user.name === select.value));
    //Le indicamos como esta función solo la usan los botones, si el evento lo lanza uno u otro y qué hacer en cada caso
    if (e.target.id === 'incrementButton') {
        selectedUser.incrementProducts();
    } else {
        selectedUser.emptyProducts();
    }
    //o tbcon op. ternario
    // (e.target.id === 'incrementButton') ? selectedUser.incrementProducts() : selectedUser.emptyProducts()
    //para que actualice la lista cada vez que le doy al boton, si no no cambia nada
    updateList(selectedUser);
}

incrementButton.addEventListener('click', processProducts);//no se ponen paréntesis xq el addEventListener necesita la función, no lo que devuelve esta.
emptyButton.addEventListener('click', processProducts);