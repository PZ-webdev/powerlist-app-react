import React, {useState} from "react"
import {GiHornedHelm} from 'react-icons/gi' 
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai' 

function App() {

const [tasks, setTasks] = useState([])
const [input, setInput] = useState([''])

// Add tasks
const handleSubmit = (e) => {
  e.preventDefault()
  const addTask = {
    id: Math.floor(Math.random() * 1000),
    text: input,
    completed: false
  }

  setTasks([...tasks, addTask])
  setInput('')
}

// Delete tasks
const deleteTask = (id) => {
  let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id)
  setTasks(filteredTasks)
}

// Toggle completed task
const toggleComplete = (id) => {
  setTasks(
    tasks.map(task => (
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  )
}

const date = new Date()
const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]



  return (
    <div className="app">
      <div className="container">
        <h1><GiHornedHelm /> PowerList</h1>
    
    <div className="date">
      <p>{days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}r.</p>
    </div>

      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <AiOutlinePlus className="icon"/>
          <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="form-group" 
          type="text" 
          placeholder="Enter a task"/>
        </div>
      </form>

      <div>
        {tasks.map(task => (
          <div className={`task-row ${task.completed ? 'completed' : ''}`} key={task.id} onDoubleClick={() => toggleComplete(task.id)}>
            <p>{task.text}</p>
            <AiOutlineClose onClick={() => deleteTask(task.id)} className="icon"/>
          </div>
        ))}
      </div>
          <p className="length">{(tasks < 1 ? "You have no tasks" : `Tasks: ${tasks.length}`)}</p>
      </div>
    </div>
  );
}

export default App;
