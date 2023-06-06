import "./resetPass";
import React from "react";

function ResetPass() {

    return <>
        <form className="login" onSubmit={(e) => {
            //send email
            return;
        }}>
            <div className="loginTitle">Reset Password</div>
                <label htmlFor="email">New Password: </label>
                <input id="email" type="text" name="email" required />

                {/*add this twice and see if they match*/}

                <input className="loginButton" type="submit" value="Submit" />
        </form>
    </>;
}

export default ResetPass;