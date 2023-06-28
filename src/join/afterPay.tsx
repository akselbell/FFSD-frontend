import React, { useEffect } from "react";
import { fetchMe, setUser, userStateT, userT } from "../store/user";
import { useDispatch, useSelector } from "react-redux";

function AfterPay() {
    const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

    const dispatch = useDispatch();
    const user = useSelector((s: { user_state: userStateT }) => s.user_state.user);

    useEffect(() => {
        const wait = async () => {
            await delay(1000);
            fetchMe()
                .then((result) => {
                if (typeof result === "string") {
                    window.location.href = "/NotFound";
                    return;
                }
                dispatch(setUser(result));
                if (result?.valid_subscription) {
                    window.location.href = "/member-portal";
                    return;
                }
                window.location.href = "/join";
                return;
                })
                .catch((err) => {
                console.error(err);
                });
        };
        wait();
    }, []);
    
    return <div>Redirecting...</div>;
}

export default AfterPay;