import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Logo from '../../images/ticket_logo.png';
import '../../stylesheets/Posts.css';

function Header() {
  const history = useHistory();
  return (
    <div className="navbar navbar-dark bg-dark">
      <Row className="w-100">
        <Col className="d-flex justify-content-left">
          <Image src={Logo} className="ms-5" onClick={() => history.push('/')} role='button'/>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
