
import React from 'react';
import Menylinje from '../Menylinje';
import '../../stylesheets/Posts.css';
import '../../stylesheets/ProfilePage.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import Profileinfo from './Profileinfo';
import UserPosts from './UserPosts';
import '../../stylesheets/ProfileInfo.css';
import Footer from '../homepage/Footer';
import Header from '../homepage/Header';
import { Button, Container, Form } from 'react-bootstrap';



function ProfilePage() {
    return(
      <div>
      <Menylinje/>          
      <div style = {{marginLeft: "133px"}}>
      <Header/>
      <div className='row ms-5'>
      <div className='col-3 ms-5'>
        <span className='button__icon-10'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span> 
        <Form>
        <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Endre profilbilde</Form.Label>
                  <Form.Control type="file" placeholder="Title" />
                </Form.Group>
                <Button variant="success mb-3 w-100 ml-50" type="submit" >
                    Oppdater
                </Button> 
        </Form>
      </div>  
      <div className='col-4 mt-5'>
        <Profileinfo/>
      </div>  
       
      </div>
      <div className='m-5'>
      <UserPosts/>      
      </div>
      </div>
      <Footer/>
      </div>
    
    );
  }
  
  export default ProfilePage;