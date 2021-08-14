import {useState}from 'react'
function AddTodo({addHandler}) {

    const[task, setTask]=useState('')

    const submisssionHandler=()=>{
        addHandler({
            id:Math.random(),
            text:task,
            isDone:false
        })
        setTask('')
    }
    return (
      <div className="AddTodo">
        <input
        type='text'
        placeholder='type here...'
        id='myInput'
        value={task}
        onChange={(e)=> setTask(e.target.value) }
        />
        <button  onClick={submisssionHandler} className='btn-add' > Add </button>
  
      </div>
    );
  }
  
  export default AddTodo;