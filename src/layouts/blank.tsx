import "./index.scss";
import * as React from "react";

import { TopNav } from "../components/topNav/TopNav";

export default ({ children }) => {
    return (
        <div>

            {children()}
        </div>
    );
}