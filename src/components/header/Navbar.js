/*Menú de navegación*/

import {List} from "./List.js"
import {CartWidget} from "./CartWidget.js"

export const Navbar = () => {
    return (
        <nav>
        <section>
        <img src="https://i.ibb.co/hFs6zkF/logo.png" className="logo"></img>
        <List />
        </section>
        <CartWidget />
        </nav>
    )
}