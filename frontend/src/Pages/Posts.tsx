import React from "react";
import Menylinje from "../Components/Menylinje";
import CreatePosts from "../Components/CreatePosts";
import './Posts.css';
import  logo  from "../Pictures/TicketerLogo.png";

function Posts() {
    return (
        <div className='flexbox-container'>
            <div className='item one'>
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