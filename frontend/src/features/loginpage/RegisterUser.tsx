import React from "react";
/*import "./App.css";*/ /* Denne var ikke importert riktig. */
import { Form, Button } from "react-bootstrap/";

class RegisterUser extends React.Component {
  render() {
    return (
        <div className="registerForm" style={{ padding: "8% 30%" }}>
          <h3>Registrer ny bruker</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>Fornavn</Form.Label>
              <Form.Control type="name" placeholder="Fornavn" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Etternavn</Form.Label>
              <Form.Control type="name" placeholder="Etternavn" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Passord</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRepeatPassword">
              <Form.Label>Gjenta passord</Form.Label>
              <Form.Control type="password" placeholder="Repeat password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrer
            </Button>
          </Form>
        </div>
    );
  }
}

export default RegisterUser;
