import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'
import Dropdown from './Dropdown'

const TaskForm = () => {

  const [submit, setSubmit] = useState('')

  useEffect (()=> {
  
  },[])

  const handleSubmit = () => {
    console.log("Hello")
    setSubmit("Hello")
  }
  return (
    <div className='app_align' >
        <input type='text' className='task_input' placeholder='Enter your text' /><br/>
        <div className="tag">
            <Buttons text='HTML' />
            <Buttons text='CSS' />
            <Buttons text='JavaScript' />
            <Buttons text='React' />
        </div>
       <div>
       <Dropdown />
       </div>
        <div className='submit_button'>
        <button type='submit' className='task_submit' onClick={handleSubmit}>Add Task +</button>
        {submit}
        </div>
    </div>
  )
}

export default TaskForm