// import React from 'react' esto ya no hace falta. lo pone emmet xq no debe estar actualizado
//Antes era necesario para escribir en el return jsx, componentes etc. Desde el 2020 solo se pone en 
//index.js
import { Fragment } from "react";
import PropTypes from "prop-types"; //sin llaves porque el módulo ya lo exporta como default

export default function FirstComponent(props) {//props engloba en forma de objeto los atributos enviados desde el padre
    /* console.log(props, typeof props);
    console.log(props.date); *///para el segundo FirstComponent saldría undefined pero react lo sabe y no lo pone.

    //-----EVENTOS-----
    // 2 Formas de hacerlo:
    //2.A Si necesitamos pasarle info sería:
    const myFunction = function (bookID) {
        return (event) => console.log(bookID, event.target);
        //Ponemos la lógica en el return para darnos la opción de pasarle por el atributo onClick
        //la información nuestra que necesitemos. Si la ponemos antes del return se ejecutaría sin 
        //necesidad de hacer click.
        //Es decir el evento onClick, (que necesita una función como los eventListener) le pasamoas 
        //una función intermedia que solamente nos da la info que necesitemos a través de sus parámetros
        // y que devuelve otra función que es la que lleva a cabo la lógica del asociada al evento.
        //Esto se hace xq es la única forma que tengo de pasar info.
        //Nos habría venido muy bien para eliminar los libros en el E4 del Dom
    }
    //2.B Si no necesitamos pasar info se hace como siempre:
    const mySimpleFunction = function (event) {
        //process event
        console.log(event);
    }

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date ? props.date : "No hay fecha"}</small>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
            {/* <button onclick={"nombre de la función o la variable donde se guarda"} >Click me!</button>{/* En react los eventos se hacen como si a una etiqueta HTML le añadiéramos js inline */}
            <button onClick={myFunction(1)}>Eliminar Book 1</button>
            <button onClick={myFunction(2)}>Eliminar Book 2</button>
            <button onClick={mySimpleFunction}>Eliminar Book 3</button>
            {/* si no necesitamos pasarle info, le pasamos la función sin llamada, es decir, sin paréntesis */}

            {/* <button onClick={() => event => { console.log(1, event); }}>Toda la gestión inline</button> */}
            {/* Esto sería otra forma de escribir lo mismo pero con funciones de flecha pero esto no hace falta todavía */}
        </Fragment>
    )
}
//VALORES POR DEFECTO
FirstComponent.defaultProps = { //así ponemos valores por defecto
    /* title: "Sin título", */
    date: "Sin fecha",
    products: [],
}
//VALIDACION DE TIPOS
FirstComponent.propTypes = { //Para validación de tipos de datos que ha de tener
    title: PropTypes.string.isRequired, //.isRequired indica que es un valor obligatorio Como 
    //no le hemos dado un valor por defecto arriba al título y aquí nos dice que es requerido
    // nos lanzará un error por consola
    date: PropTypes.string,
    products: PropTypes.array,
}
//Alternativa: export default FirstComponent
//solo se puede un export default por archivo
//Pero podemos exportar mas componentes sin default y entre llaves como un objeto {}
//los default no tienen llaves y los demás si. Aunque solo haremos un componente por archivo

function SecondComponent() {
    return (
        <>
            <h1>Soy otro Componente</h1>
        </>
    )
}

function ThirdComponent() {
    return (
        <div>
            <h1>Soy otro componente más</h1>
        </div>
    )
}

export { SecondComponent, ThirdComponent };//Así exportamos mas componentes