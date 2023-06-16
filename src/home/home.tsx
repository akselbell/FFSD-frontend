import React from "react";
import Navbar from "../navBar";
import Header from "../navBar/header";
import Resource from "./resources";
import "./home.css";

const resources = [{image: "../Rectangle 100.jpg", alt: "Practice Management", title: "Practice Management", text: "Templates for weekly staff meetings, job-based to-do lists, and office checklists"},
    {image: "../Rectangle 100-2.jpg", alt: "Human Resources", title: "Human Resources", text: "Job descriptions, phone scripts, and more"},
    {image: "../Rectangle 100-3.jpg", alt: "Marketing", title: "Marketing", text: "Social media posts, monthly patient emails, and new patient materials"}
];

function Home() {
    return <>
        <Header />
        <Navbar />
        <div className="homeBackground">
            <div className="leftHome">
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
                    <button className="joinHome" id="join">
                        Join
                    </button>    
                </div>  
            </div>
            <div className="rightHome">
                <div className="gradient"></div>
                <img className="homeMainImage" src="../mainImgHome.jpeg" alt="image of nurses"></img>
            </div>
        </div>
        <div className="frame25">
            <div className="resourcesHeader">
                Resources
            </div>
            <div className="resourcesTxt">
            Access our Resource Library to find resources tailored specifically to fee-for-service dentistry. <br></br>
            Stay ahead of the curve and elevate your dentistry to new heights
            </div>
            <div className="Resources">
                {resources.map((word, index) => {
                    return <Resource image={word.image} alt={word.alt} title={word.title} text={word.text} key={index}/>;
                })}
            </div>
        </div>
        <div className="footer"></div>
    </>;
}

export default Home;