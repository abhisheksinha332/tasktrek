import React from 'react'
import TaskCard from './TaskCard'

const TaskColumn = ({taskName, image}) => {
    
  return (
    <section className='task_column' >
        <h2 className='task_column_heading'>
            <img src = {image} alt='' className='task_column_icon'/>
            {taskName} 
        </h2>
        <TaskCard />
        </section>
  )
}

export default TaskColumn