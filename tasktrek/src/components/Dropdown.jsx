import React from 'react'

const Dropdown = ({handleStatusChange, value}) => {

  return (
    <div>
        <select className='task_status' name='status' value = {value} onChange={handleStatusChange}>
        <option value='todo'>To Do</option>
        <option value='doing'>Doing</option>
        <option value='done'>Done</option>
    </select>
    </div>
    
  )
}

export default Dropdown