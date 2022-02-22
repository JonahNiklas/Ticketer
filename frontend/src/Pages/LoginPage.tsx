import Logo from '../images/ticket_logo.png';
import '../stylesheets/LoginPage.css';
import React, { useState } from "react";
import Login from "../features/loginpage/Login";
import { Card, Container, Button } from "react-bootstrap";


const LoginPage = () => {

  return (
    <div className="loginForm">
      <Container>
          <Card className="form">
            <Card.Body>
              <img src={Logo} style={{ margin:'auto', display: 'block'}}/>
              <Login/>
            </Card.Body>
            <Button variant="link" href="/register">Registrer ny bruker her</Button>
          </Card>
        </Container>
    </div>
  );
}

export default LoginPage;
