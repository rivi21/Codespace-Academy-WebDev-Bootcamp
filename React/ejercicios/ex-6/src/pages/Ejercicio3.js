import '../App.css';
import ContactList from '../components/ContactList';
import NewContactForm from '../components/NewContactForm';


export default function Ejercicio3() {

  return (
    <div className="container">{/* eliminamos la clase App xq ya viene con estilos */}
      <h1 className="my-4">Lista de Contactos</h1>
      <ContactList />
      <h1 className=" my-4">Nuevo Contacto</h1>
      <NewContactForm />

    </div>
  );
};
