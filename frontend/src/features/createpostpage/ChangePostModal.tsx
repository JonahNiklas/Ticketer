import React, { useState } from 'react';
import { useRef } from 'react';
import {
  Button,
  ButtonGroup,
  Form,
  Modal,
  ToggleButton
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useHistory } from 'react-router-dom';
import { changePost } from '../../client/postHandler';
import { store } from '../../redux/store';
import { Post, PostRequest } from '../../types';

function ChangeModal(props: { thisPost: Post; show: boolean; onHide: any }) {
  const history = useHistory();

  let validInfo = false;
  const [title, setTitle] = useState<string>(props.thisPost.title);
  const [timeOfEvent, setTimeOfEvent] = useState<Date>(
    new Date(props.thisPost.timeOfEvent)
  );
  const [city, setCity] = useState<string>(props.thisPost.city);
  const [venue, setVenue] = useState<string>(props.thisPost.venue);
  const [forSale, setForSale] = useState<string>(
    props.thisPost.forSale ? 'true' : 'false'
  );
  const [category, setCategory] = useState<string>(props.thisPost.category);
  const [description, setDescription] = useState<string>(
    props.thisPost.description ? props.thisPost.description : ''
  );
  const [price, setPrice] = useState<string>(
    props.thisPost.price ? props.thisPost.price.toString() : ''
  );
  const successRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: 'Konsert', value: 'Concert' },
    { name: 'Sport', value: 'Sport' },
    { name: 'Teater/Show', value: 'Show' },
    { name: 'Annet', value: 'Other' }
  ];

  const forSaleOrNot = [
    { name: 'Til salgs', value: 'true' },
    { name: 'Ønskes kjøpt', value: 'false' }
  ];

  async function handleChangePost(e: any) {
    e.preventDefault();
    validInfo = true;
    if (!title || title.length < 2) {
      console.log('Tittel er nødvendig');
      validInfo = false;
    }
    if (!city || city === '') {
      console.log('By er nødvendig');
      validInfo = false;
    }
    if (!venue || venue === '') {
      console.log('Arena mangler');
      validInfo = false;
    }

    if (validInfo) {
      // TODO: account for deylightsaving in a better way
      timeOfEvent.setHours(timeOfEvent.getHours() + 1); // This is hardcoded daylightsaving

      let optionalDescription = null;
      if (description !== '') {
        optionalDescription = description;
      }

      let optionalPrice = null;
      if (price !== '') {
        optionalPrice = Number.parseInt(price, 10);
      }

      const userState = store.getState().user;
      if (!userState.userId) {
        return;
      }
      const postRequest: PostRequest = {
        timeOfEvent,
        title,
        city,
        venue,
        category,
        forSale: forSale === 'true',
        description: optionalDescription,
        price: optionalPrice,
        authorId: userState.userId
      };

      try {
        const response = await changePost(props.thisPost.id, postRequest);
        successRef.current?.scrollIntoView();
        // denne er litt wonky, ta en titt på den etter L1
        setTimeout(() => {
          history.push('/profile');
        }, 3000);
        window.location.reload();

        console.log(response);
        //history.push('/profile');
      } catch (error: any) {
        console.error(error);
      }
    } else {
      history.push('/login');
    }
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <Form style={{ width: '450px' }}>
          <Form.Group className="w-100 col" controlId="formBasicl">
            <Form.Label>Navn på arrangement</Form.Label>
            <Form.Control
              type="text"
              placeholder="Snarky Puppy Konsert"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-50" controlId="formBasicl">
            <Form.Label>Type</Form.Label>
            <br />

            <ButtonGroup aria-label="Basic example" className="mb-3 ">
              {forSaleOrNot.map((element, idx) => (
                <ToggleButton
                  key={idx}
                  id={`forsale-${idx}`}
                  type="radio"
                  variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                  name="forSale"
                  value={element.value}
                  checked={forSale === element.value}
                  onChange={(e: any) => {
                    setForSale(e.currentTarget.value);
                  }}
                >
                  {element.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formBasicl">
            <Form.Label>Kategori</Form.Label>
            <br />
            <ButtonGroup>
              {categories.map((currentCategory, idx) => (
                <ToggleButton
                  key={idx}
                  id={`category-${idx}`}
                  type="radio"
                  variant={idx % 2 ? 'outline-primary' : 'outline-secondary'}
                  name="category"
                  value={currentCategory.value}
                  checked={category === currentCategory.value}
                  onChange={(e: any) => {
                    setCategory(e.currentTarget.value);
                  }}
                >
                  {currentCategory.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formBasicl">
            <Form.Label>Tidspunkt</Form.Label>
            <DatePicker
              id="timeOfEvent"
              selected={timeOfEvent}
              onChange={(e: any) => setTimeOfEvent(e)}
              showTimeSelect
              timeIntervals={15}
              dateFormat="dd.MM.yy HH:mm"
            />
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formBasicl">
            <Form.Label>By</Form.Label>
            <Form.Control
              type="text"
              placeholder={city}
              defaultValue={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formBasicl">
            <Form.Label>Arena</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sentrum Scene"
              defaultValue={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 w-100"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Beskrivelse</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Musikk-kollektivet og fenomenet Snarky Puppy er tilbake på Sentrum Scene etter å ha solgt ut for et ekstatisk publikum samme sted i 2016"
              defaultValue={description}
              onChange={(e: any) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formBasicl">
            <Form.Label>Pris i norske kroner</Form.Label>
            <Form.Control
              type="number"
              placeholder="100"
              defaultValue={price}
              onChange={(e: any) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="success mb-3 w-100"
            type="submit"
            onClick={handleChangePost}
          >
            Endre
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ChangeModal;
