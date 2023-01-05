import { useContext } from "react"
import {cartContext} from "../../context/cartContext"
import { Item } from "./Item"
import { ProductsList } from "./ProductsList"

export const Cart = function() {
    let used = useContext(cartContext)
    let products = used.cart;
        return(
        <>
        <div className="fullCart">

        <div className="leftSide">

        <h2>Carrito</h2>
        <p className="cartCount">{used.cart.length}</p>
        {
           products.map(i => {
            return (<Item key={products.indexOf(i)} id={i.id} nombre={i.nombre} precio={i.precio} especie={i.especie} img={i.img} count={i.count} showCount="true"></Item>)
           })
        }
        <input type="button" id="clearButton" value="limpiar carrito" onClick={() => {used.clearCart("remove")}}></input>
        
        </div>


        <div className="rightSide">

        <h2>Cuenta Final</h2>

        <h3 className="finalPrice">{"$" + used.getFinalPrice()}</h3>
        
        <h4 className="seller">Pet´s Kingdom</h4>
        
        <p>Escoga el método de pago deseado:</p>
        <div className="payMethod">
        <input type="radio" id="mp" name="method" checked></input>
        <label for="mp">Mercado Pago</label>
        </div>
        
        <div className="payMethod">
        <input type="radio" id="cre" name="method"></input>
        <label for="cre">Crédito</label>
        </div>

        <div className="payMethod">
        <input type="radio" id="deb" name="method"></input>
        <label for="deb">Débito</label>
        </div>
        
        <div className="payMethod">
        <input type="radio" id="pp" name="method"></input>
        <label for="pp">PayPal</label>
        </div>
        
        <input type="button" value="Realizar compra" id="buyCart" onClick={() => {used.clearCart("buy")}}></input>
        </div>

        </div>
        </>
    )
}