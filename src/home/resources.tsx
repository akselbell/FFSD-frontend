import React from "react";
import "./resources.css";


function Resource(props: {image: string, alt: string, title: string, text: string}) {
    return (
    <div className="container">
        <img className="imageResource" src={props.image} alt={props.alt}/>
        <div className="resourceTitle">
            {props.title}
        </div>
        <div className="resourceText">
            {props.text}
        </div>
    </div>);
}

export default Resource;