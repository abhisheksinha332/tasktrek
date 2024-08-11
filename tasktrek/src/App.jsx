import Tasks from "./components/Tasks"

import "./App.css"
import TaskForm from "./components/TaskForm"



function App() {

  return (
    <div className='app'>
        <TaskForm />
        <hr/>
        <Tasks />
      </div>

  )
}

export default App
