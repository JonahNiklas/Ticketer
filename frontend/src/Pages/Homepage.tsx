import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
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
        <Container>
          <Row>
              <Category picture={Concert} name='KONSERT' onClick={() => setSelectedCategory('Concert')}/>
              <Category picture={Sport} name='SPORT' onClick={() => setSelectedCategory('Sport')}/>
              <Category picture={Teater} name='TEATER' onClick={() => setSelectedCategory('Show')}/>
              <Category picture={"https://pic.onlinewebfonts.com/svg/img_520908.png"} name='ANNET' onClick={() => setSelectedCategory('Other')}/>
          </Row>
        </Container>
        
        {/** legge inn en check på om selectedCategory == "", hvis ja -> vis recommendedTicketer istedenfor */}
        <FilteredTicketer category={selectedCategory}/>

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
