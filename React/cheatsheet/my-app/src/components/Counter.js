//-----------------HOOKS-----------------

//Es una forma nueva de guardar datos diferente a las constantes o variables
//es practica7 igual pero metiendo algo en medio para React reaccione
//En Programación en gral el "estado" de una clase o una función o lo que sea son los datos que guarda.
//Eel estado es lo único que puede cambiar o mutar. 
//En React guardaremos esos datos o info susceptible de cambiar en un estado. Gracias a esto si 
//cambiamos un dato, se actualizará en todos los lugares donde aparezca ese dato

//Ejemplo
import { useState } from 'react'
//useState no está en mayúsculas xq no es un componente sino una función
export default function Counter() {
    // const state = useState(0);//el 0 es el valor inicial
    // const count = state[0];
    // const setCount = state[1]

    const [count, setCount] = useState(0);//(0) estado inicial

    const handleClick = function () {//como el evento no lo necesito en este ej. no hace falta ponerlo
        if (count < 10) {
            setCount(count + 1);
        }

    };

    return (
        <div>
            <p>Has hecho click {count} veces</p>
            {/* Sintaxis con función nombrada}*/}
            <button onClick={handleClick}>Hazme Click</button>
            {/* Sintaxis con función de flecha y con el "operador de cortocircuito" && */}
            <button onClick={() => count > 0 && setCount(count - 1)}>Bajar</button>
            {/* Sintaxis con función anónima  */}
            <button onClick={function () { setCount(0) }}>Reset</button>
        </div>
    )
}

