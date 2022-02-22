import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Post from '../createpostpage/Post';

function RecommendedTicketer() {
  return(
    <div className='RecommendedTicketer'>
      <Container>
        <h2>Anbefalte Ticketer</h2>
        <CardGroup>
          <Post/><Post/><Post/>
       
        </CardGroup>
      </Container>
    </div>
  );
}

export default RecommendedTicketer;