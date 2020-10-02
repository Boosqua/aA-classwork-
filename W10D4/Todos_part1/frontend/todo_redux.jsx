import React from "react"
import ReactDom from "react-dom"

import Root from "./components/root.jsx"
import configureStore from "./store/store.js"
import {  receiveTodo, receiveTodos  } from "./actions/todo_actions"
import allTodos from "./reducers/selectors"

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");
    ReactDom.render(<Root store={store} />, root);
    // test
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;
    //test
})