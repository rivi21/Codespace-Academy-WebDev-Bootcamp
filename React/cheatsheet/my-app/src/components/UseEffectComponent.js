import { useEffect, useState } from 'react';

export default function UseEffectComponent() {

    const [count, setCount] = useState(0);

    console.log('Me ejecuto cada vez que cambia el componente');//se ejecuta cada cambio de estado(apretar el boton)

    useEffect(() => {
        console.log(('acabo de montarme'));//se ejecuta solo la 1º vez que se monte

        return () => console.log('me desmonto');// se ejecuta al desmontarse(x ej: para un autoguardado al salir vendría muy bien) Se usa menos

    }, []); //siempre hay que poner la lista de dependencias aunque esté vacía "[]", aun sin argumento, xq si no hay peligro de caer en un bucle infinito
    //por ej si pusiéramos un setCount, en lugar de un console.log

    /* Los usos de useEffect en general son para el fetch y para hacer lógica de js en su interior que no puedo
    hacer con jsx. Como por ejemplo: */
    useEffect(() => {
        document.title = count;
    }, [count])//cada vez que se cambie count, el estado del que depende, se ejecute lo de dentro( Aquí, q se actualice el título de la página, la pestaña)

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
