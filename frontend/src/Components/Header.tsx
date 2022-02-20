import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import SearchBar from '../features/homepage/SearchBar';
import Logo from '../images/ticket_logo.png';

function Header() {
  return (
  <header>
    <Row className='p-4 bg-dark vw-80 wh-40'>
        <Col className="d-flex align-items-center justify-content-center">
          <SearchBar/>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Image src={Logo} />
        </Col>
      </Row>
  </header>
  )
}

export default Header;