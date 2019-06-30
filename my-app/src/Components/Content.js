import React from "react";
import "./rowstyle.css";

function Content(props) {
  return (
    <div className="content">
      <div className="row box">{props.children}</div>
    </div>
  );
}

export default Content;
