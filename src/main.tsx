import RouteTable from "@routes";
import "@styles/reset.css";
import "@styles/tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <RouteTable />
        </BrowserRouter>
    </React.StrictMode>
);
