import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoList from "./coponents/TodoList";
import AddTodo from "./coponents/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { text: "Save the World", id: 1, isDone:false },
    { text: "Walk the Dog", id: 2, isDone:false },
  ]);

  const deleteHandler=(idt)=>{
  setTodos( todos.filter(todo=> todo.id!== idt))
  }

  const doneHandler=(idt)=>{
setTodos(
  todos.map(
    todo=> todo.id===idt ? { ...todo,isDone: !todo.isDone }:todo
  )
)
  }

  const addHandler=(newTask)=>{
    setTodos( [...todos,newTask] )
  }
  return (
    <div className='App'>
      <h1> TO DO APP !! </h1>
      <AddTodo  addHandler={addHandler} />
      <TodoList todos={todos} deleteHandler={deleteHandler} doneHandler={doneHandler}
      />
    </div>
  );
}

export default App;
