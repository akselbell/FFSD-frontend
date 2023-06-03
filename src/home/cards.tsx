import React from "react";
import "./cards.css";

function Card(props: {title: string, image: string, alt: string}) {
    return <div className="card">
        <div className="cardTitle">
            {props.title}
        </div>
        <img className="imageCard" src={props.image} alt={props.alt}/>
    </div>;
}

export default Card;