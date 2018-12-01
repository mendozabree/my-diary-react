import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import LandingPage from '../landingPage/LandingPage';
import NotFound from '../notFound/NotFound';
import Register from '../register/Register';
import Login from '../login/Login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact component={NotFound} />
  </Switch>
);

export default Routes;
