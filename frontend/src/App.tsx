import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Menylinje from "./Menylinje";
import { Nav } from './Menylinje';




function App(){
  return(
    <div className="App">
      <Menylinje />
      <Nav/>
    </div>
);

}

export default App;