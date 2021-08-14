function Todo({task,deleteHandler, doneHandler}) {


const deleteTodo=()=>{
    deleteHandler(task.id)
}


const doneTodo=()=>{
    doneHandler(task.id)
}



    return (
      <div className="todo-container">
        <h5 style={  task.isDone? {textDecoration:'line-through'}:{}  }   > {task.text}</h5>
        <div>
            <button onClick={doneTodo}  >Done</button>
            <button onClick={deleteTodo} >Del</button>
        </div>
  
      </div>
    );
  }
  
  export default Todo;