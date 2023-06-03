import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return <div className="navbar">
        <div className="navbar-cont"> {/*left side */}
            <Link className="ffsdButton" to="/"> {/*put button inside here */}
                <div id="ffsd">
                    FFSD
                </div>
            </Link>
            <div className="txtNavbar">
                {[{name: "About", href: "/about"}, {name: "Events", href: "/events"}, {name: "News", href: "/news"}, {name: "Get Involved", href: "/getinvolved"}, {name: "Advocacy", href: "/advocacy"}].map((word, index) => {
                    return <Link className="txtNavbar" to={word.href} key={index}>{word.name}</Link>;
                })}
            </div>
            <div className="right-navbar"> {/*right side */}
                <Link className="logIn" to="/login">
                    <div className="logIn">
                        Log In
                    </div>
                </Link>
                <Link className="join" to="/join">
                    <button id="join">
                        Join
                    </button>
                </Link>
            </div>
        </div> 
    </div>;
}

export default Navbar;