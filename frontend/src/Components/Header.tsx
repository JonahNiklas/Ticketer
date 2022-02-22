import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import SearchBar from '../features/homepage/SearchBar';
import Logo from '../images/ticket_logo.png';

function Header() {
  return (
  <header>
    <Row className='p-1 m-0 bg-dark vw-auto wh-40'>
    <Col className="d-flex justify-content-left">
          <Image src={Logo} />
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <SearchBar/>
        </Col>
     
      </Row>
  </header>
  )
}

export default Header;