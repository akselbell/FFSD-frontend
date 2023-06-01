import React, { useEffect } from "react";
import "./login.css";
import Header from "../navBar/header";
import Navbar from "../navBar";
import { useState } from "react";

function LogIn() {                                      //clean this up using .then instead
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(null);

   function fetchData() {
        const username = (document.getElementById("uname") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        fetch("/api/login", 
        {   //hits the backend, fetches from localhost:80/api/login and passes that information
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) setLoggedIn(true);
                if (data.error) {
                    setLoggedIn(false);
                    setError(data.error);
                }
            })
            .catch((err) => {console.log(err);});
    }

    useEffect(() => {                       //calls the callback every time the array of dependencies changes
        fetch("/api/login")
            .then((res) => res.json())
            .then((data) => {
                if (data.username) setLoggedIn(true);
                if (data.error) {
                    setError(data.error);
                }
            })
            .catch((err) => {console.log(err);});
    }, []);

    function logOut() {
        fetch("/api/signout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                setLoggedIn(false);
            }
            if (data.error) {
                setError(data.error);
                setLoggedIn(true);
            }
        })
        .catch(error => console.log(error));
    }

    return <>
        <Header />
        <Navbar />
        <div>
            {loggedIn ?
                <div>
                    <div>Login sucessfull!</div>
                    <button onClick={() => {
                        logOut();
                    }}>logout</button>
                </div>
                :
                <div>
                    <form className="login" onSubmit={(e) => {
                        e.preventDefault();                             //prevents clearing the form for a new entry
                        fetchData();
                    }}>
                        <label htmlFor="uname"><b>Username: </b></label>
                        <input id="uname" type="text" placeholder="Type your username" name="uname" required />
    
                        <label htmlFor="pass"><b>Password: </b></label>
                        <input id="password" type="password" placeholder="Type your password" name="pass" required />
    
                        <input type="submit" value="send" />
                    </form>
                    <div>{error}</div>
                </div>
                
            }
        </div>
    </>;
}

export default LogIn;