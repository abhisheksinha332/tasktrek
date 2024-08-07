import React, { useState, useEffect} from 'react'

const CreateTodo = () => {


    const[count, setCount] = useState(0)
    const[textValue, setTextValue]  = useState('')
  
    const tasks = ["Task 1", "Task 2", "Task 3"]
  
    const handleClick = ()=> {
        
        setCount(count+1)
    }

    const handleChange = (e)=> {
        console.log(e.target.value)
        let text = e.target.value
        setTextValue(text)
    }

    const handleSubmit = () => {
        handleChange()
    }
  return (
    <>
        <p>{count}</p>
        <input type='text' onChange={handleChange} />
        <button type = 'submit' onSubmit={handleSubmit}>Submit</button>
        <h1>{textValue}</h1>
        <button value="Add Task" onClick={handleClick} >Button</button>
        <ul>
        {tasks.map((task)=>{
                return(<li key={task}>{task}</li>)
            })}
        </ul>
        
    </>
  )
}

export default CreateTodo