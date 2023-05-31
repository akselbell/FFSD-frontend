import React from "react";
import "./join.css";
import Header from "../navBar/header";
import Navbar from "../navBar";
import { useState } from "react";
import { Link } from "react-router-dom";


function Join() {
    const [res, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        const username = (document.getElementById("uname") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        try {
            const response = await fetch("/api/signup", {   //hits the backend, fetches from localhost:80/api/login and passes that information
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            });

            const responseData = await response.json();
            if (responseData.message) {
                console.log(responseData.message);
                setResponse(responseData.message);
            }
            if (responseData.error) {
                console.log(responseData.error);
                setError(responseData.error);
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    return <>
        <Header />
        <Navbar />
        <div>
            {res ? 
            <div>
                {res}
                <br/>
                <Link className="logIn" to="/login">Log In</Link>
            </div> :
            <>
                <form className="joinForm" onSubmit={(e) => {
                    e.preventDefault();                             //prevents clearing the form for a new entry   
                    fetchData();   
                }}>
                    <label htmlFor="uname"><b>Username: </b></label>
                    <input id="uname" type="text" placeholder="Type your username" name="uname" required />

                    <label htmlFor="pass"><b>Password: </b></label>
                    <input id="password" type="password" placeholder="Type your password" name="pass" required />

                    <label htmlFor="email"><b>Email: </b></label>
                    <input id="email" type="email" placeholder="Type your email" name="email" required />

                    <input type="submit" value="send" />
                </form>
                <div>{error}</div>
            </>
            }
        </div>
    </>;
}

export default Join;