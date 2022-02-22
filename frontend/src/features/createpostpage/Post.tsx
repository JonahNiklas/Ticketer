import React from 'react';
import { Card } from 'react-bootstrap';

function Post() {
  return (
    <Card className='mx-4 my-2 border border-secondary'>
		<Card.Img className='mx-auto mt-4' src={("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tu.no%2Fartikler%2Fse-astronautenes-ti-mest-legendariske-bilder%2F244299&psig=AOvVaw0zDWUmeIs2W53FOsIIsZiq&ust=1645615355083000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjlmYeZk_YCFQAAAAAdAAAAABAE")} />
      <Card.Body>
        <Card.Title>
              KONSERT
        </Card.Title>
      </Card.Body>
		</Card>
  )
}

export default Post;