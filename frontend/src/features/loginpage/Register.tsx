import React, { useState } from "react";
import { Form, Button } from "react-bootstrap/";

const RegisterUser = () => {

  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  function handleRegister () {
    if (password !== repeatPassword) return; 

    const userRequest: RegisterUser = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password
    };

    
  }

  return (
    <div>
      <h3>Registrer ny bruker</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formRegisterEmail">
          <Form.Label>E-mail</Form.Label>
          {/* function (e) {} */}
          <Form.Control type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>Fornavn</Form.Label>
          <Form.Control type="name" placeholder="Fornavn" onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Etternavn</Form.Label>
          <Form.Control type="name" placeholder="Etternavn" onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterPassword">
          <Form.Label>Passord</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRepeatPassword">
          <Form.Label>Gjenta passord</Form.Label>
          <Form.Control type="password" placeholder="Repeat password" onChange={(e) => setRepeatPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleRegister}>
          Registrer
        </Button>
      </Form>
    </div>
);
}


export default RegisterUser;
