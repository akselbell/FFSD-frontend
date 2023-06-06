import React from "react";
import "./login.css";
import Header from "../navBar/header";
import Navbar from "../navBar";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, setUser, userStateT, userT } from "../store/user";
import { Link } from "react-router-dom";
/*
    dispatch(setUser({username: "bruh"} as userT))
    
    SAME AS
    
    dispatch({
        "type": "user_state/setUser",
        "payload": {
            "username": "bruh"
        }
    })
*/

function LogIn() {
    const dispatch = useDispatch();
    const user = useSelector((s: {user_state: userStateT}) => s.user_state.user);       //this gets the state from user.ts
    
    return <>
        <Header />
        <Navbar />
        <div>
            {user ? "Hello " + user.username : ""}
            {user ?
                <div>
                    <div>Login sucessfull!</div>
                    <button onClick={() => {
                        dispatch(logout());
                    }}>logout</button>
                </div>
                :
                <div className="backgroundLogin">
                    <div className="loginContainer">
                        <form className="login" onSubmit={(e) => {
                            e.preventDefault();                             //prevents clearing the form for a new entry
                            const username = (document.getElementById("uname") as HTMLInputElement).value;
                            const password = (document.getElementById("password") as HTMLInputElement).value;
                            
                            login(username, password).then(userVal => {
                                if(typeof userVal === "string") return console.error(userVal);
                                dispatch(setUser(userVal));
                            });

                        }}><div className="loginTitle">Login</div>
                            <label htmlFor="uname">Username: </label>
                            <input id="uname" type="text" name="uname" required />
        
                            <label htmlFor="pass">Password: </label>
                            <input id="password" type="password" name="pass" required />
        
                            <input className="loginButton" type="submit" value="Login" />

                            <Link className="joinLoginButton" to="/forgot">
                                <button className="joinLoginButton">Forgot Password?</button>
                            </Link>

                        </form>
                            {/*<Link className="joinLoginButton" to="/join">Join</Link>*/}
                        {/*<div>{error}</div>*/}
                    </div>
                </div>
                }
        </div>
        <div className="footerLogin"></div>
    </>;
}

export default LogIn;