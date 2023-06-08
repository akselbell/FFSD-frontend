import React, { useState } from "react";
import "./join.css";
import Header from "../navBar/header";
import Navbar from "../navBar";
import { signUp, userT } from "../store/user";
import { useSelector } from "react-redux";
import { Alert } from '@mui/material';
import Modal from 'react-modal';
import PayNowButton from "./payNow";

function Join() {
    const [error, setError] = useState<string | null>(null);
    const [popupOpen, setPopupOpen] = useState<boolean>(false);
    const user: null | userT = useSelector((s: any)=> s.user_state.user); // how to access state

    const closePopup = () => { setPopupOpen(false); };
    if (user) {                                                           //redirects to home if logged in alread
        window.location.href = "/";
        return <></>;
    }

    return <>
        <Header />
        <Navbar />
        <div>
            <form className="joinForm" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();                             //prevents clearing the form for a new entry   
                const form = e.target as HTMLFormElement;
                const username = (document.getElementById("uname") as HTMLInputElement).value;
                const password = (document.getElementById("password") as HTMLInputElement).value;
                const email = (document.getElementById("email") as HTMLInputElement).value;
                
                signUp(username, password, email).then(v => { // signUp only returns a string error if occurred
                    if(typeof v === "string") {
                        setError(v);
                        return;
                    }
                    form.reset();
                    setPopupOpen(true);
                }).catch(err => {
                    console.log(err);
                });  
            }}>
                <label htmlFor="uname"><b>Username: </b></label>
                <input id="uname" type="text" placeholder="Type your username" name="uname" required />

                <label htmlFor="pass"><b>Password: </b></label>
                <input id="password" type="password" placeholder="Type your password" name="pass" required />

                <label htmlFor="email"><b>Email: </b></label>
                <input id="email" type="email" placeholder="Type your email" name="email" required />

                <input type="submit" value="send" />

                {error && <Alert severity="error">{error}</Alert>}
            </form>
            <Modal className="verificationPopup" isOpen={popupOpen} onRequestClose={closePopup}>
                <div className="popupTitle">Let{"'"}s verify your email first</div>
                <div className="popupText">A verification email was sent to [user_email_address]. Please click the link in the email to continue to payment.</div>
                <button className="popupOKButton" onClick={() => closePopup()}>OK</button>
            </Modal>
        </div>
        <PayNowButton/>
    </>;
}

export default Join;