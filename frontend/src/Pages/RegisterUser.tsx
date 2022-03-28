import Logo from '../images/ticket_logo.png';

import React from 'react';
import Register from '../features/loginpage/Register';
import { Button, Card } from 'react-bootstrap';
import Footer from '../features/homepage/Footer';
import HeaderNoSearchbar from '../features/homepage/HeaderNoSearchbar';

const RegisterUser = () => {
  return (
    <div className="aroundForm">
      <HeaderNoSearchbar />
      <Card className="form">
        <Card.Body>
          <img src={Logo} style={{ margin: 'auto', display: 'block' }} />
          <Register />
        </Card.Body>
        <Button variant="link" href="/">
          Tilbake
        </Button>
      </Card>
      <Footer />
    </div>
  );
};

export default RegisterUser;
