import "./index.scss";
import * as React from "react";

import { TopNav } from "../components/topNav/TopNav";

export default ({ children }) => {
    return (
        <div className="app">
            <TopNav title="Alex Bettadapur" links={[{
                title: "About",
                url: "about"
            },
            {
                title: "Blog",
                url: "about"
            },
            {
                title: "About",
                url: "about"
            }]} />
            <div className="app-content">
                {children()}
            </div>
        </div>
    );
}