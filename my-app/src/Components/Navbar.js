import React from "react";
import "./Navbar.css"

function Navbar (props) {

        return (

        <div className="container-fluid">
            <div className="jumbotron shadow-lg mb-5 bg-white rounded">
                <div className="row topRow">
                    <div className="col-6">
                        <h1 className="display-5 text-left">Clicky Game</h1> 
                    </div>
                    <div className="col-6">
                        <h3 className="text-right"> Score: {props.score} | High Score: {props.highScore}</h3>
                    </div>
                </div>
                <div className="row mt-5 botRow"> 
                    <div className="col-12">
                        <h3>Click one of the images for points, but don't click the same one twice!</h3>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default Navbar;