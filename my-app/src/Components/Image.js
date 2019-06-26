import React, { Component } from "react";
import "./imageStyle.css";

class Image extends Component {

    state = {
        clicked: false
    }

    render(){
        return (
    <div className="col-auto mx-auto p-5">
      <img
        className="shadow-lg mb-5 bg-white rounded check"
        src={this.props.url}
        alt=""
        onClick={() => this.props.imageClicked(this.props.id)}
      />
    </div>
  );
}
    }
  

export default Image;
