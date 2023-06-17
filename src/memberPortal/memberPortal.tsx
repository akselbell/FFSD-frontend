import React from "react";
import Header from "../navBar/header";
import Navbar from "../navBar";
import "./memberPortal.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function MemberPortal() {
    //const user = useSelector((s: {user_state: userStateT}) => s.user_state.user);//this gets the state from user.ts
    const user = useSelector((s: any) => s.user_state.user);//this gets the state from user.ts

    return <div>
        <Header/>
        <Navbar/>
        {user ? (<div>
            Welcome to the user portal!
        </div>) : (<Navigate to="/join" />)

        }

    </div>;
}

export default MemberPortal;