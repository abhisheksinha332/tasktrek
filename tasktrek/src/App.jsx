import { useState } from "react"
import Tasks from "./components/Tasks"

import "./App.css"
import TaskForm from "./components/TaskForm"




function App() {

  const [tasks, setTasks] = useState([])

  const handleDelete = (taskIndex)  => {
    const newTask = tasks.filter((task, index)=>index !== taskIndex)
    setTasks(newTask)
  }

  console.log(tasks);
  
  return (
    <div className='app'>
        <TaskForm setTasks={setTasks}/>
        <hr/>
        <Tasks tasks={tasks} handleDelete={handleDelete}/>
      </div>

  )
}

export default App
