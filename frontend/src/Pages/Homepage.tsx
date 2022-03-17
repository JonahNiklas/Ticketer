import React, { useState } from 'react';
import { Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
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
              <Category picture={Concert} name='KONSERT' active={(selectedCategory === "Concert") ? true : false} onClick={() => (selectedCategory === 'Concert') ? setSelectedCategory('') : setSelectedCategory('Concert')}/>
              <Category picture={Sport} name='SPORT' active={(selectedCategory === "Sport") ? true : false} onClick={() => (selectedCategory === 'Sport') ? setSelectedCategory('') : setSelectedCategory('Sport')}/>
              <Category picture={Teater} name='TEATER/SHOW' active={(selectedCategory === "Show") ? true : false} onClick={() => (selectedCategory === 'Show') ? setSelectedCategory('') : setSelectedCategory('Show')}/>
              <Category picture={"https://pic.onlinewebfonts.com/svg/img_520908.png"} name='ANNET'  active={(selectedCategory === "Other") ? true : false} onClick={() => (selectedCategory === 'Other') ? setSelectedCategory('') : setSelectedCategory('Other')}/>
          </Row>
          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
               Filtrere
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"> Til salgs</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Ønskes kjøpt</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Alle</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-2">pris</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-2">kalender</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Container>
        
      
        {(selectedCategory === "") ? <RecommendedTicketer/> : <FilteredTicketer category={selectedCategory}/>}

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
