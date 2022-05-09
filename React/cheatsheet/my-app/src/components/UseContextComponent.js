import { useContext } from 'react';
import { GlobalContext } from '../App';//importamos el hook y el context

export default function useContextComponent() {

    const msg = useContext(GlobalContext);//dentro del hook pasamos nuestro contexto

    return <h2>msg: {msg}</h2>;
};
