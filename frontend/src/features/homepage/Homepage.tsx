import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import FilterBar from './FilterBar';
import RecommendedTicketer from './RecommendedTicketer';
import SearchBar from './SearchBar';
import Logo from '../../images/ticket_logo.png';

function Homepage() {
  return(
    <Container>
        <Row>
          <Col className='d-flex align-items-center justify-content-center'>
            <SearchBar></SearchBar>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <Image src={Logo} />
          </Col>
        </Row>
        <FilterBar></FilterBar>
        <RecommendedTicketer></RecommendedTicketer>
      </Container>
  );
}

export default Homepage;