/*Simbolo de carrito con contador*/

import { AiOutlineShoppingCart } from "react-icons/ai";
/*este icono fue exportado desde react-icons*/

export const CartWidget = () => {
    return (
        <div>
            <AiOutlineShoppingCart className="cart"></AiOutlineShoppingCart>
            <p id="contador"></p>
        </div>
    )
}