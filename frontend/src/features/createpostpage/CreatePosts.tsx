import React from 'react';
import { Button, ButtonGroup, Container, Form } from 'react-bootstrap';
import '../../stylesheets/CreatePosts.css';
import Post from './Post';

function CreatePosts(){
    return(
        <Container>
          <div className='row'>
          <div className='col align-center'>
            <Form className='m-5' style={{width:"500px"}}>       
                <h3 className='m-5'>Hva skal du legge ut?</h3>
                <Form.Group className="mb-3 w-100 col" controlId="formBasicl">
                    <Form.Label>Arrangement</Form.Label>
                    <Form.Control type="email" placeholder="Title" />
                </Form.Group>

                <Form.Group className="mb-3 w-100" controlId="formBasicl">
                    <Form.Label>Hvor?</Form.Label>
                    <Form.Control type="email" placeholder="Town/ Hall" />

                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="formBasicl">
                <Form.Label>Type</Form.Label><br/>
                    <ButtonGroup aria-label="Basic example" className='mb-3 '>
                        <Button variant="success">Kjøpe</Button>
                        <Button variant="danger">Selge</Button>
                    </ButtonGroup>
                </Form.Group>

                <Form.Group className="mb-3 w-100" controlId="formBasicl">
                    <Form.Label>Kategori</Form.Label><br/>
                    <ButtonGroup aria-label="Basic example" className='mb-3 '>
                        <Button variant="secondary">Konsert</Button>
                        <Button variant="secondary">Sport</Button>
                        <Button variant="secondary">Show/ Teater</Button>
                        <Button variant="secondary">Andre...</Button>
                    </ButtonGroup>
                </Form.Group>

                <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Beskrivelse</Form.Label>
                    <Form.Control as="textarea" placeholder="I had one of the most amazing experiences going to a Lady Gaga show a while back. It was a bit like going to a Broadway show, a Circus, a dance club and a crazy Rave!" />
                </Form.Group>

                <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Bilde</Form.Label>
                  <Form.Control type="file" placeholder="Title" />
                </Form.Group>

                <Button variant="success mb-3 w-100" type="submit" >
                    Publiser
                </Button>               
           </Form>
           </div>               
           <div className='col'>
                <h3 className='m-5'>Hvordan ser en typisk annonse ut?</h3>
                <Post/>
            </div>
            </div>

        </Container>

    );
}

export default CreatePosts;
