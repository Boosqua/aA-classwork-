import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import AuthRoute from '../util/route_util'
import SearchContainer from './benches/search_container';


const App = () => (
   <div>
      <GreetingContainer />

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <br/>
      <Route exact path="/" component={SearchContainer} />
   </div>
)

export default App;