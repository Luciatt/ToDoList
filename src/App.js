import { useState } from 'react'
import './App.css';
import { Form } from './components/Form'
import { Task } from './components/Task'



function App() {

  const [task, setTask] = useState('')
  const [list, setList] = useState([
    { task : 'Coliseo (Roma)', id:1 },
    { task : 'Torre Eiffel (París)', id:2 },
    { task : 'Petra (Jordania)',id:3 },
    { task : 'Pirámides de Giza (Egipto)',id:4 },
    { task : 'Chichen Itza (México)',id:5 },
    { task : 'Machu Pichu (Perú)',id:6 },
    { task : 'Estatua de la Libertad (NuevaYork)',id:7 },
    { task : 'Cristo Redentor (Brasil)', id:8 },
    { task : 'Taj Mahal (India)', id:9 },
    { task : 'Templos de Angkor (Camboya)',id:10 },
    { task : 'Barrera de Coral (Australia)',id:11 },
    { task : 'Gran Cañón del Colorado (EEUU)',id:12 },
    { task : 'Cataratas de Iguazú (Argentina)',id:13 },
    { task : 'Mezquita azul (Turquía)',id:14 },
    
    
  ])

  //guarda tareas//
  function handleSubmit(e) {
    e.preventDefault()
    if (task === '') {
      alert('Escribe para poder guardar')
      return
    }
    const newTask = {
      id: Date.now(),
      task: task,
      completed: false
    }
    const temp = [newTask, ...list]
    setList(temp)
    setTask('')
    console.info(list)

  }

  function handleChange(e) {
    setTask(e.target.value)
  }

  // editar tarea//
  function update(objEdit) {
    const { id, task } = objEdit

    const temp = [...list]
    const element = temp.find(item => item.id === id)
    element.task = task
    setList(temp)

  }

  // eliminar campo//
  function deleteItem(id) {
    const temp = list.filter(item => item.id !== id)
    setList(temp)

  }


  return (
    <>
      <div className="containerP">
        <div className="containerForm">
          <Form task={task} handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
        <div className="containerTask">
          <div className="containerInfo">
            {
              list.map(task => (
                <Task key={task.id} id={task.id} task={task} update={update} deleteItem={deleteItem} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
