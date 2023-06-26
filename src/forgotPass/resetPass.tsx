import queryString from "query-string";
import { resetPass } from "../store/user";
import "./resetPass";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Alert} from "@mui/material";
import Navbar from "../navBar";
import Header from "../navBar/header";
import { Icon } from 'react-icons-kit';
import { eye, eyeOff } from 'react-icons-kit/feather';

function ResetPass() {
    const [error, setError] = useState("");
    const [message, setMessage] = useState(undefined);
    const [viewPass1, setViewPass1] = useState<string>('password');
    const [viewPass2, setViewPass2] = useState<string>('password');
    const [icon1, setIcon1] = useState(eyeOff);
    const [icon2, setIcon2] = useState(eyeOff);

    const handleClick1 = () => {
        if(viewPass1 === 'password') {
            setIcon1(eye);
            setViewPass1('text');
            return;
        }
        setIcon1(eyeOff);
        setViewPass1('password');
    };

    const handleClick2 = () => {
        if(viewPass2 === 'password') {
            setIcon2(eye);
            setViewPass2('text');
            return;
        }
        setIcon2(eyeOff);
        setViewPass2('password');
    };

    const { token } = queryString.parse(useLocation().search) as any; 
    return <>
        <Header/>
        <Navbar/>
        <div className="backgroundLogin">
            <div className="loginContainer">
                <form className="login" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const password = (document.getElementById("password") as HTMLInputElement).value;
                    const confirmPass = (document.getElementById("confirmPass") as HTMLInputElement).value;
                    setError("");
                    setMessage(undefined);
                    if (password === confirmPass) {
                        resetPass(token, password).then(v => {
                            if (v.error) setError(v.error);
                            if(v.message) setMessage(v.message);
                            form.reset();
                        }).catch((error) => console.log(error));
                        return;
                    }
                    setError("Passwords do not match!");
                }}>
                    <div className="loginTitle">Reset Password</div>
                        <label htmlFor="pass" className="login-label">New Password</label>
                        <span className="login-input passWrapper">
                            <input className="hidden-input" id="password" type={viewPass1} name="pass" required />

                            <Icon style={{cursor: "pointer"}} icon={icon1} onClick={handleClick1} size={22}/>
                        </span>

                        <label htmlFor="confirmPass" className="login-label">Confirm Password</label>
                        <span className="login-input passWrapper">
                            <input className="hidden-input" id="confirmPass" type={viewPass2} name="pass" required />

                            <Icon style={{cursor: "pointer"}} icon={icon2} onClick={handleClick2} size={22}/>
                        </span>

                        <input className="loginButton" type="submit" value="Submit" />
                        {error && <Alert severity="error">{error}</Alert>}
                        {message && <div id="PassResetSent"><Alert severity="success">{message}</Alert></div>}
                </form>
            </div>
        </div>
        <div className="footer"/>
    </>;
}

export default ResetPass;