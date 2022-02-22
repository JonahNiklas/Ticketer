import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import RegisterUser from './Pages/RegisterUser'
import Posts from './Pages/Posts';
import Profile from './features/ProfilPage/ProfilePage';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login"><LoginPage/></Route>
        <Route path="/register"><RegisterUser/></Route>
        <Route path="/posts"><Posts/></Route>
        <Route path="/home"><Homepage/></Route>
        <Route path="/profile"><Profile/></Route>
      </Switch>
    </Router>
  );
}

export default App;
