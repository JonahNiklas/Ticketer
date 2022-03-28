import React, { useState, useRef } from 'react';
import { Alert, Form, Button } from 'react-bootstrap/';
import { useHistory } from 'react-router-dom';
import { register } from '../../client/authHandler';
import { RegisterRequest, RestError } from '../../types';

const RegisterUser = () => {
  const history = useHistory();
  const successRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailSuccess, setEmailSuccess] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [firstNameSuccess, setFirstNameSuccess] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [lastNameSuccess, setLastNameSuccess] = useState<boolean>(false);
  const [nameErrorMessage, setNameErrorMessage] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordSuccess, setPasswordSuccess] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  const [repeatPasswordSuccess, setRepeatPasswordSuccess] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const emailCheck = (email: string): boolean => {
    if (!/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return false;
    }
    return true;
  };

  const nameCheck = (name: string): boolean => {
    if (!/^[A-Z][a-z]{2,15}$/.test(name)) {
      return false;
    }
    return true;
  };

  const passwordCheck = (password: string): boolean => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password)) {
      return false;
    }
    return true;
  };

  const repeatPasswordCheck = (repeatPassword: string) => {
    if (repeatPassword !== password) {
      return false;
    }
    return true;
  };

  const actuallyHandleRegister = async (): Promise<void> => {
    const userRequest: RegisterRequest = {
      email,
      firstName,
      lastName,
      password
    };

    try {
      const response = await register(userRequest);

      if (!(response as RestError).errorMessage) {
        setSuccess(true);
        successRef.current?.scrollIntoView();
        setTimeout(() => {
          history.push('/login');
        }, 3000);
      }
    } catch (error: any) {
      if (error.errorMessage === 'User already exists') {
        setEmailError(true);
        setEmailErrorMessage('Emailen er allerede i bruk');
      }
    }
  }

  async function handleRegister(e: any) {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);
    setFirstNameError(false);
    setLastNameError(false);
    setPasswordError(false);
    setEmailError(false);
    setEmailErrorMessage("");

    let error = false;

    //eslint-disable-next-line
    if (!emailCheck(email)) {
      setEmailError(true);
      setEmailErrorMessage('Ikke en gyldig epost.');
      error = true;
    } else setEmailSuccess(true);

    //eslint-disable-next-line
    if (!nameCheck(firstName)) {
      setFirstNameError(true);
      setNameErrorMessage(
        'Navn må begynne med stor bokstav og være lenger enn et tegn.'
      );
      error = true;
    } else setFirstNameSuccess(true);

    if (!nameCheck(lastName)) {
      setLastNameError(true);
      setNameErrorMessage(
        'Navn må begynne med stor bokstav og være lenger enn et tegn.'
      );
      error = true;
    } else setLastNameSuccess(true);
    
    if (!passwordCheck(password)) {
      setPasswordError(true);
      setPasswordErrorMessage(
        'Passord må inneholde stor og liten bokstav, et tall, en spesialkarakter, og være lenger enn 8 tegn.'
      );
      error = true;
    } else setPasswordSuccess(true);

    if (!repeatPasswordCheck(repeatPassword)) {
      setPasswordError(true);
      setPasswordErrorMessage('Passordene må være like');
      setRepeatPasswordSuccess(false);
      error = true;
    } else setRepeatPasswordSuccess(true);

    if (error) return;
    else actuallyHandleRegister();
  }

  return (
    <div>
      <h3>Registrer ny bruker</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formRegisterEmail">
          <Form.Label>E-mail</Form.Label>
          {/* function (e) {} */}
          <Form.Control
            type="email"
            placeholder="E-mail"
            onChange={(e) => {setEmail(e.target.value);}}
            isInvalid={emailError}
            isValid={emailSuccess}
          />
          <Form.Control.Feedback type="invalid">
            {emailErrorMessage}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>Fornavn</Form.Label>
          <Form.Control
            type="name"
            placeholder="Fornavn"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            isInvalid={firstNameError}
            isValid={firstNameSuccess}
          />
          <Form.Control.Feedback type="invalid">
            {nameErrorMessage}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">{}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Etternavn</Form.Label>
          <Form.Control
            type="name"
            placeholder="Etternavn"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            isInvalid={lastNameError}
            isValid={lastNameSuccess}
          />
          <Form.Control.Feedback type="invalid">
            {nameErrorMessage}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">{}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterPassword">
          <Form.Label>Passord</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            isInvalid={passwordError}
            isValid={passwordSuccess}
          />
          <Form.Control.Feedback type="invalid">
            {passwordErrorMessage}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">{}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRepeatPassword">
          <Form.Label>Gjenta passord</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repeat password"
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
            isValid={repeatPasswordSuccess}
          />
          <Form.Control.Feedback type="valid">{}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleRegister} className='mt-2'>
          Registrer
        </Button>
      </Form>
      <br />
      <br />
      <Alert show={success} variant="success" ref={successRef}>
        <Alert.Heading>Bruker registrert!</Alert.Heading>
      </Alert>
    </div>
  );
};

export default RegisterUser;
