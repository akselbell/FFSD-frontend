import React from "react";
import Header from "./scenes/header/header";
import Navbar from "./scenes/navbar/navbar";
import  { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./scenes/pages/home";

function App() {
    return <div className="app">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Header />
        </Router>
    </div>;
}
 
export default App;