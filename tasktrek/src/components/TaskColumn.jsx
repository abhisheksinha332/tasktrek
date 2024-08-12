import React from 'react'
import TaskCard from './TaskCard'

const TaskColumn = ({taskName, image, tasks, status, handleDelete}) => {
    
  return (
    <section className='task_column' >
        <h2 className='task_column_heading'>
            <img src = {image} alt='' className='task_column_icon'/>
            {taskName} 
        </h2>
        {/* <TaskCard /> */}

        {
        tasks.map((task,index)=> task.status=== status && 
            <TaskCard key={index}  
                title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}
        />)
        }
        </section>
  )
}

export default TaskColumn