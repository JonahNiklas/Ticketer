import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import FilterBar from '../features/homepage/FilterBar';
import RecommendedTicketer from '../features/homepage/RecommendedTicketer';
import SearchBar from '../features/homepage/SearchBar';
import Logo from '../images/ticket_logo.png';
import Menylinje from '../features/Menylinje';
import '../stylesheets/Posts.css';

function Homepage() {
  return(
    
    <div className='flexbox-container'>
      <div className='flexbox-item flexbox-item-1'> 
        <Menylinje/>
      </div>
      <Container className='flexbox-item'>
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
      </div>
  );
}

export default Homepage;