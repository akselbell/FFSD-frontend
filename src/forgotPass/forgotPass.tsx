import { error } from "console";
import { forgotPass } from "../store/user";
import "./forgotPass.css";
import React, { useState } from "react";
import { Alert } from '@mui/material';

function ForgotPass() {
    const [emailSent, setEmailSent] = useState(false); //change this to message, so it just displays whichever message is posted

    return <>
        <form className="login" onSubmit={(e) => {
            e.preventDefault();
            const email = (document.getElementById("email") as HTMLInputElement).value;
            forgotPass(email).then(v => {
                if (!v.error) setEmailSent(true);
            }).catch(error => console.log(error));
        }}>
            <div className="loginTitle">Forgot Password</div>
                <label htmlFor="email">Email: </label>
                <input id="email" type="text" name="email" required />

                <input className="loginButton" type="submit" value="Submit" />
                {emailSent && <Alert severity="success">email sent successfully!</Alert>}
        </form>
    </>;
}

export default ForgotPass;