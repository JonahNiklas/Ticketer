import React, {useState} from 'react';
import { ToggleButton } from 'react-bootstrap';
import { Alert, Button, ButtonGroup, Container, Form } from 'react-bootstrap';
import { createPost } from '../../client/postHandler';
import '../../stylesheets/CreatePosts.css';
import { PostRequest } from '../../types';
import Post from './Post';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';



function CreatePosts() {
  const history = useHistory();
  
  const [title, setTitle] = useState<string>('');
  const [timeOfEvent, setTimeOfEvent]= useState<Date>(new Date());
  const [city, setCity] = useState<string>('');
  const [venue, setVenue] = useState<string>('');
  const [forSale, setForSale] = useState<string>('true');
  const [category, setCategory] = useState<string>('Concert');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('Fyll ut manglende felt');
  const [IsSuccess, setSuccess] = useState<boolean>(false);



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
  
  
  

  async function handleCreatePost(e: any) {
    e.preventDefault();
    if(!title || title.length<2){
      setIsError(true);
      setErrorText("Ugyldig navn. Det må være minst 2 tegn");
    }
    else if(!city || city ===''){
      setIsError(true);
      setErrorText("By er nødvendig");
    }
    else if(!venue || venue ===''){
      setIsError(true);
      setErrorText("Arena/Scene er nødvendig");
    }
    else{
      setIsError(false);
      setSuccess(true);
    }

    
  
    if (!isError) {
      // TODO: account for deylightsaving in a better way
      timeOfEvent.setHours(timeOfEvent.getHours()+1); // This is hardcoded daylightsaving
      
      let optionalDescription = null;
      if (description !== '') {
        optionalDescription = description;
      }

      let optionalPrice = null;
      if(price !== '') {
        optionalPrice = Number.parseInt(price,10);
      }
      const postRequest: PostRequest = {
        timeOfEvent,
        title,
        city,
        venue,
        category,
        forSale: (forSale=== 'true'),
        description: optionalDescription,
        price: optionalPrice,
        authorId: 500  
      };

      try {
        const response = await createPost(postRequest);
        console.log(response);
        history.push('/profile');
      } catch (error: any) {
        console.error(error);
      }
    }
  }

  return (
    <Container>
      <div className="row">
        <div className="col align-center">
          <Form className="m-5" style={{ width: '500px' }}>
            <h3 className="m-5">Hva skal du legge ut?</h3>
            <Form.Group className="mb-3 w-100 col" controlId="formBasicl">
              <Form.Label>Navn på arrangement</Form.Label>
              <Form.Control type="text" placeholder="Snarky Puppy Konsert" onChange={(e)=> setTitle(e.target.value)}/>
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
                    variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                    name="forSale"
                    value={element.value}
                    checked={forSale === element.value}
                    onChange={(e: any) => {
                      setForSale(e.currentTarget.value);
                      console.log(forSale);
                      }
                    }
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
                      console.log(category)
                      }
                    }
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
                onChange={ (date: any) => setTimeOfEvent(date)}
                showTimeSelect
                timeIntervals={15}
                dateFormat="dd.MM.yy HH:mm"
              />
            </Form.Group>

            <Form.Group className="mb-3 w-100" controlId="formBasicl">
              <Form.Label>By</Form.Label>
              <Form.Control type="text" placeholder="Oslo" onChange={(e) => setCity(e.target.value)}/>
            </Form.Group>


            <Form.Group className="mb-3 w-100" controlId="formBasicl">
              <Form.Label>Arena</Form.Label>
              <Form.Control type="text" placeholder="Sentrum Scene" onChange={(e) => setVenue(e.target.value)}/>
            </Form.Group>

            

            <Form.Group
              className="mb-3 w-100"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Beskrivelse</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Musikk-kollektivet og fenomenet Snarky Puppy er tilbake på Sentrum Scene etter å ha solgt ut for et ekstatisk publikum samme sted i 2016"
                onChange={(e: any) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3 w-100" controlId="formBasicl">
              <Form.Label>Pris i norske kroner</Form.Label>
              <Form.Control type="number" placeholder="100" onChange={(e: any) => setPrice(e.target.value)}/>
            </Form.Group>

            {/* <Form.Group
              className="mb-3 w-100"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Bilde</Form.Label>
              <Form.Control type="file" placeholder="Title" />
            </Form.Group> */}

            <Button variant="success mb-3 w-100" type="submit" onClick={handleCreatePost}>
              Publiser
            </Button>
          </Form>
          <Alert show={isError} onClose={() => setIsError(false)} variant="danger" dismissible>
            <Alert.Heading>Det mangler noe informasjon!</Alert.Heading>

            <p>
              {errorText}
            </p>
          </Alert>
          <Alert show={IsSuccess} onClose={() => setSuccess(true)} variant="success" dismissible>
            <Alert.Heading>Annonse publisert!</Alert.Heading>
            </Alert>

        </div>
        <div className="col">
          <h3 className="m-5">Hvordan ser en typisk annonse ut?</h3>
          <Post />
        </div>
      </div>
    </Container>
  );
}

export default CreatePosts;
