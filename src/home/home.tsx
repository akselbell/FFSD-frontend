import React from "react";
import Navbar from "../navBar";
import Header from "../navBar/header";
import Resource from "./resources";
import Card from "./cards";
import "./home.css";

const resources = [{image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80", alt: "resource1", title: "Resource #1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80", alt: "resource2", title: "Resource #2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80", alt: "resource3", title: "Resource #3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
];

const bottom_cards = [{title: "Our Impact", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80", alt: "ImpactImage"},
    {title: "Become a Member Today", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80", alt: "MemberImage"},
    {title: "Events", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80", alt: "EventsImage"},
    {title: "Our Sponsors", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80", alt: "SponsorsImage"}
];

function Home() {
    return <>
        <Header />
        <Navbar />
        <div className="homeBackground">
            <div className="frame24">
                <div className="frame23">
                    <div className="title">
                        Fee for Service <br></br>
                        Dentist Association
                    </div>
                    <div className="text">
                        Discover a new era in dentistry with the Fee for Service Dentist Association. <br></br>
                        Our mission is to support and empower dental professionals in providing exceptional care while embracing the freedom and flexibility of a fee-for-service model. <br></br>
                        <br></br>
                        Join us and unlock a world of opportunities for your dental practice.
                    </div>
                </div>
                <div id="padding">
                    <button className="joinButton2">
                        Join
                    </button>    
                </div>    
            </div>
        </div>
        <div className="frame25">
            Resources
            <div className="Resources">
                {resources.map((word, index) => {
                    return <Resource image={word.image} alt={word.alt} title={word.title} text={word.text} key={index}/>;
                })}
            </div>
        </div>
        <div className="cards">
                {bottom_cards.map((word, index) => {
                    return <Card title={word.title} image={word.image} alt={word.alt} key={index}/>;
                  })}
        </div>
        <div className="footer"></div>
    </>;
}

export default Home;