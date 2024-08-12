import React from 'react'
import TaskColumn from './TaskColumn'

import done from '../assets/check-mark-button.png'
import Todo from '../assets/direct-hit.png'
import inProgress from '../assets/glowing-star.png'

const Tasks = ({tasks, handleDelete}) => {
  return (
        <main className='app_main'>
        <TaskColumn taskName ='To Do' image = {Todo} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn taskName = 'In Progress' image={inProgress} tasks={tasks} status="doing" handleDelete={handleDelete} />
        <TaskColumn taskName = 'Done' image={done} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
  )
}

export default Tasks