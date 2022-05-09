import '../App.css';
/* import { useState, useEffect } from "react"; UCX */
import { useContext } from "react";
import { GlobalContext } from "../App";

import TodoList from '../components/TodoList';
import NewTodoInput from '../components/NewTodoInput';

export default function Ejercicio4() {

  const { effectE4 } = useContext(GlobalContext);
  /* const URL = 'https://jsonplaceholder.typicode.com/todos'; UCX */

  //estado inicial
  /* const [todos, setTodos] = useState([]); UCX */

  //Petición
  /* useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setTodos(data.slice(0, 20)));
  }, []); UCX */

  return (
    <div className='App'>
      <h1>Lista de to-do</h1>
      <NewTodoInput />
      <TodoList />

    </div>
  );
};
