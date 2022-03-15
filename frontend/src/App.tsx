import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import RegisterUser from './Pages/RegisterUser';
import Posts from './Pages/Posts';
import Profile from './features/ProfilPage/ProfilePage';
import { ProtectedRoute } from './features/pageAuthHandler';
import UserPage from './features/userpage/UserPage';

function App() {

  
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterUser />
        </Route>
        <ProtectedRoute path="/posts">
          <Posts />
        </ProtectedRoute>
        <ProtectedRoute path="/home">
          <Homepage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/user">
          <UserPage/>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

// add authentication

export default App;
