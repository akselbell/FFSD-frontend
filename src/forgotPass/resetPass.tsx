import queryString from "query-string";
import { resetPass } from "../store/user";
import "./resetPass";
import React from "react";
import { useLocation } from "react-router-dom";

function ResetPass() {

    return <>
        <form className="login" onSubmit={(e) => {
            const password = (document.getElementById("pass") as HTMLInputElement).value;
            const { token } = queryString.parse(useLocation().search) as any; 
            
            resetPass(token, password);
            return;
        }}>
            <div className="loginTitle">Reset Password</div>
                <label htmlFor="pass">New Password: </label>
                <input id="pass" type="text" name="pass" required />

                {/*add this twice and see if they match*/}

                <input className="loginButton" type="submit" value="Submit" />
        </form>
    </>;
}

export default ResetPass;