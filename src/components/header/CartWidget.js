/*Simbolo de carrito con contador*/

import { AiOutlineShoppingCart } from "react-icons/ai";
/*este icono fue exportado desde react-icons*/
import { Link } from "react-router-dom";



export const CartWidget = () => {
    return (
        <Link to="/cart">
        <div>
            <AiOutlineShoppingCart className="cart"></AiOutlineShoppingCart>
            <p id="contador"></p>
        </div>
        </Link>
    )
}