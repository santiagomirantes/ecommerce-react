/*general Header*/

import {Navbar} from "./Navbar.js"
import "./header.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext.js";

export const Header = () => {
    return (
        <header>
            <Navbar />
        </header>
    )
}