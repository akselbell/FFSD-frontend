import React from "react";
import  { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./home";
import About from "./about";
import LogIn from "./login";
import Join from "./join";


function SiteRouter() {
    return  (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>    {/*only routes should be in here */}
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<LogIn />}/>
                <Route path="/join" element={<Join />} />
            </Routes>
        </Router>
    );
}
 
export default SiteRouter;