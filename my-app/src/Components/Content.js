import React from "react";

function Content(props) {
  return (
    <div className="content">
      <div className="row mx-auto">{props.children}</div>
    </div>
  );
}

export default Content;
