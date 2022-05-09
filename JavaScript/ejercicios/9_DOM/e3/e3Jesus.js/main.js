//1-Generación del array.
//No hace falta el constructor xq aquí no vamos a necesitar nosotros como programadores
//reutilizarlo. Sino que va a ser el propio programa quien mediante el bucle me genere
//todos objetos que necesitamos.
let employees = [];

function randomBetweenRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}

for (let i = 1; i <= 100; i++) {
    employees.push({
        position: `Empleado ${i}`,
        performance: Number(Math.random().toFixed(2)),
        //.toFixed redondea al número de decimales al número que le indicamos por argumento. Aquí(2)
        //pero lo devuelve como string. Por eso lo parseamos con Number.
        salary: randomBetweenRange(1250, 4000)
    });
}
console.log('1, Generación del array', employees);

//Apartado 1 V2 Con función constructora
function Employee(position, performance, salary) {
    this.position = position;
    this.performance = performance;
    this.salary = salary;
};

employees = [];//reescribimos para que no de error y poder ejecutarlo todo el rato 
for (let i = 1; i <= 100; i++) {
    employees.push(new Employee(
        `Empleado ${i}`,
        Number(Math.random().toFixed(2)),
        randomBetweenRange(1250, 4000))
    );
}
console.log('1, Generación del array V2', employees);

//2-Ordenar por rendimiento
employees.sort(function (emp1, emp2) {
    return emp1.performance - emp2.performance
});
console.log('2 Ordenar por rendimiento', employees);

//3-Ordenar por salario:
employees.sort((empleado1, empleado2) => empleado1.salary - empleado2.salary);
console.log('3 Ordenar por salario', employees);

//4-Ordenar por nº de empleado decreciente
function sortByEmployeeNumber(emp1, emp2) {
    return emp2.position.split(" ")[1] - emp1.position.split(" ")[1];
    return emp2.position.slice(8) - emp1.position.slice(8); //Alternativa corta pero rígida
    return emp2.position.replace("Empleado ", "") - emp1.position.replace("Empleado ", ""); //Alternativa más larga
}
employees.sort(sortByEmployeeNumber)
console.log('4- Ordenar por nº de empleado decreciente', employees);

//5- Filtrar e Imprimir ciertos campos
console.log('5- Filtrar e imprimir ciertos campos');
employees//Manera legible de escribir funciones concatenadas
    .filter(employee => employee.salary > 2500)
    .forEach(employee => console.log(employee.position, employee.salary));

//6- Con .map() subir el sueldo 25% con salario <1500
employees = employees.map(employee => {
    if (employee.salary < 1500) {
        //modifico el salario de los que cumplen la condición
        employee.salary = employee.salary * 1.25;
        //retorno el empleado
    }
    return employee;
});
console.log('6. Salario subido 25%', employees);

//7- Con reduce() calcular el coste total para la empresa
const totalCost = employees.reduce((salarySum, employee) => salarySum + employee.salary * 1.15, 0);
console.log();

//8
employees = employees.filter(employee => employee.performance >= 0.3);
console.log("8.1 Despedir a los que rindan < 0,3", employees);

//como hemos filtrado ahora habrá menos elementos en employees
let averageSalary = employees.reduce((salarySum, employee) => salarySum + employee.salary, 0) / employees.length;
averageSalary = averageSalary.toFixed(2);
console.log("8.2 Calcular el sueldo medio de la empresa", averageSalary);

//Par el último podemos usar el código del ejer.6
// employees = employees.map(employee => {
//     if (employee.performance > 0.7) {
//         employee.salary = employee.salary * 1.25;
//     }
//     return employee;
// });

//el útimo con for..Each
employees.forEach(employee => {
    if (employee.performance > 0.7) {
        employee.salary = employee.salary * 1.25;
        console.log(`subir sueldo a : ${employee.position}`);
    }
});
console.log("8.3 Subir el sueldo de los que tengan un rendimiento superior a 0.7", employees);