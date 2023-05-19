import React from "react";
import "./navBar.css";

function Navbar() {
    return (
    <div className="navbar">
        <div className="left-navbar"> {/*left side */}
            <div id="ffsd">
                FFSD
            </div>
            {[{name: "About"}, {name: "Resources"}, {name: "Events"}, {name: "Impact"}, {name: "Sponsors"}].map((word, index) => { //add link field for each bracket
                return <a key={index}>{word.name}</a>;
            })}
        </div> 
        <div> {/*right side */}

        </div>

    </div>);
}

export default Navbar;