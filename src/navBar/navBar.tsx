import React from "react";
import "./navBar.css";

function Navbar() {
    return (
    <div className="navbar">
        <div className="left-navbar"> {/*left side */}
            <div className="ffsdButton"> {/*put button inside here */}
                <div id="ffsd">
                    FFSD
                </div>
            </div>
            <div className="txtNavbar">
                {[{name: "About"}, {name: "Resources"}, {name: "Events"}, {name: "Impact"}, {name: "Sponsors"}].map((word, index) => { //add link field for each bracket
                    return <a key={index}>{word.name}</a>;
                })}
            </div>
        </div> 
        <div> {/*right side */}

        </div>

    </div>);
}

export default Navbar;