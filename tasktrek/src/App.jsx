import Header from "./components/Header"
import Tasks from "./components/Tasks"

import "./App.css"
import TaskForm from "./components/TaskForm"



function App() {

  return (
    <div className='app'>
        <TaskForm />
        <Tasks />
      </div>

  )
}

export default App
