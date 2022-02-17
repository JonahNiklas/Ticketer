import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import Posts from './Pages/Posts';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login"><LoginPage/></Route>
        <Route path="/posts"><Posts/></Route>
        <Route path="/home"><Homepage/></Route>
        <Route path="/">{/* Check if logged in to redirect goes here */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
