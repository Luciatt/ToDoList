import { useState } from 'react'
import './App.css';
import { Form } from './components/Form'
import { Task } from './components/Task'



function App() {

  const [task, setTask] = useState('')
  const [list, setList] = useState([
    { task : 'Comer en restaurante de comida local' },
    { task: 'Foto desde los miradores más importantes' },
    { task : 'Visita un museo' },
    { task : 'FreeTour' },
    
    
  ])

  //guarda campo escrito//
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

  // editar campo//
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
          <h2></h2>
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
