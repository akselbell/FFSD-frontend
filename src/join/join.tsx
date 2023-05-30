import React from "react";
import "./join.css";
import Header from "../navBar/header";
import Navbar from "../navBar";

function Join() {
    return <>
        <Header />
        <Navbar />
        <div>
            <form className="joinForm" onSubmit={(e) => {
                e.preventDefault();                             //prevents clearing the form for a new entry
                const username = (document.getElementById("uname") as HTMLInputElement).value;
                const password = (document.getElementById("password") as HTMLInputElement).value;
                const email = (document.getElementById("email") as HTMLInputElement).value;
                
                fetch("/api/signup", {   //hits the backend, fetches from localhost:80/api/login and passes that information
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                        email: email
                    })
                }).then((response) => {
                    console.log(response.status);

                    if(response.ok) {
                        return <div>
                            Thank you for signing up, please log in!
                        </div>;
                    }
                });
            }}>
                <label htmlFor="uname"><b>Username: </b></label>
                <input id="uname" type="text" placeholder="Type your username" name="uname" required />

                <label htmlFor="pass"><b>Password: </b></label>
                <input id="password" type="password" placeholder="Type your password" name="pass" required />

                <label htmlFor="email"><b>Email: </b></label>
                <input id="email" type="email" placeholder="Type your email" name="email" required />

                <input type="submit" value="send" />
            </form>
        </div>
    </>;
}

export default Join;