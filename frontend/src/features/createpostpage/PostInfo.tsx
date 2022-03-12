import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import '../../stylesheets/Menylinje.css';
import { Post } from '../../types';



function DateConverter(date: Date){
  const d = new Date(date);
  const days = ['MANDAG','TIRSDAG','ONSDAG','TORSDAG','FREDAG', 'LØRDAG','SØNDAG'];
  const months = ['JANUAR','FEBRUAR','MARS','APRIL','MAI','JUNI','JULI','AUGUST','SEPTEMBER','OKTOBER','NOVEMBER','DESEMBER']
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const hours = (d.getUTCHours().toString().padStart(2,'0'))
  const minutes = (d.getUTCMinutes().toString().padStart(2,'0'))
  return day + ", " + d.getDate() +'. '+ month +", "+ d.getUTCFullYear()+ " KL " + hours+ ":" + minutes;
}

function PostInfo(props: Post) {
  let borderColor;
  let forSaleText = 'Selges for ';
  switch (props.category) {
    case 'Concert':
      borderColor = 'primary';
      break;
    case 'Sports':
      borderColor = 'secondary';
      break;
    case 'Show':
      borderColor = 'success';
      break;
    case 'Other':
      borderColor = 'info';
      break;
    default:
      borderColor = 'primary';
  }
  if (!props.forSale) {
    forSaleText = 'Ønskes kjøpt for ';
  }
  return (
    <Card
      border={borderColor}
      className=" m-4 border border-success rounded card"
      style={{ maxWidth: '370px', minWidth: '300px' }}
    >
      <span>
        <button type="button" className="button-user-post" name="Sted">
          <span className="button-user-icon">{props.authorId}</span>
        </button>
      </span>

      {/* <Card.Img src="https://picsum.photos/200/200" className=' h-50 w-auto' /> */}
      <Card.Body className="mb-0 pb-0">
        <Card.Title>{props.title}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.description}</ListGroup.Item>
          <ListGroup.Item>{props.city + ', ' + props.venue}</ListGroup.Item>
          <ListGroup.Item>{DateConverter(props.timeOfEvent)}</ListGroup.Item>
          <ListGroup.Item>{forSaleText + props.price + ',-'}</ListGroup.Item>
          <Button variant="success mb-2">Ta kontakt</Button>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default PostInfo;
