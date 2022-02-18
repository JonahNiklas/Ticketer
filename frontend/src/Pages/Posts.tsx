import React from "react";

import Menylinje from "../features/Menylinje";
import CreatePosts from "../features/createpostpage/CreatePosts";
import '../stylesheets/Posts.css';
import  logo  from "../Pictures/TicketerLogo.png";


function Posts() {
    return (
        <div className='flexbox-container'>
            <div className='flexbox-item flexbox-item-1'>
                <Menylinje />  
            </div>

            <div className="item">

                <div className="item navbar_top"> 
                    <div className="LogoPlacement">
                        <img src={logo} alt="hssds" />
                     </div>
                </div>

                <div className="item content">
                    <CreatePosts/>
                </div>
            </div>
        </div>
    );
}

export default Posts;