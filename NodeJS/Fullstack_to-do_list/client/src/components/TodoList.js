import "./TodoList.css";

export default function TodoList({ todos, setTodos }) {

    const deleteTodo = _id => {

        const options = { method: "DELETE" };

        fetch(`http://localhost:1212/toDo/:${todo._id}`, options)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    setTodos(todos.filter(todo => todo.title !== title));
                } else {
                    alert("no se ha podido borrar la tarea");
                }

            })
    };

    const toggleCompleted = (e, index, todo) => {
        if (e.target.tagName !== 'BUTTON') {
            //copia del estado original para poder manipularlo
            const newTodos = [...todos];
            //toggle a la propiedad a true o a false
            newTodos[index].completed = !newTodos[index].completed;

            /*  fetch(`http://localhost:1212/toDo/:${todo._id}`, {
                 method: 'PUT',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify(todos[index]),
 
             })
                 .then(response => response.json())
                 .then(data => setNewTodos(data)); */ //Actualizo el valor del estado          
        }
    };

    return (
        <ul className="list-group ">
            {todos.map((todo, index) => {
                const { title, completed, _id } = todo
                //Si todo.completed es true añade la clase completed
                const className = todo.completed ? "completed" : "";
                return (
                    <li className={`d-flex justify-content-between list-group-item ${className}`}
                        key={todo._id}
                        onClick={e => toggleCompleted(e, index)} >

                        <span>{index} - {todo.title}</span>
                        {/* ponemos _id como algo único para identificarlo */}
                        <button onClick={() => deleteTodo(_id)} type="button" className="btn btn-danger">X</button>
                    </li>
                );
            })}
        </ul>
    )
}
