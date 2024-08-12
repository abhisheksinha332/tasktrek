import { useState, useEffect } from "react"
import Tasks from "./components/Tasks"

import "./App.css"
import TaskForm from "./components/TaskForm"


const oldTask = localStorage.getItem("tasks")
console.log(oldTask);


function App() {

  const [tasks, setTasks] = useState(JSON.parse(oldTask) || [])

  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

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
