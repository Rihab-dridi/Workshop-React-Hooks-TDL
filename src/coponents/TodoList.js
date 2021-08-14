import Todo from './Todo'
function TodoList({todos,deleteHandler, doneHandler}) {


    return (
      <div className="todoList-container">
        
        {
            todos.map(task=> <Todo task ={task}   deleteHandler={deleteHandler}  doneHandler={doneHandler} />)
        }
  
      </div>
    );
  }
  
  export default TodoList;