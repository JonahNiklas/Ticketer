
import React from "react";
import "../../stylesheets/ProfileInfo.css";
import "../../stylesheets/ProfilePage.css";



function Profileinfo(){
    return (
        <div>
            <div>

                <br />
                <span className=".text-info"> Navn: <input
                        type="textarea"/> </span>
                <br />
                Email: <input type="textarea" />
                <br />
                Score: <input type="textarea" />
                <br />
                Country: <input type="textarea" />
                <br />
                City: <input type="textarea" />


            </div>
        </div>

    );
}

export default Profileinfo;