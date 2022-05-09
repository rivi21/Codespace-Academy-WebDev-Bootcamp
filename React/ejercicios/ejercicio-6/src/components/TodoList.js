import "./TodoList.css";

export default function TodoList({ todos, setTodos }) {

    const deleteTodo = title => setTodos(todos.filter(todo => todo.title !== title));

    const toggleCompleted = (e, index) => {
        if (e.target.tagName !== 'BUTTON') {
            //copia del estado original para poder manipularlo
            const newTodos = [...todos];
            //toggle a la propiedad a true o a false
            newTodos[index].completed = !newTodos[index].completed;
            //Actualizo el valor del estado
            setTodos(newTodos);
        }
    };

    return (
        <ul className="list-group  py-5 ">
            {todos.map((todo, index) => {
                //Si todo.completed es true añade la clase completed
                const className = todo.completed ? "completed" : "";
                return (
                    <li className={`d-flex justify-content-between list-group-item ${className}`} key={todo.id} onClick={e => toggleCompleted(e, index)} >
                        <span>{index} - {todo.title}</span>
                        {/* ponemos todo.title como algo único para identificarlo */}
                        <button onClick={() => deleteTodo(todo.title)} type="button" className="btn btn-danger">X</button>
                    </li>
                );
            })}
        </ul>
    )
}
