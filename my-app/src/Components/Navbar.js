import React, { Component } from "react";
import "./Navbar.css"

class Navbar extends Component {

    state = {
        score: 0
    }

    render(){
        return (

        <div className="container-fluid">
            <div className="jumbotron shadow-lg mb-5 bg-white rounded">
                <h1 className="display-5 text-left">Clicky Game</h1>
                <h3 className="text-center">Click one of the images for points, but don't click the same one twice!</h3>
                <h3 className="text-right"> Score: {this.state.score}</h3>
            </div>
            
        </div>
        
        )
    }
    

}
export default Navbar;