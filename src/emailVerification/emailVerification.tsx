import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import queryString from 'query-string';

function VerifyEmail () {
    const [error, setError] = useState<undefined | boolean>(undefined);
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
            setError(data.error as boolean);
            if (data.error) {
                setMessage(data.error);
                return;
            }
            setMessage("Email sucessfully verified.");
          });
    }, []);


    
    
    return <div>{message}</div>;
}

export default VerifyEmail;