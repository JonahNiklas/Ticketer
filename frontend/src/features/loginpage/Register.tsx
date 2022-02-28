import React, { useState } from "react";
import { Form, Button } from "react-bootstrap/";
import { register } from "../../client/authHandler";
import { RegisterRequest, RestError } from "../../types";

const RegisterUser = () => {

  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [nameErrorMessage, setNameErrorMessage] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");

  async function handleRegister (e: any) {

    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);
    setFirstNameError(false);
    setLastNameError(false);
    setPasswordError(false);

    //eslint-disable-next-line
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Ikke en gyldig epost.');
    } 

    //eslint-disable-next-line
    if (!/^[A-Z][a-z]{2,15}$/.test(firstName)) {
      setFirstNameError(true);
      setNameErrorMessage('Navn må begynne med stor bokstav og være lenger enn et tegn.');
      console.log("hei")
    } 

    if (!/^[A-Z][a-z]{2,15}$/.test(lastName)) {
      setLastNameError(true);
      setNameErrorMessage('Navn må begynne med stor bokstav og være lenger enn et tegn.');
      console.log("hei")
    } 

    if(password !== repeatPassword) {
      setPasswordError(true);
      setPasswordErrorMessage('Passordene må være like')
    }

    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      setPasswordError(true);
      setPasswordErrorMessage('Passord må inneholde stor og liten bokstav, et tall, og være lenger enn 8 tegn.')
    }

    if(emailError||firstNameError||lastNameError||passwordError){
      return;
    }


    const userRequest: RegisterRequest = {
      email,
      firstName,
      lastName,
      password
    };

    try {

      const response = await register(userRequest);
      console.log(response);


      if ((response as RestError).errorMessage) {
        const error = response as RestError;

        console.log(error.errorMessage);

        // user not found
        
        // passcheck
        
      } else {
        
        //const token = response as LoginResponse;

        //dispatch(setToken(token.token));
        //dispatch(setUserId(token.ownerId));
  
        //console.log(store.getState());  
        
        //history.push('/home');
        
      }

    } catch (error: any) {
      if(error.errorMessage==="User already exist"){
        setEmailError(true);
        setEmailErrorMessage("Emailen er allerede i bruk");
        
      }
      console.error(error);
    }
  }

  return (
    <div>
      <h3>Registrer ny bruker</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formRegisterEmail">
          <Form.Label>E-mail</Form.Label>
          {/* function (e) {} */}
          <Form.Control type="email" placeholder="E-mail" onChange={(e) => {setEmail(e.target.value)}} isInvalid={emailError}/>
          <Form.Control.Feedback type="invalid">{emailErrorMessage}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>Fornavn</Form.Label>
          <Form.Control type="name" placeholder="Fornavn" onChange={(e) => setFirstName(e.target.value)} isInvalid={firstNameError}/>
          <Form.Control.Feedback type="invalid">{nameErrorMessage}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Etternavn</Form.Label>
          <Form.Control type="name" placeholder="Etternavn" onChange={(e) => setLastName(e.target.value)} isInvalid={lastNameError}/>
          <Form.Control.Feedback type="invalid">{nameErrorMessage}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterPassword">
          <Form.Label>Passord</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} isInvalid={passwordError}/>
          <Form.Control.Feedback type="invalid">{passwordErrorMessage}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRepeatPassword">
          <Form.Label>Gjenta passord</Form.Label>
          <Form.Control type="password" placeholder="Repeat password" onChange={(e) => setRepeatPassword(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleRegister}>
          Registrer
        </Button>
      </Form>
    </div>
);
}


export default RegisterUser;
