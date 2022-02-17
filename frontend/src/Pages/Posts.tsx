import React from "react";
import Menylinje from "../features/Menylinje";
import CreatePosts from "../features/createpostpage/CreatePosts";
import '../stylesheets/Posts.css';

function Posts() {
    return (
        <div className='flexbox-container'>
            <div className='flexbox-item flexbox-item-1'>
                <Menylinje />  
            </div>
            <div className="flexbox-item">
                <div className="item navbar_top"> 
                    <h1 style={{ color: "rgb(100, 176, 145)"}}>Lag to post</h1>
                    
                </div>
                <div className="flexbox-item content">
                <CreatePosts/>
                </div>
            </div>
        </div>
    );
}

export default Posts;