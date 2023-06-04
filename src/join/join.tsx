import React from "react";
import "./join.css";
import Header from "../navBar/header";
import Navbar from "../navBar";
import { Link } from "react-router-dom";
import { signUp, userT } from "../store/user";
import { useSelector } from "react-redux";

function Join() {
    const user: null | userT = useSelector((s: any)=> s.user_state.user); // how to access state
    if (user) {                                                           //redirects to home if logged in alread
        window.location.href = "/";
        return <></>;
    }

    return <>
        <Header />
        <Navbar />
        <div>
            <form className="joinForm" onSubmit={(e) => {
                e.preventDefault();                             //prevents clearing the form for a new entry   
                const username = (document.getElementById("uname") as HTMLInputElement).value;
                const password = (document.getElementById("password") as HTMLInputElement).value;
                const email = (document.getElementById("email") as HTMLInputElement).value;
                
                signUp(username, password, email).then(v => { // signUp only returns a string error if occurred
                    if(typeof v === "string") return console.error(v);
                    window.location.href =  "/login";
                }).catch(err => {
                    console.log(err);
                });  
            }}>
                <label htmlFor="uname"><b>Username: </b></label>
                <input id="uname" type="text" placeholder="Type your username" name="uname" required />

                <label htmlFor="pass"><b>Password: </b></label>
                <input id="password" type="password" placeholder="Type your password" name="pass" required />

                <label htmlFor="email"><b>Email: </b></label>
                <input id="email" type="email" placeholder="Type your email" name="email" required />

                <input type="submit" value="send" />
            </form>
            
        </div>
    </>;
}

export default Join;