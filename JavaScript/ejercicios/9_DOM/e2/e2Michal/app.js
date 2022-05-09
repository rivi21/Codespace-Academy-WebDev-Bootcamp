class User {
    /* TERMINAR DE VER EL VIDEO Y REPASAR 
    TODO EL CODIGO SOBRETODO LA SEGUNDA PARTE */

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

let arrayUser = [user1, user2];

let html = "";

const list = document.querySelector('#list');
const select = document.querySelector(".custom-select");
console.log(select);



arrayUser.forEach((element, index) => {
    html += `<option value="${index}"> ${element.getFullName()}</option>`
})


select.innerHTML += html;

user1.toStringList();
user2.toStringList();

select.addEventListener('change', event => {
    //arrayUser[event.target.value].toStringList();
    let html = "";

    let selectedUser = arrayUser[event.target.value];

    for (const key in selectedUser) {

        let li = window.document.createElement('li');
        li.classList.add('list-group-item')//para que lo entienda bootstrap
        li.innerHTML = `${key} : ${selectedUser[key]}`;
        list.appendChild(li);
    }

})



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