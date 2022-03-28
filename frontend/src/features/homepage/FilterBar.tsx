import React from 'react';
import Category from './Category';
import { CardGroup, Container } from 'react-bootstrap';
import Concert from '../../images/konsert.png';
import Sport from '../../images/sport.png';
import Teater from '../../images/teater.png';

function FilterBar() {
  return (
    <Container>
      {/** <CardGroup>
        <Category picture={Concert} name='KONSERT'/>
        <Category picture={Sport} name='SPORT'/>
        <Category picture={Teater} name='TEATER'/>
        <Category picture={"https://pic.onlinewebfonts.com/svg/img_520908.png"} name='ANNET'/>
      </CardGroup> */}
    </Container>
  );
}

export default FilterBar;
