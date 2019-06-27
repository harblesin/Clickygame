import React, { Component } from "react";
import "./imageStyle.css";

class Image extends Component {

    state = {
        clicked: false
    }

    imgClicked = () => {
        console.log("this")
        console.log(this.state.clicked)
        this.setState({clicked: true})
        console.log(this.state.clicked)
    }

    render(){
        return (
    <div className="col-auto mx-auto p-5">
      <img
        className="shadow-lg mb-5 bg-white rounded check"
        src={this.props.url}
        alt=""
        //onClick={() => this.props.imageClicked(this.props.id)}
      />
    </div>
  );
}
    }
  

export default Image;
