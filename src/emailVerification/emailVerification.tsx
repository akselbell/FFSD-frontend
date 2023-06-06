import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import queryString from 'query-string';

function VerifyEmail () {
    const [message, setMessage] = useState("");
    const { token } = queryString.parse(useLocation().search);     //returns an object with all the query parameters and selects "token" parameter

    useEffect( () => {
        fetch("/api/verify-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email_token: token })
        }).then(v => v.json())
            .then( data => {
            if (!data.error) {
                window.location.href =  "/login";
                return;
            }
            window.location.href = "/NotFound";
        });
    });
    
    return <div>{message}</div>;
}

export default VerifyEmail;