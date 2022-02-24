import React, { useState } from "react";
import { Form, Button } from "react-bootstrap/";
import { useDispatch, useSelector } from "react-redux";
import { Link, Router, useHistory } from "react-router-dom";
import { login } from "../../client/authHandler";
import { AppDispatch, RootState, store } from "../../redux/store";
import { setToken } from "../../redux/tokenSlice";
import { setUserId } from "../../redux/userSlice";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const token = await login({email: email, password: password});

      dispatch(setToken(token.token));
      dispatch(setUserId(token.ownerId));

      console.log(store.getState());  
      
      // send to homepage
    
      history.push('/home');

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
            <Form.Control type="email" placeholder="E-mail" onChange={ (e) => setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLoginPassword">
            <Form.Label>Passord</Form.Label>
            <Form.Control type="password" placeholder="Passord" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Logg inn
          </Button>
        </Form>
    </div>
  );
}

export default Login;
