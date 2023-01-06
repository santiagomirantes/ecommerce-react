/*general Header*/

import {Navbar} from "./Navbar.js"
import "./header.css";
import { memo } from "react";

export const Header = memo(() => {
    return (
        <header>
            <Navbar />
        </header>
    )
})
