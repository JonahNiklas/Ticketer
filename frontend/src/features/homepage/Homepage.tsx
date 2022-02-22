import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterBar from './FilterBar';
import RecommendedTicketer from './RecommendedTicketer';
import SearchBar from './SearchBar';
import Logo from '../../images/ticket_logo.png';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Menylinje from '../../Components/Menylinje';

function Homepage() {
  return (
    <div className="container-fluid p-0">
       <div className="row">
          <div className="col-3 bg-dark position-fixed" id="sticky-sidebar">
            <Menylinje/>
          </div>
          <div className="col offset-1" id="main">
          <Header/>
          <FilterBar></FilterBar>
          <RecommendedTicketer></RecommendedTicketer>
          <Footer/>
          </div>
      </div>
    </div>
  );
}

export default Homepage;
