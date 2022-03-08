
import React, { useState, Component, useEffect }  from "react";
import "../../stylesheets/ProfileInfo.css";
import "../../stylesheets/ProfilePage.css";
import { Button, Container, Form } from 'react-bootstrap';
import { getUserById } from "../../client/userHandler";
import { store } from "../../redux/store";


function Profileinfo(){

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

    return (
   <div className="p-3 rounded" style={{ backgroundColor: "rgb(100, 176, 145)" }}>
                <h5 className="text-white">{firstName} {lastName}</h5>
                <h5 className="text-white">{email}</h5>
            </div>
    );
}

export default Profileinfo;