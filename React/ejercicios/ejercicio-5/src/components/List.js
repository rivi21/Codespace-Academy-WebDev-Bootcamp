export default function List(props) {

    return (
        <>
            <h1>{props.category}</h1>
            <ul>{props.product.map(element => {//En map (generación dinámica) hace falta la key
                //la key se pone en el elemento de mas alto nivel dentro del map. Fuera del map no hace falta
                // Es un identificador único. Necesario para que react sepa como enlazar con el Dom y no nos de errores
                //Aquí es fácil xq ya tenemos un dato irrepetible, los id. Si no, cualquier cosa que no se repita
                return (
                    <li key={element.id}>
                        {element.product} {element.brand} {element.model} Price: {element.price} $
                    </li>
                )
            })}
            </ul>
        </>
    )
}
