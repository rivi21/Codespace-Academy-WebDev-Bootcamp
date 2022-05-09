
//https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes

//Alumnos de un colegio

const alumnos = {
    id: 1,
    name: 'pepito',
    interest: ['música', 'futbol'],
    saludar() { //dentro de los bjetos a las funciones se le llaman métodos
        return `${this.name} dice hola`//'this (palabra reservada que hace referencia al propio objeto)
    }
}
//La Poo crea como plantillas (objetos) para hacer algo (aquí hacer alumnnos)
//y así ahorrarnos tener que escribir todas las propiedades por cada alumno, cada vez
//solo tendríamos darle valor a cada clave.
//despues cuando creamos un alumno, este alumno (pepito)sería una instancia de alumnos


//-----------------Funciones constructoras------------------------

//(como se hacían antes de las clases. Esta forma aunque se puede hacer, ya no se usa)
function Persona() {
    this.legs = 2;
    this.arms = 2;
    this.head = 1;
}
function Alumno(name, interest) {
    this.name = name;
    this.interest = interest;
    this.saludar = function () {
        return `${this.name} dice hola`
    }
}
Alumno.prototype.saludarEnIngles = function () {
    return `${this.name} says hi!`
}

const alumno1 = new Alumno('Nacho', ['Música', 'Futbol']); //Esto sería la instancia de Alumno
console.log(alumno1.saludar());


//--------------------Class (método actual)--------------------------

class Persona1 {
    constructor(name, age) {
        this.legs = 2;
        this.name = name;
        this.age = age;
    }
    //Métodos fuera del constructor, pero dentro de la clase
    saludar() {
        return `${this.name} dice hola`;
    }
}

Persona1.prototype.saludarEnIngles = function () {
    return `${this.name} says hi!`
}

const persona1 = new Persona1('Nacho', 32);

console.log(persona1);

//--------------getter y setter: Métodos que añadimos a la clase------------
//--------------métodos estáticos--------------------

class Persona2 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get getName() {
        return this.name
    }
    set setName(name) {
        this.name = name;
    }
    //Métodos fuera del constructor, pero dentro de la clase
    saludar() {
        return `${this.name} dice hola`;
    }
}

//https://www.webtips.dev/private-properties-in-javascript

class Alumno2 extends Persona2 {
    #notas = []  //la '#' es para indicar que es una prop privada y para acceder a ella hemos
    //de usar get o set 
    constructor(name, age, notas = []) {
        super(name, age);//super es para no escribir de nuevo todas las props del padre
    }
    set setNotas(nota) { //método set: set para modificar propiedades del objeto
        this.#notas.push(nota);
    }
    get getNotas() {  //método get obtener una propiedad del objeto
        return this.#notas;
    }
    static probarSaludo(nombre) { //método estático: acceder a una prop del objeto sin tener que instanciarlo(Math.random)
        return `${nombre} dice hola`
    }
}

const persona2 = new Persona2('Nacho', 56);
console.log(persona2);

persona2.setName = 'pepito';
console.log(persona2);

const alumno2 = new Alumno2('Paco', 34);
console.log(alumno2);

alumno2.setName = 'Juanito'
console.log(alumno2);

console.log(Alumno2.probarSaludo('Nacho'));