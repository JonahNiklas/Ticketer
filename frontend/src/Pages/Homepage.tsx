import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterBar from '../features/homepage/FilterBar';
import Footer from '../features/homepage/Footer';
import Header from '../features/homepage/Header';
import RecommendedTicketer from '../features/homepage/RecommendedTicketer';
import Menylinje from '../features/Menylinje';


function Homepage() {
  return(
        <div>
          <Menylinje/>
          <div style = {{marginLeft: "133px"}}>       
          <Header/>
          <div className='m-5'>
          <FilterBar></FilterBar>
          <RecommendedTicketer></RecommendedTicketer>      
          </div>
          <Footer/>
          </div>
        </div>

  );
}

export default Homepage;





