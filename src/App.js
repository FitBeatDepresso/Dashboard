import React from 'react';
import {authenticationStatus} from "./slices/accessSlice";
import {useSelector} from "react-redux";
import classes from './App.css';

import { BrowserRouter, Switch, Route, NavLink, Link, Redirect } from "react-router-dom";

import ProtectedRoute from 'components/ProtectedRoute';

// Pages
import Landing from 'pages/Landing/Landing';
import Welcome from 'pages/Welcome/Welcome';
import Circle from 'pages/Circle/Circle';
import Login from 'pages/Login/Login';
import SignUp from 'pages/Login/SignUp';

const App = (props) => {

    const isAuthenticated = useSelector(authenticationStatus);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/circle" component={Circle}/>
          {/* <Route path="/login" render={() => isAuthenticated ? <Redirect to={'/circle'}/> : <Login/>} /> */}
          <Route path="/signup" render={() => isAuthenticated ? <Redirect to={'/circle'}/> : <SignUp/>}/>
          <ProtectedRoute path="/circle" component={Circle} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
