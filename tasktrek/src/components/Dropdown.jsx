import React from 'react'

const Dropdown = () => {
  return (
    <div>
        <select className='task_status'>
        <option value='todo'>To Do</option>
        <option value='doing'>Doing</option>
        <option value='done'>Done</option>
    </select>
    </div>
    
  )
}

export default Dropdown