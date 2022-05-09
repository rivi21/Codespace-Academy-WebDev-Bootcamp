//Las clases son una capa encima de las funciones constructoras para simplificar algunas cosas.
//Se introdujeron en ES& para parecerse al resto de lenguajes preparados para POO como Python, PHP, Java, C++
//Son modelos que definen propiedades mediante variables (el estado) y métodos apropiados mediante funciones para operar 
//con dichas propiedades (el comportamiento). Tiene sentido que si han inventado las clases, las funciones constructoras 
//se dejasen de usar, y en muchos aspectos es cierto pero por ejmplo en REACT han seguido la tendencia contraria. 
//Empezaron con las clases y han acabado usando las funciones xq no necesitan la complejidad que añaden estas
//y lo único que pretenden es tener el mínimo código posible, y las funciones constructoras son más cortas.
//Con las clases ganamos ciertas opciones extra.

//Herencia aplicacion al proyecto:
//  1ª Clase genérica usuario:
//          2º clase:   -   Cliente
//                      -   Administrador
//Ejercicios DOM : los option de cada select o los li de cada ul tb pueden hacerse así
//                    xej elemento rellenable: - ul
//                                             - select

//CLases: Generan una sintaxis mas clara en el manejo de los prototipos
//          Una clase solo puede tener un método constructor, que crea e inicializa un objeto creado con una clase.
//          El constructor puede usar la palabra reservada "super" para llamar al constructor de una superclase

//----------------------------------Antes de ES6--------------------------------------------
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;//Date es un objeto definido en JS con sus propios métodos para gestionar fechas (si ponemos new Date(). nos salen en el desplegable)
        // Permite comparar fechas muy fácil/, restar una a otra y saber el tiempo entre ellas, controlar si una fecha dada es antes o dsps
        //de la fecha actual, etc...Aquí vamos a saber la edad en años del coche
        console.log(`This ${this.brand} ${this.model} is ${age} years old.`);
    }
}

let myCar = new Car("Ford", "Mustang", 1990);
let myCar2 = new Car("Audi", "Q7", 2015);

console.log(myCar, myCar2);
myCar.getAge();

//Para cambiar o añadir un método al objeto:

Car.getHP = function () {//No actualiza las instancias
    console.log("This car has 300 horsepower");
}

myCar.getHP = function () {//Solo modifica la instancia myCar
    console.log("This car has 300 horsepower");
}

//Para afectar a todas las instancias del objeto Car accederemos al prototipo. El cual podremos modificar
//Esto afectará incluso a las instancias anteriores
Car.prototype.getHP = function () {
    console.log("This car has 300 horsepower");
}

//Por esto, se crearon las clases, para guardar las funciones en el prototipo y no tener que repetirlas ocupando un montón de memoria 
//en cada instancia de esa clase. Simplifica mucho.

//------------------------ES6------------------------------

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }

    getType() {
        console.log("I am a common book");
    }
}

const book1 = new Book("Metamorphosis", "Franz Kafka", 1915);
console.log(book1);//en la consola del navegador vemos que los métodos no están en la instancia, sino en el prototipo.
//La instancia solo tiene la info justa y necesaria.

//------Subclases (Herencia)-------
//sintaxis de la herencia.
class Magazine extends Book {   //Si queremos que herede solo algunas cosas entonces es que hemos diseñado mal la clase y hace falta  
    //una clase intermedia que herede de donde viene Book y le sirva a Magazine todas sus props
    constructor(title, author, year, month) {    //sin constructor, hereda el de arriba. Lo ponemos para añadir la clase month
        super(title, author, year);             //Sintaxis: super(props Book) y dsps this.month...
        this.month = month;
    }
    getType() {
        console.log("I am a magazine"); //redefinimos el getType de Book
    }
}

//Instanciamos una revista
const mag1 = new Magazine("Super Pop", "Algún loco", 2015);
mag1.getSummary();

mag1.getType();
book1.getType();  //Polimorfismo: 2 cosas con el mismo nombre puede hacer cosas diferentes

/* //Dentro de class Magazine podríamos crear getType() no para sobreescribir el de Book, sino para ampliar lo que hace.
//para eso usamos super() para referirnos al método superior dentro de otro método al que le añadimos algo mas
class Magazine extends Book {

    getType() {
        super.getType()                     //Hacer esto es muy habitual xq asi podemos hacer lo que hace Book y aparte 
        console.log("I am a magazine");     //algo más.Por eso la herencia siempre se entiende como ampliar, xq cuanto mas concreto
        //aportamos mas info y tiene mucho sentido reutilizar funciones para ampliarlas
        //                                                
    }
} */

//Otro ejemplo de polimorfismo
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
    }

    static compareAnimals(animal1, animal2) {
        return animal1.type === animal2.type
    }
}

class Feline extends Animal {
    constructor(type, name) {
        super(type, name, "miau")       //toda las instancias de Feline su sonido sera "miau"
    }
}

class Cat extends Feline {
    constructor(name) {
        super("cat", name);      //Para todas las instancias de Cat el tipo será cat y el sonido miau, solo cambiará el name
    }
    scrachPillow(params) {

    }
}

class Dog extends Animal {
    constructor(name) {
        super("dog", name, "woof");
    }

}

const conBotas = new Cat("conBotas");   //Al instanciar un nuevo Cat solo le pasamos el name xq las otras props son fijas y ya las sabe
const dylan = new Dog("dylan");
const danko = new Dog("danko");

console.clear();

conBotas.makeSound();
dylan.makeSound();
danko.makeSound();
//Cuanto mas carguemos en las capas superiores, mas simples serán las instancias concretas inferiores
//La idea es como un arbol genealógico muy facilmente escalable

//Métodos estáticos: no necesitan el this Son métodos mas auxiliares de ayuda, que no necesitan ser instanciados
//a partir de una variable creada como arriba .makeSound (). No pertenecen a las instancias sino al constructor
//Se podrían poner fuera de la clase y funcionarían igual ya que reciben por argumento y devuelven algo
//pero lo ponemos dentro porque algo si que tiene que ver con Animal y porque esté ordenado.
// Al crearlo hay que escribir la palabra reservada static, el nombre de la función y el/los argumentos que necesita
//Al llamarlo ponemos el nombre del constructor, punto ,la función y las instancias por argumento

danko.compareAnimals()//Me daría error xq no es una función de la instancia

Animal.compareAnimals(dylan, danko); //así hay que escribirlo.

//todos los métodos que parten del constructor son estáticos.Es el caso de Array.from o Object.keys x ej

//ESTO JUNTO CON LA OOP LA VEREMOS MÁS A FONDO EN PHP