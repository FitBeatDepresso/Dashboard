import React from 'react';
import classes from './App.css';

import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";

// Pages 
import Landing from './pages/Landing/Landing'; 
import Welcome from './pages/Welcome/Welcome'; 
import Circle from './pages/Circle/Circle'; 
import Login from './pages/Login/Login'; 
import SignUp from './pages/Login/SignUp';

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch> 
          <Route path="/" exact component={Landing} /> 
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/circle" component={Circle} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
