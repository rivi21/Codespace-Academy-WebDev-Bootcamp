// La desestructuración es una asignación de los elementos de un array o de las propiedades
// de un objeto a variables que nos da la opción de trabajar con ellas como queramos. 
//En arrays se usan los [] corchetes:
const arr = [1, 2, 3, 4];
[a, b, ...rest] = [1, 2, 3, 4]; a = 1, b = 2, rest = [3, 4]

// En objetos se usan las {} llaves:
const props = {
    category = "electronics",
    product = "Televisor"
}
const { category, product } = props
// Podemos ,en los objetos, poner todas o algunas, xq las seleccionamos por el nombre de la propiedad.

// Viene muy bien para: 
// los imports de los módulos de react que es en si un objeto muy grande y así podemos 
// importar lo que nos interesa entre llaves, lo que necesitemos de forma precisa.
import React, { Fragment, useState, useEffect } from "react"

// las props de los componentes en react, que se reciben por el componente hijo desde el padre
// encapsuladas en un objeto, para ahorrarnos tener que escribir siempre  props.noseque...
// e incluso para cualquier operación dentro del componente con arrays y objetos:

// por ejemplo el componente lista del ejercicio 2:

// De esto 
export default function List(props) {
    return (
        <>
            <h1>{props.category}</h1>
            <ul>{props.product.map(element => {
                return (<li>{element.id} - {element.product} {element.brand} {element.model} Price: {element.price} $</li>)
            })}
            </ul>
        </>
    )
}
// Pasaría a esto
export default function List({ category, product }/* Se ponen las props entre llaves */) {
    return (
        <>
            <h1>{category}</h1>
            <ul>{product.map(({ id, product, brand, model, price }) => {
                return (<li>{id} - {product} {brand} {model} Price: {price} $</li>)
            })}
            </ul>
        </>
    )
}