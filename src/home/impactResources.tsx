import React from "react";
import "./impactResources.css";


function ImpactResource(props: {text: string}) {
    return <div className="impactResourceContainer">
        <div className="hashtag">
            #
        </div>
        <p className="impactResourceTxt">
            {props.text}
        </p>
    </div>;
}

export default ImpactResource;