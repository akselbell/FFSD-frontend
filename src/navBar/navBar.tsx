import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
    <div className="navbar">
        <div className="navbar-cont"> {/*left side */}
            <div className="ffsdButton"> {/*put button inside here */}
                <div id="ffsd">
                    FFSD
                </div>
            </div>
            <div className="txtNavbar">
                {[{name: "About", href: "/about"}, {name: "Events", href: "/events"}, {name: "News", href: "/news"}, {name: "Get Involved", href: "/getinvolved"}, {name: "Advocacy", href: "/advocacy"}].map((word, index) => {
                    return <Link className="txtNavbar" to={word.href} key={index}>{word.name}</Link>;
                })}
            </div>
            <div className="right-navbar"> {/*right side */}
                <div className="logIn">
                    Log In
                </div>
                <button className="join">
                    Join
                </button>
            </div>
        </div> 
        

    </div>);
}

export default Navbar;