import React, { useState, Component, useEffect } from 'react';
import '../../stylesheets/ProfileInfo.css';
import '../../stylesheets/ProfilePage.css';
import { Button, Container, Form } from 'react-bootstrap';
import { getUserById } from '../../client/userHandler';
import { store } from '../../redux/store';
import { userData } from '../../types';
import EditProfile from './EditProfile';

function Profileinfo() {
  const [modalShow, setModalShow] = useState(false);
  const [userData, setUserData] = useState<userData | null>(null);
  async function getUserData() {
    try {
      const activeUserId = store.getState().user.userId;
      if (activeUserId !== null && Number.isInteger(activeUserId)) {
        const user = await getUserById(activeUserId);
        setUserData({
          id: activeUserId,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        });
      }
    } catch (error: any) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div
      className="p-3 rounded"
      style={{ backgroundColor: 'rgb(100, 176, 145)' }}
    >
      <h2 className="">Brukerinformasjon</h2>
      <h5 className="text-white">
        {userData ? userData.firstName + ' ' + userData.lastName : ''}
      </h5>
      <h5 className="text-white">{userData ? userData.email : ''}</h5>
      <br></br>
      <Button variant="dark w-100" onClick={() => setModalShow(true)}>
        {' '}
        Endre{' '}
      </Button>

      {userData && (
        <EditProfile
          userData={userData}
          onHide={() => setModalShow(false)}
          show={modalShow}
        />
      )}
    </div>
  );
}

export default Profileinfo;
