//En una empresa vamos a diferenciar dentro de los empleados a arquitectos,administrativos.
//Los empleados tendran como propiedades: dni,nombre,telefono,salario
//y dos metodos que seran: obtenerDni y subirSalario
//Los arquitectos ademas tendran en sus propiedades: comisiones y numero de proyectos
//los metodos de los arquitectos seran: diseñar, subir sueldo
//Los administrativos tambien tendrán propiedades como: pulsaciones, nivel
//los metodos de los administrativos seran: obtener pulsaciones y obtener nivel

class Empleado {
    constructor(dni, nombre, telefono, salario) {
        this.dni = dni;
        this.nombre = nombre;
        this.telefono = telefono;
        this.salario = salario;
    }

    getDni() {
        return this.dni;
    }

    subirSueldo(cantidad) {
        this.salario += cantidad;
        return this.salario;
    }

}

class Arquitecto extends Empleado {
    constructor(dni, nombre, telefono, salario, comisiones, nProyectos) {
        super(dni, nombre, telefono, salario)
        this.comisiones = comisiones;
        this.nProyectos = nProyectos;
    }

    design() {
        console.log(`${this.nombre} esta diseñando`);
    }

    subirSueldo(cantidad) {
        this.salario = this.salario + this.comisiones + cantidad;
        return this.salario;
    }
}

class Administrativo extends Empleado {
    constructor(dni, nombre, telefono, salario, pulsaciones, nivel) {
        super(dni, nombre, telefono, salario)
        this.pulsaciones = pulsaciones;
        this.nivel = nivel;
    }

    getPulsaciones() {
        return this.pulsaciones;
    }

    getNivel() {
        return this.nivel;
    }
}

//el usuario rellena el formulario
//compruebo que los datos que ha introducido en los campos de texto son correctos
//segunda comprobacion en el back
//crearia el usuario
//se guardaria en BBDD
//retornaria el resultado

const daniel = new Empleado('777777-Y', 'Daniel Perez', '666666666', 2000);

console.log(daniel.subirSueldo(100));
console.log(daniel);

const admin1 = new Administrativo('55555555-R', 'Luis Gomez', '687789789', 1500, 200, "A");
console.log(admin1.getPulsaciones());
console.log(admin1.getNivel());

const arquitecto1 = new Arquitecto('23232323-G', 'Pedro Lopez', '654987987', 2100, 300, 9);
console.log(arquitecto1.subirSueldo(150));
console.log(arquitecto1);