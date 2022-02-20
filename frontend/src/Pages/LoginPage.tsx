import Logo from '../images/ticket_logo.png';
import '../stylesheets/LoginPage.css';
import React, { useState } from "react";
import RegisterUser from "../features/loginpage/RegisterUser";
import Login from "../features/loginpage/Login";
import { Card, Container, Button } from "react-bootstrap";


const LoginPage = () => {

  return (
    <div>
      <Container>
          <Card className="form">
            <Card.Body>
              <img src={Logo} style={{ margin:'auto', display: 'block'}}/>
              <Login/>
            </Card.Body>
            <Button variant="link">Registrer ny bruker her</Button>
          </Card>
        </Container>
    </div>
  );
}

export default LoginPage;
