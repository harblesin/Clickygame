import React from "react";
import "./imageStyle.css";

function Image(props){
    return <img class="shadow-lg mb-5 bg-white rounded check" src={props.url} alt=""></img>
}

export default Image;