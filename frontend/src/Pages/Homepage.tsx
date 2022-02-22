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
    <div className="container-fluid p-0">
    <div className="row">
       <div className="col-3 bg-dark position-fixed" id="sticky-sidebar">
         <Menylinje/>
       </div>
    </div>
       <div className="col offset-1" id="main">
        <Header/>
        <FilterBar></FilterBar>
        <RecommendedTicketer></RecommendedTicketer>
        <Footer/>
       </div>
   
 </div>
  );
}

export default Homepage;





