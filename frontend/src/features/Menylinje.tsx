import React from 'react';
import '../stylesheets/Menylinje.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faBell, faPlusCircle, faCircle, faUser,faHouse} from '@fortawesome/free-solid-svg-icons';
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';


function Menylinje() {
    return (
    <nav className='navbar'> 
        <button type='button' className='button-1'>
             <span className='button__icon-1'>
                 <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </span>
            <span className='button__text-1'>Min ticketer</span>
        </button>

        <button type='button' className='button-1'>
            <span className='button__icon-2'>
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            </span>
            <span className='button__text-1'>Hjemside</span>
            
        </button>
        
        <button type='button' className='button-1'>
            <span className='button__icon-2'>
                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
            </span>
            <span className='button__text-1'>Varslinger</span>
            
        </button>

        <button type='button' className='button-1'>
        <span className='button__icon-2'>
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        </span>
        <span className='button__text-1'>Ny annonse</span>
        </button>

        <button type='button' className='button-1'>
        <span className='button__icon-2'>
             <FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
        </span>
        <span className='button__text-1'>Meldinger</span>
        </button>

       
    </nav>
  )
}

export default Menylinje
