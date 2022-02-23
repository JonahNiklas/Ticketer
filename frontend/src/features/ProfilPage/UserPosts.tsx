import React from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap'
import '../../stylesheets/ProfileInfo.css';
import Post from '../createpostpage/Post';

function UserPosts(){
    return (
        <div>
     <h2 className='text-center'>Dine Ticketer</h2>
        <CardGroup>      
          <Post/>
          <Post/>        
        </CardGroup>
        </div>
    );
}

export default UserPosts;
