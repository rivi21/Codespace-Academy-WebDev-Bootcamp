class User {
    constructor(name, lastName1, lastName2, city, age = 20) {
        //parametros no obligatorios van al final
        this._name = name;
        this._lastName1 = lastName1;
        this._lastName2 = lastName2;
        this._age = age;
        this._city = city;
        this._shoppingCartItemsN = [];
    }



    getName() {
        return this._name;
    }



    getCart() {
        return this._shoppingCartItemsN;
    }



    addCart(item = "") {
        this._shoppingCartItemsN.push(item);
        return this._shoppingCartItemsN;
    }



    emptyCart() {
        return this._shoppingCartItemsN = [];
    }



    getFullName() {
        return `${this._name}, ${this._lastName1}`
    }



    getLastName() {
        return `${this._lastName1}`
    }
    getCount() {
        return this._shoppingCartItemsN.length;
    }



    toStringList() {
        let nameLi = window.document.createElement('li');
        nameLi.classList.add('list-group-item')
        nameLi.innerHTML = "Name : " + this._name;
        list.appendChild(nameLi);



        let lastName1 = window.document.createElement('li');
        lastName1.classList.add('list-group-item')
        lastName1.innerHTML = 'Last Name:' + this._lastName1;
        list.appendChild(lastName1)



        let age = window.document.createElement('li');
        age.classList.add('list-group-item')
        age.innerHTML = 'Age:' + this._age;
        list.appendChild(age)



        let city = window.document.createElement('li');
        city.classList.add('list-group-item')
        city.innerHTML = 'City:' + this._city;
        list.appendChild(city)
    }
}





let user1 = new User('Paco', 'Rodriguez', 'Jiminez', 'Malaga', 25);
let user2 = new User('Ana', 'Molina', 'Ruiz', 'Malaga');



let selectedUser = user1;
let arrayUser = [user1, user2]



let html = "";



const list = document.querySelector('#list');
const select = document.querySelector(".custom-select");
const addButton = document.querySelector('#btnAddProduct');
const remButton = document.querySelector('#btnRemProduct');




arrayUser.forEach((element, index) => {
    //el elemento es cada elemento del array, en este caso los usuarios
    html += `<option value="${index}"> ${element.getFullName()}</option>`
})



select.innerHTML += html;



//que entren los elementos en la lista
user1.toStringList();
user2.toStringList();



/* let nameLi = window.document.createElement('li');
nameLi.classList.add('list-group-item')
nameLi.innerHTML = "Name : " + this._name;
list.appendChild(nameLi); */



addButton.addEventListener('click',
    () => {
        selectedUser.addCart({
            'price': 20,
            'brand': 'addidas',
            'color': 'black'
        })
        window.document.querySelector('.counter').innerHTML = `Number of items in card : ${selectedUser.getCount()}`
    }
);



remButton.addEventListener('click', () => {
    selectedUser.emptyCart()
    window.document.querySelector('.counter').innerHTML = `Number of items in card : ${selectedUser.getCount()}`
})



select.addEventListener('change', (event) => {
    //primer parametro tipo de evento segundo lo que entre
    //arrayUser[event.target.value].toStringList()
    list.innerHTML = "";
    //con esto se borra todo lo del contenedor ul para que no se concatene el contenido anterior



    let user = arrayUser[event.target.value];
    selectedUser = user;



    for (const key in selectedUser) {



        let li = window.document.createElement('li');
        // console.log(li);
        li.classList.add('list-group-item');
        li.innerHTML = `${key} : ${selectedUser[key]}`
        list.appendChild(li);



        /* console.log(key)
        console.log(selectedUser[key])
        console.log('----------'); */
    }
    let li = window.document.createElement('li');
    li.classList.add('list-group-item');
    li.classList.add('counter');
    li.innerHTML = `Number of items in card : ${selectedUser.getCount()}`
    list.appendChild(li);



    //se busca que el indice del arrayUser coincida con el value del selector(usuario1[0]-option1[0])
})



//event.target.querySelector("option[selected]").value
//si fuera a tener logica propia si que haría falta un array, si solo se va a usar como caja no hace falta



/* user1.addCart({
    'price': 20,
    'name': 'mouse'
    //con comillas nos quitamos de problemas de que se pueda confundir con una variable
})



let price = "hola";
let color = [];



user1.addCart({
    'price': 40,
    'color': 'red',
    'brand': 'addidas'
});



let card = user1.getCart();



card.forEach(element => {
    for (const key in element) {
        console.log(key);
        console.log(element[key])
    }
    console.log("--------")
})
 */