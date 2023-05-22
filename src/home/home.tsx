import React from "react";
import Navbar from "../navBar";
import Header from "../navBar/header";
import Resource from "./resources";
import Card from "./cards";
import "./home.css";

function Home() {
    return <>
        <Header />
        <Navbar />
        <div className="frame24">
            <div className="frame23">
                <div className="title">
                    Fee for Service Dentists
                </div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </div>
            </div>
            <button className="joinButton2">
                Join
            </button>            
        </div>
        <div className="frame25">
            Resources
            <div className="Resources">
                {[{image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80", alt: "resource1", title: "Resource #1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                {image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80", alt: "resource2", title: "Resource #2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                {image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80", alt: "resource3", title: "Resource #3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}].map((word, index) => {
                    return <Resource image={word.image} alt={word.alt} title={word.title} text={word.text} key={index}/>;
                })}
            </div>
        </div>
        <div className="cards">
                <Card title="Our Impact" image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="image1" />
        </div>
    </>;
}

export default Home;