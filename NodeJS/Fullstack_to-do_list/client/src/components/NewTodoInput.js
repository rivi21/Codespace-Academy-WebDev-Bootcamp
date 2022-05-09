import { useState } from "react";
import { API_URL } from "../config/config";

export default function NewTodoInput({ setTodos }) {

    const [newTodo, setnewTodo] = useState("");

    const handleSubmit = (e => {
        e.preventDefault();    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: newTodo }),
        }
        fetch(API_URL, options)
            .then(response => response.json())
            .then(data =>{
                if(data.ok){
                    setTodos(currentTodos => [...currentTodos, { title: newTodo, completed: false, active: true } ])
                    setnewTodo("");
                }else{
                    alert("no se ha podido crear la tarea");
                }
            } );
        

    })

    return (
        <form onSubmit={handleSubmit} className="my-4 mx-4">
            <input
                onChange={e => setnewTodo(e.target.value)}
                value={newTodo} type="text"
                placeholder="Introduce un nuevo To-do"
                className="form-control">
            </input>
        </form>

    )
}
