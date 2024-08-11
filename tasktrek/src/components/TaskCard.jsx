import React from 'react'
import Buttons from './Buttons'
import DeleteIcon from '../assets/delete.png'

const TaskCard = () => {
  return (
    <article className='task_card'>
        <p className='task_text'>This is sample Text</p>

        <div className='task_Card_bottom_line'>
            <div className='task_card_tags'>
                <Buttons text='HTML'/>
                <Buttons text='CSS'/>
            </div>
                
            <div className='task_card_delete'>
                <img src={DeleteIcon} alt='' className='task_card_delete_icon'/>
            </div>
        </div>
    </article>
  )
}

export default TaskCard