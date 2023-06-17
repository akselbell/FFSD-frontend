import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, setUser, userStateT } from "../store/user";
import { portalButton } from "../store/user";
import PayNowButton from "../join/payNow";

function Navbar() {

    const dispatch = useDispatch();
    const user = useSelector((s: {user_state: userStateT}) => s.user_state.user);//this gets the state from user.ts

    return <>
        {user ?  
            user?.valid_subscription ? <div className="navbar"> {/*if logged in and paid */}
                <div className="navbar-cont"> {/*left side */}
                    <Link className="ffsdButton" to="/"> {/*put button inside here */}
                        <div id="ffsd">
                            FFSD
                        </div>
                    </Link>
                    <div className="txtNavbar">
                        {[{name: "About", href: "/about"}, {name: "Events", href: "/events"}, {name: "News", href: "/news"}, {name: "Get Involved", href: "/getinvolved"}, {name: "Advocacy", href: "/advocacy"}].map((word, index) => {
                            return <Link className="txtNavbar" to={word.href} key={index}>{word.name}</Link>;
                        })}
                    </div>
                    <div className="right-navbar"> {/*right side */}
                        <div className="logIn">
                            <span onClick={portalButton}>Manage Subscription</span>
                        </div>
                        <Link className="logIn" id="logout" to="/">
                            <span onClick={() => {
                                dispatch(logout());
                                window.location.href = "/login";
                            }}>
                                    Logout
                            </span>
                        </Link>
                    </div>
                </div> 
            </div> :
            <div className="navbar">   {/*if logged in but not paid */}
                <div className="navbar-cont"> {/*left side */}
                    <Link className="ffsdButton" to="/"> {/*put button inside here */}
                        <div id="ffsd">
                            FFSD
                        </div>
                    </Link>
                    <div className="txtNavbar">
                        {[{name: "About", href: "/about"}, {name: "Events", href: "/events"}, {name: "News", href: "/news"}, {name: "Get Involved", href: "/getinvolved"}, {name: "Advocacy", href: "/advocacy"}].map((word, index) => {
                            return <Link className="txtNavbar" to={word.href} key={index}>{word.name}</Link>;
                        })}
                    </div>
                    <div className="right-navbar"> {/*right side */}
                        <div className="logIn">
                            <span onClick={() => {window.location.href = "/join";}}>Pay Now</span>
                        </div>
                        <Link className="logIn" id="logout" to="/">
                            <span onClick={() => {
                                dispatch(logout());
                                window.location.href = "/login";
                            }}>
                                    Logout
                            </span>
                        </Link>
                    </div>
                </div> 
            </div>
            
        : 
            <div className="navbar">  {/* not logged in */}
                <div className="navbar-cont"> {/*left side */}
                    <Link className="ffsdButton" to="/"> {/*put button inside here */}
                        <div id="ffsd">
                            FFSD
                        </div>
                    </Link>
                    <div className="txtNavbar">
                        {[{name: "About", href: "/about"}, {name: "Events", href: "/events"}, {name: "News", href: "/news"}, {name: "Get Involved", href: "/getinvolved"}, {name: "Advocacy", href: "/advocacy"}].map((word, index) => {
                            return <Link className="txtNavbar" to={word.href} key={index}>{word.name}</Link>;
                        })}
                    </div>
                    <div className="right-navbar"> {/*right side */}
                        <Link className="logIn" to="/login">
                            <div className="logIn">
                                Log In
                            </div>
                        </Link>
                        <Link to="/join">
                            <button id="join" className="joinNavbar">
                                Join
                            </button>
                        </Link>
                    </div>
                </div> 
            </div>
            }
    </>;
}

export default Navbar;