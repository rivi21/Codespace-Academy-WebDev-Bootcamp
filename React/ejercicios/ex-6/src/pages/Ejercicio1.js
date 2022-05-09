import '../App.css';
import Card from '../components/Card';


export default function Ejercicio1() {
  return (
    <div className="App">
      <Card
        img="https://images.pexels.com/photos/10153219/pexels-photo-10153219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        title="Soy el Título"
        description="Esta es la descripción de la Card"
        buttonLink="https://google.com"
        buttonText="Más información"
      />
    </div>
  );
};

