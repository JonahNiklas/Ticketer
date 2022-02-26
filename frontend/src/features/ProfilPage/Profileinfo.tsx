
import React, { useState, Component }  from "react";
import "../../stylesheets/ProfileInfo.css";
import "../../stylesheets/ProfilePage.css";
import { Button, Container, Form } from 'react-bootstrap';


function Profileinfo(){


    return (
   <div className="p-3 rounded" style={{ backgroundColor: "rgb(100, 176, 145)" }}>
                <h5 className="text-white">Navn</h5>
                <h5 className="text-white">e-post</h5>
                <h5 className="text-white">By</h5>
                <h5 className="text-white">Land</h5>
            </div>
    );
}

export default Profileinfo;