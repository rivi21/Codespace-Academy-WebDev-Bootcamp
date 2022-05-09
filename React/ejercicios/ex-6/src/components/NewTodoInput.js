import { useState, useContext } from "react";
import { GlobalContext } from "../App";

export default function NewTodoInput() {

    const { setTodos } = useContext(GlobalContext);

    const [newTodo, setnewTodo] = useState("");

    const handleSubmit = (e => {
        e.preventDefault();

        setTodos(currentTodos => [{ title: newTodo, completed: false, }, ...currentTodos])

        setnewTodo("");

    })

    return (
        <form onSubmit={handleSubmit} className="my-4 mx-4">
            <input onChange={e => setnewTodo(e.target.value)} value={newTodo} type="text"
                placeholder="Introduce un nuevo To-do" className="form-control"></input>
        </form>

    )
}
