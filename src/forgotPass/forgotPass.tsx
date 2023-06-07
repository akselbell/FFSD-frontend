import { error } from "console";
import { forgotPass } from "../store/user";
import "./forgotPass.css";
import React, { useState } from "react";
import { Alert } from '@mui/material';

function ForgotPass() {
    const [error, setError] = useState(undefined); 
    const [message, setMessage] = useState(undefined);

    return <>
        <form className="login" onSubmit={(e) => {
            e.preventDefault();
            const email = (document.getElementById("email") as HTMLInputElement).value;
            forgotPass(email).then(v => {
                if (v.error) {
                    setError(v.error); 
                    setMessage(undefined);
                }
                else if (v.message) {
                    setMessage(v.message);
                    setError(undefined);
                }
            }).catch(error => console.log(error));
        }}>
            <div className="loginTitle">Forgot Password</div>
                <label htmlFor="email">Email: </label>
                <input id="email" type="text" name="email" required />

                <input className="loginButton" type="submit" value="Submit" />
                {error && <Alert severity="error">{error}</Alert>}
                {message && <Alert severity="success">{message}</Alert>}
        </form>
    </>;
}

export default ForgotPass;