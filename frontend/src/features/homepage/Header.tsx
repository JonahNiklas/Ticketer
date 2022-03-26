import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import Logo from '../../images/ticket_logo.png';
import '../../stylesheets/Posts.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <Row className="w-100">
        <Col className="d-flex justify-content-left">
          <Link to="/home">
            <Image src={Logo} className="ms-5"/>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
