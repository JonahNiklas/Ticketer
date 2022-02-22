import React, { useState } from 'react';
import { Container, Col, Row, Image , Button} from 'react-bootstrap';
import SearchBar from './SearchBar';
import Logo from '../../images/ticket_logo.png';
import { useDispatch } from 'react-redux';
import { AppDispatch, store } from '../../redux/store';
import restHandler from '../../client/restHandler';

function Header() {

  const [data, setData] = useState("");

  const getData = async (e: any) => {
    e.preventDefault();
    const d = await restHandler.get<any>(`/user/${store.getState().user.userId}`);
    console.log(d);
    setData(d.email);
  }

  return (
  <header>
    <Row className='p-1 m-0 bg-dark vw-auto wh-40'>
    <Col className="d-flex justify-content-left">
          <Image src={Logo} />
          <Button onClick={getData}>
            Click me for stuff
          </Button>
          <p style={{color: "white"}}>Hello: {data}</p>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <SearchBar/>
        </Col>
     
      </Row>
  </header>
  )
}

export default Header;