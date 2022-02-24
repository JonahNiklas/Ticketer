/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Button, Card, CardGroup, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import Post from '../createpostpage/Post';
import {faBell, faPlusCircle, faCircle, faUser,faHouse} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../stylesheets/Posts.css';

function RecommendedTicketer() {
  return(
  <div className="mt-0 ml-5 mr-5 p-0">
    <Container>     
        <h2 className='text-center'>Anbefalte Ticketer</h2>
        <CardGroup>
          

          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>

          
        </CardGroup>
    </Container>
  </div>
  );
}

export default RecommendedTicketer;