import React from 'react'
import TaskColumn from './TaskColumn'

import done from '../assets/check-mark-button.png'
import Todo from '../assets/direct-hit.png'
import inProgress from '../assets/glowing-star.png'

const Tasks = () => {
  return (
        <main className='app_main'>
        <TaskColumn taskName ='To Do' image = {Todo} />
        <TaskColumn taskName = 'In Progress' image={inProgress} />
        <TaskColumn taskName = 'Done' image={done} />
      </main>
  )
}

export default Tasks