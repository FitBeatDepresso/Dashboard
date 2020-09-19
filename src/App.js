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
import InviteFriends from "pages/InviteFriends";

const App = (props) => {

    const isAuthenticated = useSelector(authenticationStatus);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
<<<<<<< HEAD
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/circle" component={Circle}/>
          {/* <Route path="/login" render={() => isAuthenticated ? <Redirect to={'/circle'}/> : <Login/>} /> */}
=======
          <ProtectedRoute path="/welcome" component={Welcome} />
          <Route path="/login" render={() => isAuthenticated ? <Redirect to={'/circle'}/> : <Login/>} />
>>>>>>> 4047d0fbf411bbfcb66058a2c0e3d6e567295014
          <Route path="/signup" render={() => isAuthenticated ? <Redirect to={'/circle'}/> : <SignUp/>}/>
          <ProtectedRoute path="/circle" component={Circle} />
            <ProtectedRoute path="/inviteFriends" component={InviteFriends} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
