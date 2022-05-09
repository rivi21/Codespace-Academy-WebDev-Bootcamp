import { useContext } from "react";
import { GlobalContext } from "../App";

export default function ContactList() {

    const { contacts, setContacts } = useContext(GlobalContext);

    const deleteContact = phoneNumber => {//Haciendo esto ganamos poder pasarle un argumento
        //aquí ya, ponemos la lógica
        return e => setContacts(contacts.filter(contact => contact.phoneNumber !== phoneNumber))
    }

    return (
        <div className="row">{/* "row es una clase bootstrap para comportamiento flex" */}
            {contacts.map((contact, index) => {
                return (
                    <ul key={contact.phoneNumber} className="list-group mb-3 col-6">
                        <li className="list-group-item active">Contacto {index + 1}</li>
                        <li className="list-group-item">{contact.name}</li>
                        <li className="list-group-item">{contact.lastName}</li>
                        <li className="list-group-item">{contact.address}, {contact.postalCode}, {contact.city}</li>
                        <li className="list-group-item">{contact.phoneNumber}</li>
                        <li className="list-group-item">
                            <button onClick={deleteContact(contact.phoneNumber)} type="button" className="btn btn-warning">Eliminar</button>
                        </li>
                    </ul>
                );
            })
            }
        </div>
    )
}
