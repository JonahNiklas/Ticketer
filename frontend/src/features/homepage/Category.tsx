import React from 'react';
import { Card } from 'react-bootstrap';

const Category = (props: {picture:string, name:string}) => {
    return(
        <Card
            style={{ cursor: 'pointer', border: `2px solid black`, textAlign: 'center' }}
            className="mx-4 my-4 rounded">
            <Card.Img 
            className="mx-auto mt-4"
            style={{ width: '50%', height: '50%' }}
            src={props.picture}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Category;