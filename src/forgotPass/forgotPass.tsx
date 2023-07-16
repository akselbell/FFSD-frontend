import { error } from "console";
import { forgotPass } from "../store/user";
import "./forgotPass.css";
import React, { useState } from "react";
import { Alert } from '@mui/material';
import { Link } from "react-router-dom";
import Header from "../navBar/header";
import Navbar from "../navBar";

function ForgotPass() {
    const [error, setError] = useState(undefined); 
    const [message, setMessage] = useState(undefined);

    return <>
        <Header/>
        <Navbar/>
        <div className="backgroundLogin">
            <div className="loginContainer">
                <form className="forgotPassLabels" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const email = (document.getElementById("emailForgotPass") as HTMLInputElement).value;
                    forgotPass(email).then(v => {
                        if (v.error) {
                            setError(v.error); 
                            setMessage(undefined);
                        }
                        else if (v.message) {
                            setMessage(v.message);
                            setError(undefined);
                        }
                        form.reset();
                    }).catch(error => console.log(error));
                }}>
                    <div className="loginTitle">Forgot Password?</div>
                        <div className="forgotPassTxt">Enter your email to receive a link to reset your password.</div>
                        <label htmlFor="email" className="login-label" id="forgotLabel">Email</label>
                        <input className="login-input" id="emailForgotPass" type="text" name="email" required />

                        <input className="loginButton" type="submit" id="join" value="Submit" />
                        <div className="notMember" id="forgotPassPage">Remembered your password? <Link className="joinLogin" to="/login">Login</Link></div>
                        {error && <Alert severity="error">{error}</Alert>}
                        {message && <Alert severity="success">{message}</Alert>}
                </form>
            </div>
        </div>
        <div className="footer"></div>
    </>;
}

export default ForgotPass;