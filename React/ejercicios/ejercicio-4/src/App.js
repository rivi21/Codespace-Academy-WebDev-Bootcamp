import './App.css';
import { useState, useEffect } from "react";
import TodoList from './components/TodoList';
import NewTodoInput from './components/NewTodoInput';


function App() {
  const URL = 'https://jsonplaceholder.typicode.com/todos';

  //estado inicial
  const [todos, setTodos] = useState([]);

  //Petición
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setTodos(data.slice(0, 20)));
  }, [])

  return (
    <div className='App'>
      <h1>Lista de to-do</h1>
      <NewTodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
