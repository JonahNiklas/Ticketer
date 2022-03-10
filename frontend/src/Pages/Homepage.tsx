import React, { useState } from 'react';
import { Container, Col, Row, Image, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterBar from '../features/homepage/FilterBar';
import Footer from '../features/homepage/Footer';
import Header from '../features/homepage/Header';
import RecommendedTicketer from '../features/homepage/RecommendedTicketer';
import Menylinje from '../features/Menylinje';
import FilteredTicketer from '../features/homepage/FilteredTicketer';
import Category from '../features/homepage/Category';
import Concert from '../images/konsert.png';
import Sport from '../images/sport.png';
import Teater from '../images/teater.png';

function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
    <div>
      <Menylinje />
      <div style={{ marginLeft: '133px' }}>
        <Header />
        <div className="m-5">
        <Container> 
          <CardGroup>
              <div onClick={() => setSelectedCategory('Concert')}><Category picture={Concert} name='KONSERT'/></div>
              <div onClick={() => setSelectedCategory('Sport')}><Category picture={Sport} name='SPORT'/></div>
              <div onClick={() => setSelectedCategory('Show')}><Category picture={Teater} name='TEATER'/></div>
              <div onClick={() => setSelectedCategory('Other')}><Category picture={"https://pic.onlinewebfonts.com/svg/img_520908.png"} name='ANNET'/></div>
          </CardGroup>
        </Container>
          <FilteredTicketer category={selectedCategory}/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
