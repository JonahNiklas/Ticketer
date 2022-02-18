
import React from 'react';
import Menylinje from '../Menylinje';
import '../../stylesheets/Posts.css';
import '../../stylesheets/ProfilePage.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import Profileinfo from './Profileinfo';
import UserPosts from './UserPosts';
import '../../stylesheets/ProfileInfo.css';



function ProfilePage() {
    return(
      /* Menylinjen */
      <div className='flexbox-container'>
        <div className='flexbox-item flexbox-item-1'> <Menylinje/></div>
        <div className='flexbox-item'>
        

          <div className='flexbox-container-coloum'> 
        
            <div className='flexbox-item-topbox'> {/* Toppen av siden, inkl profilbilde osv.. */}

             <button type='button' className='button-10'>
                <span className='profiletext'> Endre profilbilde </span>
                <span className='button__icon-10'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span>
              </button>

           </div>
          


          {/* Raden på bunnen, inneholder to bokser */}
          <div className='flexbox-item-bottombox'>
            <div className='flexbox-container-row'>

                {/* Boks 1: Profilinformasjon */}
              <div className='flexbox-item-row-1'> 
              <span className='text-info'> <Profileinfo/> </span>
              </div> 

              <div className='flexbox-item-row-1'> <UserPosts/> </div>

              </div>
              
            
          </div>


        </div>
        </div>
      </div>
    );
  }
  
  export default ProfilePage;