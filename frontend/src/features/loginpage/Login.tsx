import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap/";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="loginForm" style={{ padding: "8% 30%" }}>
          <h3>Logg Inn</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Skriv inn e-mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Passord</Form.Label>
              <Form.Control type="password" placeholder="Skriv inn passord" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Logg inn
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
