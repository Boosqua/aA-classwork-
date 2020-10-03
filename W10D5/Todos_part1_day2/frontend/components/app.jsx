import React from "react";
// import todoList from "./todos/todo_list"
import TodoListContainer from "./todos/todo_list_container"

const app = (props) => {
   // let todos = todoList(props)
   return (
      <>
         <h1>Todo List Hacker 100% productivity increase click here to find out more!!</h1> 
         <TodoListContainer /> 
      </>
   )
}

export default app;