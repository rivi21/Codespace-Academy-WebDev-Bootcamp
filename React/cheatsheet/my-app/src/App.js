import './App.css';
/*import FirstComponent, { SecondComponent, ThirdComponent } from './components/FirstComponent';
import Counter from './components/Counter';

import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContextComponent'; */

import { useState, createContext } from 'react';
import Router from './Router';


/* lo creamos fuera xq tenemos que exportarlo. Si lo hacemos en un archivo
independiente habrá que importarlo*/
export const GlobalContext = createContext();//PASO -1-

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {/* {show && <UseEffectComponent />} */}{/* Condición de cortocircuito con el estado booleano show, 
      para que aparezca y/o desaparezca el componente completo al apretar el boton de show. Al volver a aperecer
      se volverá a montar y el use Effect se volverá a ejecutar.*/}
      {/* <button onClick={() => setShow(!show)}>Show</button> */}{/* al apretar el show cambia de estado  de true a false */}

      {/*  <Counter />

      <FirstComponent title="Título enviado desde el padre" date="16 Agosto de 2025" />
      <FirstComponent title="otro título" />
      <SecondComponent />
      <ThirdComponent /> */}
      {/* <GlobalContext.Provider value="Soy un string guardado en un contexto"> */}{/* PASO -3- */}
      {/* <UseContextComponent /> */}{/* paso-2- */}
      {/* </GlobalContext.Provider> */}

      <Router />

    </div>
  );
}

export default App;
