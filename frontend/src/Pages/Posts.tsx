import React from "react";
import Menylinje from "../Components/Menylinje";
import CreatePosts from "../Components/CreatePosts";
import './Posts.css';

function Posts() {
    return (
        <div className='flexbox-container'>
            <div className='item one'>
                <Menylinje />  
            </div>
            <div className="item">
                <div className="item navbar_top"> 
                    <h1 style={{ color: "rgb(100, 176, 145)"}}>Lag to post</h1>
                    
                </div>
                <div className="item content">
                <CreatePosts/>
                </div>
            </div>
        </div>
    );
}

export default Posts;