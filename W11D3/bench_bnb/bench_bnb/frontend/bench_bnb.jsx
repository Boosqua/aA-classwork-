import React from "react";
import ReactDOM from "react-dom";
/* test */
import {
  login,
  logout,
  signup
} from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);



  /* Test */
  window.signup = signup
  window.logout = logout
  window.login = login
});
