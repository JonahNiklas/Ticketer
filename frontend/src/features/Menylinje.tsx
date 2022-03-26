import React from 'react';
import '../stylesheets/Menylinje.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faUser,
  faHouse,
  faSignOut
} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { persist, store } from '../redux/store';
import { deleteUserId } from '../redux/userSlice';
import { deleteToken } from '../redux/tokenSlice';

function Menylinje() {
  const history = useHistory();

  return (
    <nav className="sidebar">
      <Link to="/profile" className="link">
        <button type="button" className="button-1" name="Sted">
          <span className="button__icon-1">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </span>
          <span className="button__text-1">Min ticketer</span>
        </button>
      </Link>

      <Link to="/home" className="link">
        <button type="button" className="button-1" name="Sted">
          <span className="button__icon-2">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
          </span>
          <span className="button__text-1">Hjemside</span>
        </button>
      </Link>

      <Link to="/posts" className="link">
        <button type="button" className="button-1" name="Sted">
          <span className="button__icon-2">
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
          </span>
          <span className="button__text-1">Ny annonse</span>
        </button>
      </Link>

      <Link
        to="/login"
        className="link"
        onClick={() => {
          store.dispatch(deleteUserId);
          store.dispatch(deleteToken);
          persist.purge();
          history.push('/login');
        }}
      >
        <button type="button" className="button-1" name="Sted">
          <span className="button__icon-2">
            <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
          </span>
          <span className="button__text-1">Logg ut</span>
        </button>
      </Link>
    </nav>
  );
}

export default Menylinje;
