import React from 'react'

const Buttons = ({text, handleTagChange} )=> {
  return (
    <div className='task_form_bottom'>
      <div>
            <button type='button' className=' button_align' name='tags' onClick={()=>handleTagChange(text)}>
              {text}
            </button>
    </div>
    </div>

  )
}

export default Buttons