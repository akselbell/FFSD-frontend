//main entry point for the app
import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import SiteRouter from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

const root = document.getElementById("root");
if(!root) {
    console.error("root not found");
    process.exit();
}

createRoot(root).render(
    <Provider store={store}>        {/*provides global state to app*/}
        <SiteRouter />
    </Provider>
);
