import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
/* test */
import {
  login,
  logout,
  signup
} from "./util/session_api_util"


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  let store = configureStore();


  /* Test */
  window.signup = signup;
  window.logout = logout;
  window.login = login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
