import './App.css';
import { useState, useEffect } from "react";
import TodoList from './components/TodoList';
import NewTodoInput from './components/NewTodoInput';
import { API_URL } from './config/config';


function App() {

  //estado inicial
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => {
        if (json.ok) {
          setTodos(json.data)
        } else {
          alert("no se ha podidoo conectar")
        }
      });
  }, []);

  return (
    <div className='App'>
      <h1>Lista de to-do</h1>
      <NewTodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
