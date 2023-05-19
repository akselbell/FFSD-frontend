import React from "react";
import  { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./home";


function SiteRouter() {
    return  (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>    {/*only routes should be in here */}
            </Routes>
        </Router>
    );
}
 
export default SiteRouter;