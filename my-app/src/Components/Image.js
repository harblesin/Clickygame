import React, { Component } from "react";
import "./imageStyle.css";

class Image extends Component {

    render(){
        return (
    <div className="col-3 mb-2 p-5">
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
