import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'
import Dropdown from './Dropdown'

const TaskForm = ({setTasks}) => {

  const [taskData, setTaskData] = useState(
    {
      task : '',
      status : 'todo',
      tags :[]
    }
  )

  const checkTag = (tag) => {
    return taskData.tags.some(item=> item==tag)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks(prev=> {
      return [...prev, taskData]
    })

    setTaskData(
      {
        task : '',
        status : 'todo',
        tags :[]
      }
    )
  }

  const handleStatusChange = (e) => {
    const {name, value} = e.target
    setTaskData((prev)=> {
      return {...prev, [name]: value}
    })
    
  }

  const handleTagChange = (tag) => {
    console.log(tag)

    if(taskData.tags.some(item=> item===tag)){
      const filterTags = taskData.tags.filter(item=> item !== tag)
      setTaskData(prev=>{
        return {...prev, tags:filterTags}
      })
    }
    else{
      setTaskData(prev=> {
        return {...prev, tags: [...prev.tags, tag]}
      })
    }

    console.log(taskData.tags)

  }

  return (
    <div className='app_align' >
      <form onSubmit={handleSubmit} >
        <input type='text' className='task_input' value={taskData.task} name='task' placeholder='Enter your text' onChange={handleStatusChange} /><br/>
          <div className="tag">
              <Buttons text='HTML' handleTagChange={handleTagChange} selected={checkTag("HTML")} />
              <Buttons text='CSS' handleTagChange={handleTagChange} selected={checkTag("CSS")}/>
              <Buttons text='JavaScript' handleTagChange={handleTagChange} selected={checkTag("JavaScript")}/>
              <Buttons text='React' handleTagChange={handleTagChange} selected={checkTag("React")}/>
          </div>
        <div>
        <Dropdown handleStatusChange={handleStatusChange} value={taskData.status} />
        </div>
          <div className='submit_button'>
          <button type='submit' className='task_submit' >Add Task +</button>
          
          </div>
      </form>
        
    </div>
  )
}

export default TaskForm