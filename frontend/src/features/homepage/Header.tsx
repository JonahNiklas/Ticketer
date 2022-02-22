import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import SearchBar from './SearchBar';
import Logo from '../../images/ticket_logo.png';

function Header() {
  return (
  <div className='navbar navbar-dark bg-dark'>
    <Row className='w-100'>
    <Col className="d-flex justify-content-left">
          <Image src={Logo} />
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <SearchBar/>
        </Col>
        </Row>

  </div>
  )
}

export default Header;