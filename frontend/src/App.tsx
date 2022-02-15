import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          {/* Login page goes here */}
        </Route>
        <Route path='/posts'>
          {/* Posts page goes here */}
        </Route>
        <Route path='/home'>
          {/* Home page goes here */}
        </Route>
        <Route path='/'>
          {/* Check if logged in to redirect goes here */}
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
