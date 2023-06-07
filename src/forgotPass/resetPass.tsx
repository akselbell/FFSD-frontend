import queryString from "query-string";
import { resetPass } from "../store/user";
import "./resetPass";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ResetPass() {
    const [resetSuccess, setResetSuccess] = useState(false);
    const { token } = queryString.parse(useLocation().search) as any; 
    return <>
        <form className="login" onSubmit={(e) => {
            e.preventDefault();
            const password = (document.getElementById("pass") as HTMLInputElement).value;
            
            resetPass(token, password).then(v => {
                if (v.message) setResetSuccess(true);
            }).catch((error) => console.log(error));
        }}>
            <div className="loginTitle">Reset Password</div>
                <label htmlFor="pass">New Password: </label>
                <input id="pass" type="text" name="pass" required />

                {/*add this twice and see if they match*/}

                <input className="loginButton" type="submit" value="Submit" />
                {resetSuccess &&  <div>Password reset!</div>}
        </form>
    </>;
}

export default ResetPass;