import React from "react";
import { Form, Button } from "react-bootstrap/";

const Login = () => {
    return (
      <div>
          <h3>Logg Inn</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formLoginEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLoginPassword">
              <Form.Label>Passord</Form.Label>
              <Form.Control type="password" placeholder="Passord" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Logg inn
            </Button>
          </Form>
      </div>
    );
}

export default Login;
