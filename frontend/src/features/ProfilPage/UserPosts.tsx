import React from 'react';
import { Container, Card } from 'react-bootstrap'
import '../../stylesheets/ProfileInfo.css';

function UserPosts(){
    return (
        <div>
            <Container>
                <h3 className='.text-info'>Dine billetter</h3>

                <Card style={{ cursor: 'pointer' }} className='mx-4 my-2'>
                    <Card.Img src='https://picsum.photos/90/40' />
                    <Card.Body>
                        <Card.Title>No.4</Card.Title>
                        <Card.Text>
                            10.03.22 - Samfundet
                        </Card.Text>
                    </Card.Body>
                </Card>

                <p> {'   '} </p>
                <p> {'   '} </p>
                <p> {'   '} </p>

                <Card style={{ cursor: 'pointer' }} className='mx-4 my-2'>
                    <Card.Img src='https://picsum.photos/90/40' />
                    <Card.Body>
                        <Card.Title>TIX</Card.Title>
                        <Card.Text>
                            10.03.22 - Trondheim Spektrum
                        </Card.Text>
                    </Card.Body>
                </Card>




            </Container>

        </div>

    );
}

export default UserPosts;
