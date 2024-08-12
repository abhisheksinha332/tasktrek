import React from 'react'

const Buttons = ({text, handleTagChange, selected} )=> {
  
  const TagStyle = {
    HTML : { backgroundColor : "#fda821"},
    CSS : { backgroundColor : "#15d4c8"},
    JavaScript : { backgroundColor : "#ffd12c"},
    React : { backgroundColor : "#4cdafc"},
    default : { backgroundColor : "#f9f9f9"}
  }

  const buttonStyle = selected ? TagStyle[text] : TagStyle.default;
  
  return (
    <div className='task_form_bottom'>
      <div>
            <button type='button' style={buttonStyle}
             className=' button_align' name='tags' onClick={()=>handleTagChange(text)}>
              {text}
            </button>
    </div>
    </div>

  )
}

export default Buttons