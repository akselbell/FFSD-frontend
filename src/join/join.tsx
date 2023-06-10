import React, { useEffect, useState } from "react";
import "./join.css";
import Header from "../navBar/header";
import Navbar from "../navBar";
import { signUp, userT } from "../store/user";
import { useSelector } from "react-redux";
import { Alert } from '@mui/material';
import Modal from 'react-modal';
import PayNowButton from "./payNow";
import validator from 'validator';

function Join() {
    const [error, setError] = useState<string | null>(null);
    const [popupOpen, setPopupOpen] = useState<boolean>(false);
    const user: any = useSelector((s: any)=> s.user_state.user); // how to access state
    const [emailValid, setEmailValid] = useState(false);
    const [email, setEmail] = useState("");

    const closePopup = () => { setPopupOpen(false); };
    
    useEffect(() => {
        if (user) {                                                           //redirects to home if logged in already
            if (user.email_valid) {
                setEmailValid(true);
                setEmail(user.encrypted_email);
            }
        }
    },[user]);

    return <>
        <Header />
        <Navbar />
        {emailValid ? <PayNowButton email={email}/> :
            <div>
            <form className="joinForm" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();                             //prevents clearing the form for a new entry   
                const form = e.target as HTMLFormElement;
                const username = (document.getElementById("uname") as HTMLInputElement).value;
                const password = (document.getElementById("password") as HTMLInputElement).value;
                const email = (document.getElementById("email") as HTMLInputElement).value;

                if(!validator.isEmail(email)) {
                    setError("Invalid email address");
                    return;
                }
                
                signUp(username, password, email).then((v: any) => {
                    if(v.error) {
                        setError(v.error);
                        return;
                    }
                    setError(null);
                    setEmail(v.encrypted_email);
                    form.reset();
                    setError(null);
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
            <Modal className="verificationPopup" isOpen={popupOpen} onRequestClose={closePopup} ariaHideApp={false} style={{
                overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Adjust the opacity as needed */
                }}}>
                <div className="popupTitle">Let{"'"}s verify your email first</div>
                <div className="popupText">A verification email was sent to {email}. Please click the link in the email to continue to payment.</div>
                <button className="popupOKButton" onClick={() => closePopup()}>OK</button>
            </Modal>
        </div>
        }
    </>;
}

export default Join;