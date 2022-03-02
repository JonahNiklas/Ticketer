import React, { useState } from "react";
import { Form, Button } from "react-bootstrap/";
import { useDispatch, useSelector } from "react-redux";
import { Link, Router, useHistory } from "react-router-dom";
import { login } from "../../client/authHandler";
import { AppDispatch, RootState, store } from "../../redux/store";
import { setToken } from "../../redux/tokenSlice";
import { setUserId } from "../../redux/userSlice";
import { RestError } from "../../types";
import { LoginResponse } from "../../types";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
      
    //eslint-disable-next-line
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Ikke en gyldig epost.');
      return;
    } 

    try {
      const response = await login({email: email, password: password});
      
      if ((response as RestError).errorMessage) {
        const message = (response as RestError).errorMessage;
        if (message == "user Not Found") {
            setEmailError(true);
            setEmailErrorMessage("Bruker ikke funnet");
        } if (message == "wrong password") {
            setPasswordError(true);
            setPasswordErrorMessage("Innlogging feilet");
        }

        const error = response as RestError;

      } else {
        const token = response as LoginResponse;

        dispatch(setToken(token.token));
        dispatch(setUserId(token.ownerId));
  
        console.log(store.getState());  
        
        history.push('/home');
  
      }
    } catch (error: any) {
      console.error(error);
    }
  }

  return (
    <div>
        <h3>Logg Inn</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formLoginEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="E-mail" onChange={ (e) => setEmail(e.target.value)} isInvalid={emailError}/>
            <Form.Control.Feedback type="invalid">{emailErrorMessage}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLoginPassword">
            <Form.Label>Passord</Form.Label>
            <Form.Control type="password" placeholder="Passord" onChange={(e) => setPassword(e.target.value)} isInvalid={passwordError}/>
            <Form.Control.Feedback type="invalid">{passwordErrorMessage}</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Logg inn
          </Button>
        </Form>
    </div>
  );
}

export default Login;
