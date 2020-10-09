import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
   <Route
   path={path}
   exact={exact}
   render={ props =>
      !loggedIn ?  <Component {...props} /> : <Redirect to="/" />
   }
   />
);

const mapStateToProps = state => {
   return { loggedIn: Boolean(state.session.currentUserId) };
};

const AuthRoute = withRouter(
   connect(
      mapStateToProps,
      null
   )(Auth)
);

export default AuthRoute;