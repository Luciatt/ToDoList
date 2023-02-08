import { useState } from "react";


export function Task(props) {
    const { task, update, deleteItem } = props

    const [edit, setEdit] = useState(false)
    const [completed, setCompleted] = useState(false)

    function EditOn() {
        const [valor, setValor] = useState(task.task)


        function handleChange(e) {
            const text = e.target.value
            setValor(text)
        }


        function handleClick(e) {
            e.preventDefault()
            update(
                {
                    id: task.id,
                    task: valor,
                    completed: false
                }
            )
            setEdit(false)
        }
        return (
            <>
                <input type="text" value={valor} onChange={handleChange} />
                <button className="btn" onClick={handleClick} >Guardar</button>
                <button className="btn" onClick={() => deleteItem(task.id)}>Eliminar</button>
            </>
        );
    }

    function EditOff() {
        return (
            <>
                <span className={completed ? "todoTask spanSubray" : "todoTask"} onClick={() => setCompleted(!completed)}>{task.task}</span>
                <button className="btn btnEdit" onClick={() => setEdit(true)}>Actualizar</button>
                <button className="btn btnDelete" onClick={() => deleteItem(task.id)}>Eliminar</button>
            </>
        );
    }


    return (
        <>
            <div className="containerTask" id={task.id}>
                {
                    edit
                        ? <EditOn />
                        : <EditOff />
                }
            </div>
        </>
    );
}
