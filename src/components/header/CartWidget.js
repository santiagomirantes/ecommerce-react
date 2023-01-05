/*Simbolo de carrito con contador*/

import { AiOutlineShoppingCart } from "react-icons/ai";
/*este icono fue exportado desde react-icons*/
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";


export const CartWidget = () => {
    const used = useContext(cartContext)
    return (
        <Link to="/cart" className="cartLink">
        <div className="cartContainer">
            <AiOutlineShoppingCart className="cart"></AiOutlineShoppingCart>
            <p id="contador">{used.count}</p>
        </div>
        </Link>
    )
}