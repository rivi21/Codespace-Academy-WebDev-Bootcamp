
import { useState } from 'react';
import ContactList from '../components/ContactList';
import Form from '../components/Form';


export default function Ejercicio3() {

  const initialContactState = [
    { name: "Luis", lastName: "Muñoz", address: "Calle Picasso, nº41, 3ºD", city: "Madrid", postalCode: 28067, phoneNumber: 987541255 },
    { name: "Ana", lastName: "Paredes", address: "Plaza Pintor Sorolla, nº2, 1ºA", city: "Málaga", postalCode: 21740, phoneNumber: 626543876 },
    { name: "Carmen", lastName: "Gómez", address: "Pasaje Dr Serra, nº7, 4ºB", city: "Córdoba", postalCode: 14420, phoneNumber: 963499670 }
  ]

  const [contacts, setContacts] = useState(initialContactState)
  //La variable contact del estado SOLO se puede tocar, cambiar, modificar mediante la función setContacts, NUNCA desde fuera

  return (
    <div className="container">{/* eliminamos la clase App xq ya viene con estilos */}
      <h1 className="py-4">Lista de Contactos</h1>
      <ContactList contacts={contacts} setContacts={setContacts} />

      <h1 className=" py-4">Nuevo Contacto</h1>
      {/* Como setContacts está en App se la pasamos al formulario por props porque
      queremos añadir un nuevo usuario al array desde el formulario */}
      <Form setContacts={setContacts} />

    </div>
  );
};
