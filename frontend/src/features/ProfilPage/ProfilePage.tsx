import React from 'react';
import Menylinje from '../Menylinje';
import '../../stylesheets/Posts.css';
import '../../stylesheets/ProfilePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Profileinfo from './Profileinfo';
import Rating from './Rating';
import UserPosts from './UserPosts';
import '../../stylesheets/ProfileInfo.css';
import Footer from '../homepage/Footer';
import Header from '../homepage/Header';
import { Button, Container, Form } from 'react-bootstrap';

function ProfilePage() {

    return(
      <div className='m-0'>
      <Menylinje/>          
      <div style = {{marginLeft: "133px"}}>
      <Header/>
      <div className='row ms-5' style={{maxWidth: '90%'}}>
      <div className='col-2 ms-5'>
        <span className='button__icon-10'><FontAwesomeIcon icon={faUserAstronaut}></FontAwesomeIcon></span> 
      </div>  
      <div className='col-4 mt-5'>
        <Profileinfo/>
        <Rating/>
      </div>  
      </div>
      <div className='m-5'>
        <UserPosts/>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default ProfilePage;