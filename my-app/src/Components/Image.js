import React from "react";
import "./imageStyle.css";

function Image(props) {
  return (
    <div className="col-auto mx-auto p-5">
      <img
        className="shadow-lg mb-5 bg-white rounded check"
        src={props.url}
        alt=""
        onClick={() => props.imageClicked(props.id)}
      />
    </div>
  );
}

export default Image;
