import React from 'react'
import Buttons from './Buttons'
import DeleteIcon from '../assets/delete.png'

const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>

        <div className='task_Card_bottom_line'>
            <div className='task_card_tags'>
              { tags.map((tag, index)=><Buttons key={index} text={tag} selected={true}/> )}
            </div>
                
            <div className='task_card_delete' onClick={()=>handleDelete(index)}>
                <img src={DeleteIcon} alt='' className='task_card_delete_icon'/>
            </div>
        </div>
    </article>
  )
}

export default TaskCard