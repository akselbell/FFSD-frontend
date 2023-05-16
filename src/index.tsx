import React from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if(!root) {
    console.error("root not found");
    process.exit();
}

createRoot(root).render(<div>hello world</div>)