/*Menú de navegación*/

import {List} from "./List.js"
import {CartWidget} from "./CartWidget.js"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
        <section>
        <Link to="/">
        <img alt="logo" src="https://images2.imgbox.com/ce/34/ApMCnc3u_o.png" className="logo"></img>
        </Link>
        <List />
        </section>
        <CartWidget />
        </nav>
    )
}