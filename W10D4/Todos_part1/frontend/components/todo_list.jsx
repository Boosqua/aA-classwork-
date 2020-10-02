import React from "react";
import allTodos from "../reducers/selectors";
const todoList = (props) => {
   allTodos(props.getState()).Map( (todo) => {
      <div key = {todo[key]}>
         
      </div>
   })
}