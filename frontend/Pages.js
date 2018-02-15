import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute } from './utils/routing';
import { ErrorBoundary, Page } from './utils/elements';
import AuthHeader from './pages/headers/AuthHeader';
import Nav from './pages/headers/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';

const mapStateToProps = ({ session }) => ({ currentUser: session.currentUser });

const pageStyle = { display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center',
                    fontSize: 50, backgroundColor: 'whitesmoke', 
                    height: window.innerHeight };

const Pages = ({ currentUser }) => [
  currentUser ? null :
  <ErrorBoundary key='AuthHeader'>
    <AuthHeader />
  </ErrorBoundary>,

  <ErrorBoundary key='Nav'>
    <Nav currentUser={currentUser}/>
  </ErrorBoundary>,

  <ErrorBoundary key='Page'>
    <Page style={pageStyle}>
      <Switch>
        <AuthRoute exact path='/' component={Home}/>
        <Route exact path='/users/:id' component={Profile}/>
      </Switch>
    </Page>
  </ErrorBoundary>
];

export default withRouter(connect(mapStateToProps)(Pages));
