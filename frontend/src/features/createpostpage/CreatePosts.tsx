import React from 'react';
import { Button, ButtonGroup, Container, Form } from 'react-bootstrap';
import '../../stylesheets/CreatePosts.css';
import Post from './Post';

function CreatePosts(){
    return(
        <Container>
            <Form >
            <div className='row'>
                <div className='col'style = {{marginLeft: "10%"}}>
                <h3 className='m-5'>What would you post?</h3>
                <Form.Group className="mb-3 w-50 col" controlId="formBasicl">
                    <Form.Label>Arrangement name</Form.Label>
                    <Form.Control type="email" placeholder="Title" />
                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="formBasicl">
                    <Form.Label>Where?</Form.Label>
                    <Form.Control type="email" placeholder="Town/ Hall" />

                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="formBasicl">
                <Form.Label>Type</Form.Label><br/>
                    <ButtonGroup aria-label="Basic example" className='mb-3 '>
                        <Button variant="success">Kjøpe</Button>
                        <Button variant="danger">Selge</Button>
                    </ButtonGroup>
                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="formBasicl">
                    <Form.Label>Category</Form.Label><br/>
                    <ButtonGroup aria-label="Basic example" className='mb-3 '>
                        <Button variant="secondary">Konsert</Button>
                        <Button variant="secondary">Sport</Button>
                        <Button variant="secondary">Show/ Teater</Button>
                        <Button variant="secondary">Andre</Button>
                    </ButtonGroup>
                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="I had one of the most amazing experiences going to a Lady Gaga show a while back. It was a bit like going to a Broadway show, a Circus, a dance club and a crazy Rave!" />
                </Form.Group>

                <Button variant="success mb-3 w-50" type="submit" >
                    Publiser
                </Button>
                
                </div>
                <div className='col' style = {{marginRight: "10%"}}>
                <h3 className='m-5'>How does perfect post looks like?</h3>
                <Post />
                </div>
            </div>
 
                
            </Form>
        </Container>

    );
}

export default CreatePosts;
