import React, { useEffect, useState } from "react";
import Header from "../navBar/header";
import Navbar from "../navBar";
import "./memberPortal.css";
import { useSelector } from "react-redux";
import Modal from 'react-modal';
import { payNow } from "../join/payFunction";

function MemberPortal() {
    //const user = useSelector((s: {user_state: userStateT}) => s.user_state.user);//this gets the state from user.ts
    const user = useSelector((s: any) => s.user_state.user);//this gets the state from user.ts
    const [paymentPopupOpen, setPaymentPopupOpen] = useState<boolean>(false);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {                                                        
        if(user) {
            setLoggedIn(true);
        }
        if(user && !user.valid_subscription) {
            setPaymentPopupOpen(true);
        }
        if(user && user.valid_subscription) {
            setPaymentPopupOpen(false);
        }
    },[user]);

    return <div>
        <Header/>
        <Navbar/>
        {(user && user.valid_subscription) ? (<div>
            Welcome to the user portal!
        </div>) : 
            (user && !user.valid_subscription) ? <div>
                Blurred member portal
                <Modal className="verificationPopup" isOpen={paymentPopupOpen} ariaHideApp={false} style={{
                    overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Adjust the opacity as needed */
                    }}}>
                    <div className="popupTitle">Continue to Payment</div>
                    <div className="popupText">Thank you for registering. You will be able to access the member portal once you complete payment.</div>
                    <button className="popupOKButton" id="payNow" onClick={() => {
                        payNow(user.encrypted_email);
                    }}>Pay Now</button>
                </Modal>
            </div> :
            <div>
                Blurred member portal!
                <Modal className="verificationPopup" isOpen={!loggedIn} ariaHideApp={false} style={{
                    overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Adjust the opacity as needed */
                    },
                    }}>
                    <div className="popupTitle">Join Now</div>
                    <div className="popupText">Please create an account to be able to access the member portal.</div>
                    <button className="popupOKButton" id="joinNow" onClick={() => {
                        window.location.href = "/join";
                    }}>Join</button>
                </Modal>
            </div>

        }

    </div>;
}

export default MemberPortal;