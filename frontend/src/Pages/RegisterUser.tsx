import Logo from '../images/ticket_logo.png';

import React from "react";
import Register from "../features/loginpage/Register";
import { Card, Container } from "react-bootstrap";


const RegisterUser = () => {

  return (
    <div>
      <Container>
          <Card className="form">
            <Card.Body>
              <img src={Logo} style={{ margin:'auto', display: 'block'}}/>
              <Register/>
            </Card.Body>
          </Card>
        </Container>
    </div>
  );
}

export default RegisterUser;
