/* 4. - Te has matriculado en cursos universitarios y necesitas 
comprar los libros de textos necesarios para las clases. 
Está creando un programa para extraer datos de la lista de libros 
y obtener los números ISBN de cada libro de texto que se requiere. 
Utilice la desestructuración anidada de objetos y matrices 
para obtener el valor ISBN del primer texto del primer libro de la 
matriz de cursos.La matriz de cursos sigue el siguiente formato:*/

[
    {
        título: 'Álgebra lineal II',
        descripción: 'Álgebra lineal avanzada.',
        textos: [
            {
                autor: 'James Smith',
                precio: 120,
                ISBN: '912-6-44-578441-0'
            }
        ]
    },
]

/* Para obtener datos de la anidación de objetos y matrices complicadas
mediante el uso de desestructuración anidada, realice los siguientes
pasos: */

/* · Guarde la estructura de datos proporcionada en la variable
courseCatalogData. */

/* · Desestructura el primer elemento de la matriz en una variable llamada curso:
[curso] = […] */

/* · Reemplace la variable del curso con la desestructuración de objetos
para guardar el campo de textos en una variable llamada libros de texto:
[{ textos: libros de texto }] = […] */

/* · Reemplace la variable de libros de texto con desestructuración de
matriz para obtener el primer elemento de la matriz de textos y
guárdelo en la variable llamada libro de texto:
[{ textos: [libro de texto] }] = […] */

/* · Reemplace la variable del libro de texto con la desestructuración
del objeto para obtener el campo ISBN y guárdelo en la variable ISBN:
[{ textos: [{ ISBN }] }] = […] */

//Muestre el resultado de ISBN por consola.