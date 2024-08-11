import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'
import Dropdown from './Dropdown'

const TaskForm = () => {

  const [taskData, setTaskData] = useState(
    {
      task : '',
      status : 'todo',
      tags :[]
    }
  )



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    
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
        <input type='text' className='task_input' name='task' placeholder='Enter your text' onChange={handleStatusChange} /><br/>
          <div className="tag">
              <Buttons text='HTML' handleTagChange={handleTagChange} />
              <Buttons text='CSS' handleTagChange={handleTagChange} />
              <Buttons text='JavaScript' handleTagChange={handleTagChange}/>
              <Buttons text='React' handleTagChange={handleTagChange}/>
          </div>
        <div>
        <Dropdown handleStatusChange={handleStatusChange} />
        </div>
          <div className='submit_button'>
          <button type='submit' className='task_submit' >Add Task +</button>
          
          </div>
      </form>
        
    </div>
  )
}

export default TaskForm