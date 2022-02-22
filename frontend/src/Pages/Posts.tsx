import React from "react";

import Menylinje from "../features/Menylinje";
import CreatePosts from "../features/createpostpage/CreatePosts";
import '../stylesheets/Posts.css';
import  logo  from "../Pictures/TicketerLogo.png";
import Header from "../features/homepage/Header";
import Footer from "../features/homepage/Footer";


function Posts() {
    return (
        <div>
        <div>
           <div>
             <Menylinje/>
           </div>
        </div>
           <div>
            <Header/>
            <CreatePosts/>
            <Footer/>
           </div>
       
     </div>
    );
}

export default Posts;