
import StartImage from "../images/startImage.png";
import React from "react";
/*import Login from "../features/loginpage/Login";*/
import RegisterUser from "../features/loginpage/RegisterUser";
import { Col, Container, Row } from "react-bootstrap";

function LoginPage() {
  return (
    <div className="LoginPage">
      <Container fluid>
        <Row>
          <Col>
            <img id="Concert" src={StartImage} style={{ width: "100%" }} />
          </Col>
          <Col>
            <RegisterUser />
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
