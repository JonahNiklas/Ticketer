import React, { useEffect, useState } from 'react';
import Menylinje from '../Menylinje';
import '../../stylesheets/Posts.css';
import '../../stylesheets/ProfilePage.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import Profileinfo from '../ProfilPage/Profileinfo';
import Rating from '../ProfilPage/Rating';
import UserPosts from '../ProfilPage/UserPosts';
import '../../stylesheets/ProfileInfo.css';
import Footer from '../homepage/Footer';
import Header from '../homepage/Header';
import { Button, Container, Form } from 'react-bootstrap';
import { store } from '../../redux/store';
import { getUserById } from '../../client/userHandler';



function UserPage() {

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  async function getUserData(){
    try {
      const userState = store.getState().user;
      console.log(userState);
      if (userState.userId !== null) {
        const user = await getUserById(userState.userId);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);

      }
    } catch (error: any) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUserData();
  });

    return(
      <div className="p-3 rounded" style={{ backgroundColor: "rgb(100, 176, 145)" }}>
        <h5 className="text-white">{firstName} {lastName}</h5>
        <h5 className="text-white">{email}</h5>
      </div>
    
    );
  }
  
  export default UserPage;