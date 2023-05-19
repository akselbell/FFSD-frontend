//main entry point for the app
import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import './index.css';

const root = document.getElementById("root");
if(!root) {
    console.error("root not found");
    process.exit();
}

createRoot(root).render(<div><App /></div>)