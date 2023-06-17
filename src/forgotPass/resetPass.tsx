import queryString from "query-string";
import { resetPass } from "../store/user";
import "./resetPass";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Alert } from "@mui/material";
import Navbar from "../navBar";
import Header from "../navBar/header";

function ResetPass() {
    const [error, setError] = useState("");
    const [message, setMessage] = useState(undefined);

    const { token } = queryString.parse(useLocation().search) as any; 
    return <>
        <Header/>
        <Navbar/>
        <div className="backgroundLogin">
            <div className="loginContainer">
                <form className="login" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const password = (document.getElementById("pass") as HTMLInputElement).value;
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
                        <input className="login-input" id="pass" type="password" name="pass" required />

                        <label htmlFor="confirmPass" className="login-label">Confirm Password</label>
                        <input className="login-input" id="confirmPass" type="password" name="pass" required />

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