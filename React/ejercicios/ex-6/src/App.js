import { useState, useEffect, createContext } from "react";
import Router from './Router'
import './App.css';

export const GlobalContext = createContext({});

function App() {

  //ejercicio3
  const initialContactState = [
    { name: "Luis", lastName: "Muñoz", address: "Calle Picasso, nº41, 3ºD", city: "Madrid", postalCode: 28067, phoneNumber: 987541255 },
    { name: "Ana", lastName: "Paredes", address: "Plaza Pintor Sorolla, nº2, 1ºA", city: "Málaga", postalCode: 21740, phoneNumber: 626543876 },
    { name: "Carmen", lastName: "Gómez", address: "Pasaje Dr Serra, nº7, 4ºB", city: "Córdoba", postalCode: 14420, phoneNumber: 963499670 }
  ];

  const [contacts, setContacts] = useState(initialContactState);

  //ejercicio4
  const URL = 'https://jsonplaceholder.typicode.com/todos';

  const [todos, setTodos] = useState([]);

  const effectE4 = useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setTodos(data.slice(0, 20)));
  }, []);

  return (
    <div className>
      <GlobalContext.Provider value={{ contacts, setContacts, todos, setTodos, effectE4 }}>
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
