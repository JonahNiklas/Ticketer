import { userInfo } from 'os';
import React, {useEffect, useState} from 'react';
import 'react-bootstrap';
import { ButtonGroup, Form, ToggleButton } from 'react-bootstrap';
import { RateUser } from '../../client/ratingHandler';
import { store } from '../../redux/store';
import '../../stylesheets/Rating.css';
import { RatingRequest, RatingResponse } from '../../types';

function Rating() {

  const [rating, setRating] = useState<string>('');
  const [givenBy, setGivenBy] = useState<string>('');
  const [gottenBy, setgottenBy] = useState<string>('');
  const [description, setDescription] = useState<string>('');


  return (
    <>

      <button type="button" className="btnrating btn btn-default btn-lg" data-attr="1" id="rating-star-1" >
        <i className="fa fa-star" aria-hidden="true"></i>
      </button>
      <button type="button" className="btnrating btn btn-default btn-lg" data-attr="2" id="rating-star-2" >
        <i className="fa fa-star" aria-hidden="true"></i>
      </button>
      <button type="button" className="btnrating btn btn-default btn-lg" data-attr="3" id="rating-star-3" >
        <i className="fa fa-star" aria-hidden="true"></i>
      </button>
      <button type="button" className="btnrating btn btn-default btn-lg" data-attr="4" id="rating-star-4" >
        <i className="fa fa-star" aria-hidden="true"></i>
      </button>
      <button type="button" className="btnrating btn btn-default btn-lg" data-attr="5" id="rating-star-5" >
        <i className="fa fa-star" aria-hidden="true"></i>
      </button>
    </>

  );
}

export default Rating;


