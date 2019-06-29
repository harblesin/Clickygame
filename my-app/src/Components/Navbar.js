import React from "react";
import "./Navbar.css"

function Navbar (props) {

        return (

        <div className="container-fluid">
            <div className="jumbotron shadow-lg mb-5 bg-white rounded">
                <h1 className="display-5 text-left">Clicky Game</h1>
                <h3 className="text-center">Click one of the images for points, but don't click the same one twice!</h3>
                <h3 className="text-right"> Score: {props.score} | High Score: {props.highScore}</h3>
            </div>
            
        </div>
        
        )
    

}
export default Navbar;