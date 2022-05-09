/* 1. Generar un array de 100 objetos que tengan las siguientes propiedades:
• Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
• Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
• Salario: un número aleatorio entre 1250 y 4000. */

class Empleado {
    constructor(cargo, rendimiento, salario) {
        this.cargo = cargo;
        this.rendimiento = rendimiento;
        this.salario = salario;
    }
    getCargo(number) {
        this.cargo = `Empleado ${number}`;
    }
    getRendimiento() {
        this.rendimiento = (Math.floor(Math.random() * 100)) / 100;
    }
    getSalario() {
        this.salario = 1250 + (Math.floor(Math.random() * 2750 + 1));
    }
    cargoNumber() {
        //this.cargo.slice(8);
        //this.cargo.replace("Empleado ", "");
        return this.cargo.split(" ")[1];
    }
}
const cienEmpleados = []

for (let i = 1; i <= 100; i++) {
    const empleado = new Empleado();
    empleado.getCargo(i);
    empleado.getRendimiento();
    empleado.getSalario();
    cienEmpleados.push(empleado);
}
console.log(cienEmpleados);


//2. Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.
cienEmpleados.sort(function (a, b) {
    return a.rendimiento - b.rendimiento;
})
console.log(cienEmpleados);


//3. Ordenar el array por salario e imprimirlo. Usar una función de flecha.
cienEmpleados.sort((a, b) => {
    return a.salario - b.salario;
})
console.log(cienEmpleados);


//4. Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará
//dentro del string Cargo. Usar una función nombrada como callback
cienEmpleados.sort((a, b) => {
    return b.cargoNumber() - a.cargoNumber();
    //en la resta los string de nº JS los parsea directa/ por eso funciona esto sin parsear
    //aunque el método cargoNumber() aplique métodos de string y devuelve un string
})

console.log('apartado4', cienEmpleados);


//5. Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.
function isBigEnough(value) {
    return (value.salario > 2500);
}
let mayoresSalarios = cienEmpleados.filter(isBigEnough);

console.log(mayoresSalarios);


//6. Usando forEach: subir el sueldo un 25% a los que cobren menos de 1500€.
cienEmpleados.forEach((element) => {
    if (element.salario < 1500) {
        // console.log(element); para checkear
        element.salario = element.salario * 1.25 // element.salario += 1.25
        // console.log(element); para checkear
    }
})
console.log(cienEmpleados);


//7 Usando map: Imprimir un array de objetos que tengan sólo la propiedad salario.
let onlySalaries = cienEmpleados.map((element) => {
    return {
        salario: element.salario,
        // cargo: element.cargo
    }
})
console.log(onlySalaries);


//8. Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que
//a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos.
const salarios = cienEmpleados.map((element) => { return element.salario })

let costeSueldosEmpresa = salarios.reduce((a, b) => { return a + b }) * 1.15;

console.log(`Coste total empleados ${costeSueldosEmpresa}`); //NOTA creo que da error con los decimales


//9. Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en
//cada apartado:

//• Despedir a los que tengan un rendimiento menor a 0.3.
cienEmpleados.map((element) => {
    if (element.rendimiento < 0.3) {

        console.log(`Despedir a : ${element.cargo}`);
    }
});

//• Calcular el sueldo medio de la empresa.
let sueldoMedio = salarios.reduce((a, b) => { return a + b }) / 100;

console.log(`Sueldo medio: ${sueldoMedio}`);

//• Subir el sueldo de los que tengan un rendimiento superior a 0.7.
cienEmpleados.map((element) => {
    if (element.rendimiento > 0.7) {

        console.log(`subir sueldo a : ${element.cargo}`);
    }
});