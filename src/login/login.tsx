import React, { useState } from "react";
import "./login.css";
import Header from "../navBar/header";
import Navbar from "../navBar";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, setUser, userStateT } from "../store/user";
import { Link } from "react-router-dom";
import { Alert } from '@mui/material';
import { Icon } from 'react-icons-kit';
import { EyeOff, Eye } from 'feather-icons-react';
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
    const [error, setError] = useState<string | null>(null);
    const [viewPass, setViewPass] = useState('password');
    const [icon, setIcon] = useState(EyeOff);

    const dispatch = useDispatch();
    const user = useSelector((s: {user_state: userStateT}) => s.user_state.user);//this gets the state from user.ts
    
    const handleClick = () => {
        if(viewPass === 'password') {
            setIcon(Eye);
            setViewPass('text');
        }
        else {
            setIcon(EyeOff);
            setViewPass('password');
        }
    };

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
                                if(typeof userVal === "string") {
                                    setError(userVal);
                                    return;
                                }
                                dispatch(setUser(userVal));
                            });

                        }}><div className="loginTitle">Login</div>
                            <label htmlFor="uname">Username: </label>
                            <input id="uname" type="text" name="uname" required />
                                
                            <label htmlFor="pass">Password: </label>
                            <input id="password" type={viewPass} name="pass" required />
                            
                            <span onClick={handleClick}><Icon icon={icon} size={22} /></span>

                            <input className="loginButton" type="submit" value="Login" />

                            {error && <Alert severity="error">{error}</Alert>}

                            <div className="notMember">Not a member? <Link className="joinLogin" to="/join">Join</Link></div>
                            
                            <Link className="forgotPass" to="/forgot">Forgot Password?</Link>
                        </form>
                    </div>
                </div>
                }
        </div>
        <div className="footerLogin"></div>
    </>;
}

export default LogIn;