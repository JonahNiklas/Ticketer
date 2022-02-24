import React from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap'
import '../../stylesheets/ProfileInfo.css';
import Post from '../createpostpage/Post';

function UserPosts(){
    return (
      <div className="mt-0 ml-5 mr-5 p-0">
      <Container>     
          <h2 className='text-center'>Dine Ticketer</h2>
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

export default UserPosts;
