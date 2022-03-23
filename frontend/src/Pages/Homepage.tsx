import React, { useEffect, useState } from 'react';
import { Post } from '../types';
import { getPosts } from '../client/postHandler';
import { Button, Card, Col, Collapse, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../features/homepage/Footer';
import Header from '../features/homepage/Header';
import RecommendedTicketer from '../features/homepage/RecommendedTicketer';
import Menylinje from '../features/Menylinje';
import Category from '../features/homepage/Category';
import Concert from '../images/konsert.png';
import Sport from '../images/sport.png';
import Teater from '../images/teater.png';
import MultiSlider from '../features/homepage/MutliSlider';
import DatePicker from 'react-datepicker';

function Homepage() {

  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sellFilter, setSellFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<number[]>([0, 1000]);
  const [dateFilter, setDateFilter] = useState<Date>(new Date());
  const [masterPosts, setMasterPosts] = useState<Post[]>([]);
  const [showPosts, setShowPosts] = useState<Post[]>([]);

  async function getAllPosts() {
    try {
      await getPosts().then((posts) => {
        setMasterPosts(posts);
        setShowPosts(posts);
      })
    } catch (error: any) {
      console.error(error);
    }
  }

  const filterPosts = () => {
    let filteredList: Post[] = [...masterPosts];
    
    // first take category
    if (selectedCategory !== "") filteredList = filteredList.filter(p => p.category === selectedCategory);

    if (!showFilters) {
      setShowPosts(filteredList);
      return;
    } else {
  
      // then take sell or buy filter
      if (sellFilter !== "") filteredList = filteredList.filter(p => p.forSale === (sellFilter === "forSale"));
  
      // then take price
      filteredList = filteredList.filter(p => {
        p.price = (p.price !== null) ? p.price : 0;
        if (isNaN(priceFilter[0]) && !isNaN(priceFilter[1])) return (p.price <= priceFilter[1]);
        if (!isNaN(priceFilter[0]) && isNaN(priceFilter[1])) return (p.price >= priceFilter[0]);
        if (isNaN(priceFilter[0]) && isNaN(priceFilter[1])) return (true);
        return (p.price >= priceFilter[0] && p.price <= priceFilter[1])
      })
  
      // then date
      filteredList = filteredList.filter(p => new Date(p.timeOfEvent) > dateFilter);
    }

    setShowPosts(filteredList);
  }

  useEffect(() => {
    getAllPosts();
  },[]);

  useEffect(() => {
    filterPosts();
  }, [showFilters, selectedCategory, priceFilter, sellFilter, dateFilter]);

  return (
    <div>
      <Menylinje />
      <div style={{ marginLeft: '133px' }}>
        <Header />
        <Container>
          <Row>
              <Category picture={Concert} name='KONSERT' active={(selectedCategory === "Concert") ? true : false} onClick={() => {(selectedCategory !== "Concert") ? setSelectedCategory("Concert") : setSelectedCategory("");}}/>
              <Category picture={Sport} name='SPORT' active={(selectedCategory === "Sport") ? true : false} onClick={() => {(selectedCategory !== "Sport") ? setSelectedCategory("Sport") : setSelectedCategory("");}}/>
              <Category picture={Teater} name='TEATER/SHOW' active={(selectedCategory === "Show") ? true : false} onClick={() => {(selectedCategory !== "Show") ? setSelectedCategory("Show") : setSelectedCategory("");}}/>
              <Category picture={"https://pic.onlinewebfonts.com/svg/img_520908.png"} name='ANNET' active={(selectedCategory === "Other") ? true : false} onClick={() => {(selectedCategory !== "Other") ? setSelectedCategory("Other") : setSelectedCategory("");}}/>
          </Row>
          <Row className="d-flex justify-content-center mb-3">
            <Button variant='secondary' onClick={() => setShowFilters(!showFilters)} className="w-25 fs-5">Filtrer Ticketer</Button>
          </Row>
          <Collapse in={showFilters}>
            <Card>
              <Row className='justify-content-center'>
                <Col>
                  <Form.Group className='text-center'>
                    <Form.Label className='fs-4'>Type Ticketer</Form.Label>
                    <Form.Select onChange={(e) => setSellFilter(e.target.value)} defaultValue="Alle" className='w-50 mx-auto'>
                      <option value="">Alle</option>
                      <option value="forSale">Til Salgs</option>
                      <option value="notForSale">Ønskes kjøpt</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className='text-center mb-2'>
                    <Form.Label className='fs-4'>Pris</Form.Label>
                    <div className='d-flex flex-column'>
                      <MultiSlider min={0} max={1000} defaultValues={[priceFilter[0], priceFilter[1]]} values={priceFilter} onDrag={(d) => setPriceFilter(d)} className="w-100 mb-4"/>
                      <div className='d-flex flex-row'>
                        <div className='d-flex flex-row align-items-center'>
                          <div className='col-lg-3'>
                            <Form.Label>Min</Form.Label>
                          </div>
                          <div className='col'>
                            <Form.Control type='number' value={priceFilter[0]} onChange={(e) => setPriceFilter([Number.parseInt(e.target.value, 10), priceFilter[1]])} style={{WebkitAppearance: "none", margin: 0, MozAppearance: "textfield"}} className="w-20"/>
                          </div>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                          <div className='col-lg-3'>
                            <Form.Label>Max</Form.Label>
                          </div>
                          <div className='col'>
                            <Form.Control type='number' value={priceFilter[1]} onChange={(e) => setPriceFilter([priceFilter[0], Number.parseInt(e.target.value, 10)])} style={{WebkitAppearance: "none", margin: 0, MozAppearance: "textfield"}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className='d-flex flex-column justify-content-center text-center'>
                    <Form.Label className='fs-4'>Dato</Form.Label>
                    <DatePicker
                      id = "timeFilter"
                      selected={dateFilter}
                      onChange={(date: Date) => setDateFilter(date)}
                      showTimeSelect
                      timeIntervals={15}
                      dateFormat="dd.MM.yy HH:mm"
                      className='text-center'
                    />
                    <p className='text-secondary'>PS: Viser Ticketer etter satt dato</p>
                  </Form.Group>
                </Col>
              </Row>
            </Card>
          </Collapse>
        </Container>
        
      
        <RecommendedTicketer posts={showPosts}/>

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
