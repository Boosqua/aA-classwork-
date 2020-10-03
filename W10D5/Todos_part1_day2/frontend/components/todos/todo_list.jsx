import React from "react";
import allTodos from "../../reducers/selectors";
import TodoListItem from "./todo_list_item"
import TodoForm from "./todo_list_form";

const TodoList = (props) => {
   // debugger
   const todos = props.todos.map((todo, idx) => {
      return <TodoListItem key={idx} todo={ todo } />
      
   })
   return (
      <>
         <h3>Todo List goes here!</h3>
         <ul>
            {todos}
         </ul>
         <br/>
         <TodoForm receiveTodo={props.receiveTodo}/>
      </>
   )
   // return allTodos(props.getState()).Map( (todo) => {
   //    return (<ul id={todo[id]}>
   //             <li>{todo.title}</li>
   //             <li>{todo.body}</li>
   //             <li>{todo.done}</li>
   //          </ul>)
   // })
}
export default TodoList;
// export default () => <h3>Todo List goes here!</h3>