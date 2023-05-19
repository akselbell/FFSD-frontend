import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

const Logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png";

export default function Navbar() {
    return <div>
        <div className="navbar">
            <div className="leftSide">
                <img alt="logo" className="logo" src={Logo}/>
            </div>
            <div className="middle">
                <Link className="nav" to="/">Home</Link>;
                <Link to="/menu" className="nav">Menu</Link>;
                <Link to="/about" className="nav">About</Link>;
                <Link to="/contact" className="nav">Contact</Link>;
            </div>
        </div>
    </div>;
}
