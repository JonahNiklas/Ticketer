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
import Header from '../homepage/Header';
import { Col, Container, Row } from 'react-bootstrap';
import WantsContact from './wantsContact';
import GiveRating from './GiveRating';

function ProfilePage() {
  return (
    <div className="m-0">
      <Menylinje />
      <div style={{ marginLeft: '133px' }}>
        <Header />
        <Container>
          <Row className="justify-content-md-center mt-5">
            <Col sm="3">
              <Container>
                <span className="button__icon-10">
                  <FontAwesomeIcon icon={faUserAstronaut}></FontAwesomeIcon>
                </span>
              </Container>
            </Col>
            <Col sm="6">
              <Profileinfo />
              <Rating/>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col sm="6">
              <WantsContact />
            </Col>
            <Col>
              <GiveRating />
            </Col>
          </Row>
          <Row className="mt-5">
            <UserPosts />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ProfilePage;
