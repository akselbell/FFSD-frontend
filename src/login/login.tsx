import React, { useEffect } from "react";
import "./login.css";
import Header from "../navBar/header";
import Navbar from "../navBar";
import { useState } from "react";

function LogIn() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        const username = (document.getElementById("uname") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;
        try {
            const response = await fetch("/api/login", {   //hits the backend, fetches from localhost:80/api/login and passes that information
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            });

            const responseData = await response.json();
            
            if (responseData.message) setLoggedIn(true);
            if (responseData.error) {
                setLoggedIn(false);
                setError(responseData.error);
            }
        }  catch (error) {
            console.log(error);
            return null;
        }
    };

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const response = await fetch("/api/login", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const responseData = await response.json();
                if (responseData.message) setLoggedIn(true);
                if (responseData.error) {
                    setLoggedIn(false);
                    setError(responseData.error);
                }
            } catch (error) {
                console.log(error);
                return null;
            }
        };
        checkStatus();
    }, []);

    const logOut = async () => {
        try {
            const response = await fetch("/api/signout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const responseData = await response.json();
            if (responseData.message) setLoggedIn(false);
            if (responseData.error) {
                setError(responseData.error);
                setLoggedIn(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

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