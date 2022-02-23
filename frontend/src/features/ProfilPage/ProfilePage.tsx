
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



function ProfilePage() {
    return(
      <div>
      <Menylinje/>
      <div style = {{marginLeft: "133px"}}>       
      <Header/>
      <div className='row m-3 ms-5'>
      <div className='col-3'>
        <span className='button__icon-10'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span> 
      </div>  
      <div className='col'>
        <Profileinfo/>
      </div>   
      <UserPosts/>      
      </div>
      <Footer/>
      </div>
    </div>
    );
  }
  
  export default ProfilePage;