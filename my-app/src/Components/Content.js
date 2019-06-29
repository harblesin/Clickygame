import React from "react";
import "./content.css"

function Content(props) {
  return (
    <div className="content">
      <div className="row">{props.children}</div>
    </div>
  );
}

export default Content;
