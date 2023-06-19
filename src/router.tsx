import React from "react";
import  { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./home";
import About from "./about";
import LogIn from "./login";
import Join from "./join";
import NotFound from "./404";
import VerifyEmail from "./emailVerification";
import ForgotPass from "./forgotPass";
import ResetPass from "./forgotPass/resetPass";
import MemberPortal from "./memberPortal";
import AfterPay from "./join/afterPay";

/**
 * @param p pathname
 * @param el element to render at pathname
 * @returns {{path: string, element: JSX.Element}} json object with path and string in it for createBrowserRouter
 */
const makeRoute = (p: string, el: JSX.Element): {path: string, element: JSX.Element} => {
    return {path: p, element: el};
};

const router = createBrowserRouter([
    makeRoute("/", <Home/>),
    makeRoute("/*", <NotFound/>),
    makeRoute("/about", <About/>),
    makeRoute("/login", <LogIn/>),
    makeRoute("/join", <Join/>),
    makeRoute("/verify-email", <VerifyEmail/>),
    makeRoute("/forgot", <ForgotPass/>),
    makeRoute("/reset", <ResetPass/>),
    makeRoute("/member-portal", <MemberPortal/>),
    makeRoute("/after-payment", <AfterPay/>)
]);

function SiteRouter() {
    return <RouterProvider router={router}/>; // only element that should ever be here
}
 
export default SiteRouter;