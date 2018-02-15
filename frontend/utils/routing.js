import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

// Authentication
const Auth = ({ currentUser, path, component: Component }) => <Route path={path}
  render={props => currentUser ?
    <Redirect to={`/users/${currentUser.id}`}/> : <Component {...props}/>
  }/>;

const Protected = ({ currentUser, path, component: Component }) => <Route path={path}
  render={props => currentUser ?
    <Component {...props}/> : <Redirect to='/'/>
  }/>;

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
