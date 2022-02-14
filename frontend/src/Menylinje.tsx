import React from 'react';
import './Menylinje.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faPlusCircle,faCircle} from '@fortawesome/free-solid-svg-icons';
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

export const Nav = styled.div`
width: 10.833%;
height: 100%;
background-color: rgb(100, 176, 145);
position: fixed;
`;


function Menylinje() {
    return (
    <div >
        <button type='button' className='button-1'>
             <span className='button__icon-1'>
                 <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
            </span>
            <span className='button__text-1'>Min ticketer</span>
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
    </div>
  )
}

export default Menylinje