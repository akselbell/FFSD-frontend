import React from "react";
import "./login.css";
import Header from "../navBar/header";
import Navbar from "../navBar";

function LogIn() {
    return <>
        <Header />
        <Navbar />
        <div>
            <form className="login" onSubmit={(e) => {
                e.preventDefault();
                const username = (document.getElementById("uname") as HTMLInputElement).value;
                const password = (document.getElementById("password") as HTMLInputElement).value;
                
                fetch("/api/login", {   //hits the backend, fetches from localhost:80/api/login and passes that information
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    })
                });
            }}>
                <label htmlFor="uname"><b>Username: </b></label>
                <input id="uname" type="text" placeholder="Type your username" name="uname" required />

                <label htmlFor="pass"><b>Password: </b></label>
                <input id="password" type="password" placeholder="Type your password" name="pass" required />

                <input type="submit" value="send" />
            </form>
        </div>
    </>;
}

export default LogIn;