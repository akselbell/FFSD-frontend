import React from "react";
import "./notfound.css";
import Navbar from "../navBar";
import Header from "../navBar/header";

function NotFound(){
    return <>
        <Header/>
        <Navbar/>
        <div className="not-found">
            <div><code className="error-status">404</code></div>
            {window.location.pathname} doesn{"'"}t exist
        </div>
    </>;
}

export default NotFound;