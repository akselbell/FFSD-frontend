import React from "react";
import "./header.css";

function Header() {
    return <div className="header"> 
        <div className="headerBox">
            <div className="headerTxt">
                {[{name: "Facebook"}, {name: "Instagram"}, {name: "###-####"}, {name: "Email"}].map((word, index) => {
                   return <a key={index}>{word.name}</a>;
                })
            }
            </div>
        </div>
    </div>;
}

export default Header;