import React, { Component } from "react";
import "./Navbar.css"

class Navbar extends Component {

    state = {
        score: 0
    }

    render(){
        return (<navbar className="navbar navbar-dark bg-dark">
            Here is a test for the navbar using React
        </navbar>)
    }
    

}

export default Navbar;