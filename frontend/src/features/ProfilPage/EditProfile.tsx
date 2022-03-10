import React, { useState, useRef } from 'react';
import { Alert, Form, Button, Modal } from 'react-bootstrap/';
import { updateUserInfo } from '../../client/authHandler';
import { userData, UpdateRequest, RestError} from '../../types';


const EditProfile = (props: {userData: userData, show: boolean, onHide: any}) => {
  const successRef = useRef<HTMLDivElement>(null);
  
  const [email, setEmail] = useState<string>(props.userData.email);
  const [firstName, setFirstName] = useState<string>(props.userData.firstName);
  const [lastName, setLastName] = useState<string>(props.userData.lastName);
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
  const [repeatPasswordSuccess, setRepeatPasswordSuccess] =
    useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  console.log(email);
  console.log(firstName);
  console.log(lastName);
  console.log(password);

  const emailCheck = (email: string) => {
    if (!/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailSuccess(false);
      return;
    }
    setEmailSuccess(true);
  };

  const firstNameCheck = (name: string) => {
    if (!/^[A-Z][a-z]{2,15}$/.test(name)) {
      setFirstNameSuccess(false);
      return;
    }
    setFirstNameSuccess(true);
  };

  const lastNameCheck = (name: string) => {
    if (!/^[A-Z][a-z]{2,15}$/.test(name)) {
      setLastNameSuccess(false);
      return;
    }
    setLastNameSuccess(true);
  };

  const passwordCheck = (password: string) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      setPasswordSuccess(false);
      return;
    }
    setPasswordSuccess(true);
  };

  const repeatPasswordCheck = (repeatPassword: string) => {
    console.log(repeatPassword);
    if (password !== repeatPassword) {
      setRepeatPasswordSuccess(false);
      return;
    }
    setRepeatPasswordSuccess(true);
  };

  async function handleRegister(e: any) {
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
      return;
    }

    //eslint-disable-next-line
    if (!/^[A-Z][a-z]{2,15}$/.test(firstName)) {
      setFirstNameError(true);
      setNameErrorMessage(
        'Navn må begynne med stor bokstav og være lenger enn et tegn.'
      );
      return;
    }

    if (!/^[A-Z][a-z]{2,15}$/.test(lastName)) {
      setLastNameError(true);
      setNameErrorMessage(
        'Navn må begynne med stor bokstav og være lenger enn et tegn.'
      );
      return;
    }

    if (password !== repeatPassword) {
      setPasswordError(true);
      setPasswordErrorMessage('Passordene må være like');
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      setPasswordError(true);
      setPasswordErrorMessage(
        'Passord må inneholde stor og liten bokstav, et tall, og være lenger enn 8 tegn.'
      );
      return;
    }

    const updateRequest: UpdateRequest = {
      id: props.userData.id,
      email,
      firstName,
      lastName,
      password
    };

    try {
      const response = await updateUserInfo(updateRequest);
      console.log(response);

      if ((response as RestError).errorMessage) {
        const error = response as RestError;

        console.log(error.errorMessage);

        // user not found

        // passcheck
      } else {
        setSuccess(true);
        successRef.current?.scrollIntoView();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error: any) {
      if (error.errorMessage === 'User already exist') {
        setEmailError(true);
        setEmailErrorMessage('Emailen er allerede i bruk');
      }
      console.error(error);
    }
  }

  return (
    <Modal
    show = {props.show}
    onHide={props.onHide}>
      <Modal.Body>
        <h3>Endre profilinfo</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formRegisterEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="E-mail"
              defaultValue={props.userData.email}
              onChange={(e) => {
                {
                  setEmail(e.target.value);
                }
                emailCheck(e.target.value);
              }}
              isInvalid={emailError}
              isValid={emailSuccess}
            />
            <Form.Control.Feedback type="invalid">
              {emailErrorMessage}
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">{}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>Fornavn</Form.Label>
            <Form.Control
              type="name"
              placeholder="Fornavn"
              defaultValue={props.userData.firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                firstNameCheck(e.target.value);
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
              defaultValue={props.userData.lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                lastNameCheck(e.target.value);
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
                passwordCheck(e.target.value);
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
                repeatPasswordCheck(e.target.value);
              }}
              isValid={repeatPasswordSuccess}
            />
            <Form.Control.Feedback type="valid">{}</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleRegister}>
            Endre bruker
          </Button>
        </Form>
        <br />
        <br />
        <Alert show={success} variant="success" ref={successRef}>
          <Alert.Heading>Bruker endret!</Alert.Heading>
        </Alert>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfile;