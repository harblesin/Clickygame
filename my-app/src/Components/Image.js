import React, { Component } from "react";
import "./imageStyle.css";

class Image extends Component {

    render(){
        return (
    <div className="col-auto mb-2 imgDiv">
      <img
        className="shadow-lg bg-white rounded check"
        src={this.props.url}
        alt=""
        onClick={() => this.props.imageClicked(this.props.id)}
      />
    </div>
  );
}
    }
  

export default Image;
