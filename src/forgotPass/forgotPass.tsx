import { error } from "console";
import { forgotPass } from "../store/user";
import "./forgotPass.css";
import React, { useState } from "react";

function ForgotPass() {
    const [emailSent, setEmailSent] = useState(false);

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
                {emailSent && <div>email sent sucessfully</div>}
        </form>
    </>;
}

export default ForgotPass;