import { useState } from 'react';

export default function Form({ setContacts }) {
    //Así ya tendremos la función setContacts disponible en todo el componente 

    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [address, setAddress] = useState("");
    // const [city, setCity] = useState("");
    // const [postalCode, setPostalCode] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");

    // function submit(e) {
    //     e.preventDefault();

    //     const newContact = {
    //         name: name,
    //         lastName: lastName,
    //         address: address,
    //         city: city,
    //         postalCode: postalCode,
    //         phoneNumber: phoneNumber
    //     };

    // const newContact = { name, lastName, address, city, postalCode, phoneNumber };
    //esto es lo mismo que lo de arriba. Se puede hacer cuando lo que quieres guardar se llama igual que la propiedad
    // console.log(newContact);

    // setContacts([...contacts, newContact]);//necesitaría recibir "contacts"

    //La función que modifica el estado necesita que le pasemos un nuevo valor de ese estado.
    //si lo dejamos vacío setContacts([]) borraría el array entero. Si le pasamos solo el
    //nuevo valor borraría lo que tuviera y lo sustituiría por el nuevo valor. Por eso necesitamos
    //pasarle lo que ya tiene , más el nuevo valor. Se puede usar el método de arrays .concat, pero
    //lo habitual es usar el spread operator para copiar el original y añadir el nuevo contacto.
    //Gracias al spread op. estamos creando un nuevo array que al ppio tendrá todos los elementos
    //del array original y al final el nuevo elemento. 
    //Pero además necesitamos traer el valor del array original porque nadie se lo ha pasado a Form,
    //y setContacts([...contacts, newContact]), nos daría que contacts es undefined. Hay 2 opciones:
    //Pasar contacts tb por props al Form ó
    //Meterle una función a setContacts que recibe el estado actual y devuelve el siguiente estado como argumento de setContacts

    // setContacts((currentContacts) => {
    //     return [...currentContacts, newContact];//o al revés si quiero concatenarlo al ppio del array [newContact, ...currentContacts]
    // });
    //Lo mismo en flecha: 
    //setContacts(currentContacts => [...currentContacts, newContact]);

    //vaciar los campos del formulario

    //e.target.reset() Esto vacia los campos pero no cambia el estado y si clickamos el botón
    //nos añadiría el mismo contacto otra vez al array.

    //La forma correcta sería
    // ponerle a los value de los input, la key de cada propiedad y así siempre cambiarán cuando cambie el valor de esa propiedad 
    //y además llevar a string vacío los estados mediante las funciones:
    // setName("");
    // setLastName("");
    // setAddress("");
    // setCity("");
    // setPostalCode("");
    // setPhoneNumber("");
    //};
    /* return (
        <div >
            <form onSubmit={submit}>
                <div className="mb-3">
                    <input type="text" className="form-control" value={name} placeholder="Introduce un nombre" id="inputName"
                        onChange={e => setName(e.target.value)} />
                </div >
                <div className="mb-3">
                    <input type="text" className="form-control" value={lastName} placeholder="Introduce los apellidos" id="inputLastName"
                        onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" value={address} placeholder="Introduce la dirección" id="inputAddress"
                        onChange={e => setAddress(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" value={city} placeholder="Introduce la provincia" id="inputCity"
                        onChange={e => setCity(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" value={postalCode} placeholder="Introduce el código postal" id="inputPostalCode"
                        onChange={e => setPostalCode(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" value={phoneNumber} placeholder="Introduce el número de teléfono" id="inputPhoneNumber"
                        onChange={e => setPhoneNumber(e.target.value)} />
                </div>
                <button onClick={(e) => { submitButton(e); console.log(newContact) }} type="submit" className="btn btn-success">Registrar</button>
            </form >
        </div > */
    //     )
    // }


    //-----------segunda versión--------------------

    // Sería hacer un solo estado para todo el formulario en lugar de un estado para cada input
    // Asi nos ahorramos código y  tenemos en lugar de seis variables, una sola con seis propiedades
    // y Tb una sola función "handle..." para todos los input 

    //Creamos un objeto con todas las propiedades que necesitan los inputs iniciadas a string vacío
    //Esto sería el estado inicial
    const initialState = {
        name: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        phoneNumber: ""
    }
    //Creamos un único estado para todo el formulario. Es un objeto con tantas propiedades
    //como inputs tengamos
    const [form, setForm] = useState(initialState);

    //Una sola función para todos los onChange de los input
    //Actualizamos solo la propiedad relacionada con el input que nos llega a través del atributo "name" del input
    function handleInput(e) {

        setForm({ ...form, [e.target.name]: e.target.value })
    }
    //tb así const handleInput = (e) => setForm({...form, [e.target.name]: e.target.value})

    function submit(e) {
        e.preventDefault();

        const newContact = {
            name: form.name,
            lastName: form.lastName,
            address: form.address,
            city: form.city,
            postalCode: form.postalCode,
            phoneNumber: form.phoneNumber
        };

        //Añadimos el nuevo contacto al formulario
        setContacts(currentContacts => [...currentContacts, newContact]);

        //Reiniciamos el formulario
        setForm(initialState);

    };
    //Los value ahora son propiedades de mi objeto por eso ponemos form.propiedad
    //Todos los onChange pasan a tener la misma función
    //Usamos el atributo name como id único para  saber que input está llamando a la función handleInput. Lo sabremos con e.target.name
    //Podríamos darle un id pero como name se pone siempre en los input, pues lo usamos, funciona =.
    //Le damos un valor a cada name del input, que hacemos coincidir a propósio con el nombre de las propiedades del único estado que tengo (initialState)
    //xa que si me llaman a lastName, ya sabemos que propiedad tenemos que cambiar

    return (
        <div >
            <form className="form-group" onSubmit={submit}>
                <input name="name" value={form.name} onChange={handleInput} type="text" className="form-control mb-3" placeholder="Introduce un nombre" />
                <input name="lastName" value={form.lastName} onChange={handleInput} type="text" className="form-control mb-3" placeholder="Introduce los apellidos" />
                <input name="address" value={form.address} onChange={handleInput} type="text" className="form-control mb-3" placeholder="Introduce la dirección" />
                <input name="city" value={form.city} onChange={handleInput} type="text" className="form-control mb-3" placeholder="Introduce la provincia" />
                <input name="postalCode" value={form.postalCode} onChange={handleInput} type="text" className="form-control mb-3" placeholder="Introduce el código postal" />
                <input name="phoneNumber" value={form.phoneNumber} onChange={handleInput} type="text" className="form-control mb-3" placeholder="Introduce el número de teléfono" />
                <input type="submit" className="btn btn-success" value="Registrar" />
            </form>
        </div>
    )
}