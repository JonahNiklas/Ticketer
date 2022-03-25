import React, { useState } from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';
import Logo from '../../images/ticket_logo.png';
import '../../stylesheets/Posts.css';
import { useDispatch } from 'react-redux';
import { AppDispatch, store } from '../../redux/store';
import restHandler from '../../client/restHandler';
import { Link } from 'react-router-dom';

function Header() {
  const [data, setData] = useState('');

  const getData = async (e: any) => {
    e.preventDefault();
    const d = await restHandler.get<any>(
      `/user/${store.getState().user.userId}`
    );
    console.log(d);
    setData(d.email);
  };

  return (
    <div className="navbar navbar-dark bg-dark">
      <Row className="w-100">
        <Col className="d-flex justify-content-left">
          <Link to="/home">
            <Image src={Logo} className="ms-5" />
          </Link>
        </Col>
        {/* <Col className="d-flex align-items-center justify-content-end">
          <SearchBar />
        </Col> */}
      </Row>
    </div>
  );
}

export default Header;
