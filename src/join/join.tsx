import React, { useEffect, useState } from "react";
import "./join.css";
import Header from "../navBar/header";
import Navbar from "../navBar";
import { signUp } from "../store/user";
import { useSelector } from "react-redux";
import { Alert } from '@mui/material';
import Modal from 'react-modal';
import validator from 'validator';
import { payNow } from "./payFunction";

function Join() {
    const [error, setError] = useState<string | null>(null);
    const [popupOpen, setPopupOpen] = useState<boolean>(false);
    const user: any = useSelector((s: any)=> s.user_state.user); // how to access state
    const [emailValid, setEmailValid] = useState(false);
    const [email, setEmail] = useState("");
    const [paymentPopupOpen, setPaymentPopupOpen] = useState<boolean>(false);

    const closePopup = () => { setPopupOpen(false); };
    const closePaymentPopup = () => { setPaymentPopupOpen(false); };
    
    useEffect(() => {
        if (user) {                                                         
            if (user.email_valid) {
                setEmailValid(true);
                setEmail(user.encrypted_email);
                if (!user.valid_subscription) {
                    setPaymentPopupOpen(true);
                }
            }
        }
    },[user]);

    return <>
        <Header />
        <Navbar />
        {emailValid ? <div>
                <Modal className="verificationPopup" isOpen={paymentPopupOpen} onRequestClose={closePaymentPopup} ariaHideApp={false} style={{
                    overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Adjust the opacity as needed */
                    }}}>
                    <div className="popupTitle">Continue to Payment</div>
                    <div className="popupText">Thank you for registering. You will be able to access the member portal once you complete payment.</div>
                    <button className="popupOKButton" id="payNow" onClick={() => {
                        payNow(email);
                    }}>Pay Now</button>
                </Modal>
            </div>
        :
        <>
            <div className="joinPage">
                <div className="joinContainer">
                    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();                             //prevents clearing the form for a new entry   
                        const form = e.target as HTMLFormElement;
                        const location = {
                            practice_address: (document.getElementById("practiceAddress") as HTMLInputElement).value,
                            apt: (document.getElementById("apt") as HTMLInputElement).value,
                            city: (document.getElementById("city") as HTMLInputElement).value,
                            postal_code: Number((document.getElementById("postalCode") as HTMLInputElement).value),
                            state: (document.getElementById("state") as HTMLInputElement).value
                        };
                        const password = (document.getElementById("password") as HTMLInputElement).value;
                        const confirmPass = (document.getElementById("confirmPassword") as HTMLInputElement).value;
                        const email = (document.getElementById("email") as HTMLInputElement).value;
                        const prefix = (document.getElementById("prefix") as HTMLInputElement).value;
                        const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
                        const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
                        const practiceName = (document.getElementById("practiceName") as HTMLInputElement).value;

                        if (password === confirmPass && validator.isEmail(email)) {
                            signUp(prefix, firstName, lastName, practiceName, location, password, email).then((v: any) => {
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
                            return;
                        }
                        if(!validator.isEmail(email)) {
                            setError("Invalid email address.");
                            return;
                        }
                        if (!(password === confirmPass)) {
                            setError("Passwords must match!");
                            return;
                        }
                    }}>
                        <div className="loginTitle" id="joinTitle">Join Now</div>
                        <div className="forgotPassTxt" id="joinTxt">Join the Fee for Service Dentist Association today and become part of a dynamic network of dental professionals dedicated to elevating dentistry to new heights. Gain access to exclusive resources, educational programs, and a supportive community that will propel your practice forward. </div>
                        <div className="joinRow">
                            <div className="joinField">
                                <label className="login-label" htmlFor="prefix"><b>Prefix</b></label>
                                <input className="login-input" id="prefix" type="text" name="prefix"/>
                            </div>
                            <div className="joinField">
                                <label className="login-label" htmlFor="firstName"><b>First Name *</b></label>
                                <input className="login-input" id="firstName" name="firstName" required />
                            </div>
                            <div className="joinField">
                                <label className="login-label" htmlFor="lastName"><b>Last Name *</b></label>
                                <input className="login-input" id="lastName" type="text" name="lastName" required />
                            </div>
                        </div>
                        <div className="joinRow">
                            <div className="joinField">
                                <label className="login-label" htmlFor="practiceName"><b>Practice Name *</b></label>
                                <input className="login-input" id="practiceName" type="text" name="practiceName" required/>
                            </div>
                            <div className="joinField">
                                <label className="login-label" htmlFor="email"><b>Email Address *</b></label>
                                <input className="login-input" id="email" type="email" name="email" required />
                            </div>
                        </div>
                        <div className="joinRow">
                            <div className="joinField">
                                <label className="login-label" htmlFor="practiceAddress"><b>Practice Address *</b></label>
                                <input className="login-input" id="practiceAddress" type="text" name="practiceAddress" required/>
                            </div>
                            <div className="joinField">
                                <label className="login-label" htmlFor="apt"><b>Apt. or Suite #</b></label>
                                <input className="login-input" id="apt" type="text" name="apt" />
                            </div>
                        </div>
                        <div className="joinRow">
                            <div className="joinField">
                                <label className="login-label" htmlFor="city"><b>City *</b></label>
                                <input className="login-input" id="city" type="text" name="city" required/>
                            </div>
                            <div className="joinField">
                                <label className="login-label" htmlFor="postalCode"><b>Postal Code *</b></label>
                                <input className="login-input" id="postalCode" type="number" name="postalCode" required />
                            </div>
                            <div className="joinField">
                                <label className="login-label" htmlFor="state"><b>State *</b></label>
                                <input className="login-input" id="state" type="text" name="state" required />
                            </div>
                        </div>
                        <div className="horizontalLine"></div>
                        <div className="joinRow2">  {/*this password field, should be arranged accordingly */}
                            <div className="joinField">
                                <label className="login-label" htmlFor="pass"><b>Password *</b></label>
                                <input className="login-input" id="password" type="password" name="pass" required />
                            </div>
                            <div className="joinField">
                                <label className="login-label" htmlFor="confirmPass"><b>Confirm Password *</b></label>
                                <input className="login-input" id="confirmPassword" type="password" name="confirmPass" required />
                            </div>
                        </div>

                        <input className="loginButton" id="joinSubmit" type="submit" value="Submit" />

                        {error && <Alert severity="error">{error}</Alert>}
                    </form>
                </div>
            </div>
            <Modal className="verificationPopup" isOpen={popupOpen} onRequestClose={closePopup} ariaHideApp={false} style={{
                overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Adjust the opacity as needed */
                }}}>
                <div className="popupTitle">Let{"'"}s verify your email first</div>
                <div className="popupText">A verification email was sent to {email}. Please click the link in the email to continue to payment.</div>
                <button className="popupOKButton" onClick={() => closePopup()}>OK</button>
            </Modal>
            <div className="footer"></div>
        </>
        }
    </>;
}

export default Join;