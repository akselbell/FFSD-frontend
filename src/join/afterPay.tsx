import React, { useEffect } from "react";
import { fetchMe, setUser, userStateT, userT } from "../store/user";
import { useDispatch, useSelector } from "react-redux";

function AfterPay() {
    const dispatch = useDispatch();
    const user = useSelector((s: { user_state: userStateT }) => s.user_state.user);

    useEffect(() => {
        if (user?.valid_subscription) {
            window.location.href = "/member-portal";
            return;
        }

        fetchMe()
            .then((result) => {
            console.log(result);
            if (typeof result === "string") {
                window.location.href = "/NotFound";
                return;
            } else {
                dispatch(setUser(result));
            }
            })
            .catch((err) => {
            console.error(err);
            });
        }, [user]);
    
    return <div></div>;
}

export default AfterPay;