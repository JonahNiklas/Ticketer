import React, { Fragment, useState } from 'react';


function Test() {
  const [info, setInfo] = useState("empty");
  const [input, setInput] = useState("500");


  async function schmeckers() {
    
    const response = await fetch('http://localhost:5001/user/'+input);

    if(!response.ok){
      const message = `An error has occured: ${response.status}`;
      setInfo(message);
      return;
    }
    const body = await response.json();
    // const {id, firstName, lastName, email} = body;
    // const message = `User ${id}\nFirstname: ${firstName}:\nLastName: ${lastName}:\nEmail: ${email}\n`;

    setInfo('User:\n'+JSON.stringify(body, null, '\n\t'));
  }

  return (
    <>
      <input type="text" name="" id="" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => schmeckers()}>Click me</button>
      <div><pre>{info}</pre></div>
    </>
  );
}

export default Test;