import React, { useState } from "react";
import "./login.css";
import Header from "../navBar/header";
import Navbar from "../navBar";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, setUser, userStateT } from "../store/user";
import { Link } from "react-router-dom";
import { Alert } from '@mui/material';
import { Icon } from 'react-icons-kit';
import { eye, eyeOff } from 'react-icons-kit/feather';
/*
    dispatch(setUser({username: "bruh"} as userT))
    
    SAME AS
    
    dispatch({
        "type": "user_state/setUser",
        "payload": {
            "username": "bruh"
        }
    })
    input {
    background-color: #F6F6F6;
    width: 473px;
    height: 48px;
    box-sizing: border-box;
    border: 1px solid #A2A2A2;
    border-radius: 4px;
    margin-top: 8px;
    margin-bottom: 24px;

    font-family: "Inter";
    padding-left: 10px;
    font-size: 16px;
}
*/

function LogIn() {
    const [error, setError] = useState<string | null>(null);
    const [viewPass, setViewPass] = useState<string>('password');
    const [icon, setIcon] = useState(eyeOff);

    const dispatch = useDispatch();
    const user = useSelector((s: {user_state: userStateT}) => s.user_state.user);//this gets the state from user.ts
    
    const handleClick = () => {
        if(viewPass === 'password') {
            setIcon(eye);
            setViewPass('text');
            return;
        }
        setIcon(eyeOff);
        setViewPass('password');
    };

    return <>
        <Header />
        <Navbar />
        {user ?
            <>
                Hello {user.username}!
                <div>
                    <div>Login sucessfull!</div>
                    <button onClick={() => {
                        dispatch(logout());
                    }}>logout</button>
                </div>
            </>
            :
            <div className="backgroundLogin">
                <div className="loginContainer">
                    <form className="login" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const username = (document.getElementById("uname") as HTMLInputElement).value;
                        const password = (document.getElementById("password") as HTMLInputElement).value;
                        
                        login(username, password).then((userVal: any) => {
                            if(typeof userVal === "string") {
                                form.reset();
                                setError(userVal);
                                return;
                            }
                            if (!userVal.stripe_id || !userVal.expiration_date || userVal.expiration_date <= new Date()) {
                                dispatch(setUser(userVal));
                                window.location.href = "/join";
                            }
                            dispatch(setUser(userVal));
                        });

                    }}>
                        {error && <Alert className="login-error" severity="error">{error}</Alert>}

                        <div className="loginTitle">Login</div>
                        <label className="login-label" htmlFor="uname">Username </label>
                        <input id="uname" type="text" className="login-input" name="uname" required />
                            
                        <label className="login-label" htmlFor="pass">Password </label>
                        
                        <span className="login-input passWrapper">
                            <input className="hidden-input" id="password" type={viewPass} name="pass" required />

                            <Icon style={{cursor: "pointer"}} icon={icon} onClick={handleClick} size={22}/>
                        </span>
                            
                        <input className="loginButton" id="join" type="submit" value="Login" />

                        <div className="notMember">Not a member? <Link className="joinLogin" to="/join">Join</Link></div>
                        
                        <Link className="forgotPass" to="/forgot">Forgot Password?</Link>
                    </form>
                </div>
            </div>
            }
        <div className="footer"></div>
    </>;
}

export default LogIn;