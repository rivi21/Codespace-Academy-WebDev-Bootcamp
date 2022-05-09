import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //------ACCESO Y USO DE PARAMETROS-----

export default function Record(/* props */) {

    const [userData, setUserData] = useState({});
    // const params = useParams();
    const { user } = useParams();
    // Este hook de params viene genial para cuando hacemos click y nos lleva a una pag. con información relativa 
    // x ej. una lista de pelis: click en una peli y nos da información sobre ella. Haríamos el useEffect con el fetch 
    // metiendo la url del parámetro (nº o nombre de la peli) y en el return, los datos de la peli, como el título, año, pais sinopsis... 

    const USERS_URL = "https://reqres.in/api/users/";

    useEffect(() => {
        fetch(`${USERS_URL}${user}`)
            .then(response => response.json())
            .then(data => setUserData(data))
    }, [user]); //con "user" aquí como dependencia, useEffect se renderiza cada vez que user(el parámetro de la url, cambie)
    //  

    return (
        <div>
            {/* Record de{props.match.params.user}  Asi se hacía antes para obtener los parámetros.*/}
            {/* Record de {params.user}  Ahora se usa el hook useParams(). Hay que importarlo */}
            <h3>Soy el Record de {user}</h3> {/* y se desestructura params para acceder a la propiedad que queramos. */}
            <ul>
                <li>{userData.data?.first_name}</li>
                {/* el ?. se llama encadenamiento opcional.Es como un ternary op. reducido. Sirve para protegernos de que nos tire un error
                al tratar de acceder a una propiedad de una propiedad de un objeto que puede no existir. 
                Aquí trata llenarse con mi estado inicial que está vacío y por eso la propiedad email o last_name no existe 
                y nos tiraría el error */}
                <li>{userData.data?.last_name}</li> {/* Ojo este data es una prop definida así en el json de la api. No es nuestro data del fetch */}
                <li>{userData.data?.email}</li>
                <img src={userData.data?.avatar} alt="Profile" />
            </ul>
        </div>
    )
}
