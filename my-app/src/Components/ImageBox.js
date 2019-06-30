import React, { Component } from "react";
import ("./imageBoxStyle.css");

class ImageBox extends Component {
    render() {
        return (
            <div className="holder">
                <img src={this.props.win} alt=""></img>
            <h1 className="congrat">{this.props.winMessage}</h1>
            <h1 className="clickMe" onClick={this.props.reset}>{this.props.clickMe}</h1>
            </div>
            
        )
    }
}

export default ImageBox;