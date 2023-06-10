import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function VerifyEmail () {
    const { token } = queryString.parse(useLocation().search);     //returns an object with all the query parameters and selects "token" parameter

    console.log("hi");

    useEffect( () => {
        console.log("hey");
        fetch("/api/verify-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email_token: token })
        }).then(v => v.json())
            .then( data => {
            if (!data.error) {
                window.location.href =  "/join";
                return;
            }
            window.location.href = "/NotFound";
        });
    }, []);
    
    return <div></div>;
}

export default VerifyEmail;