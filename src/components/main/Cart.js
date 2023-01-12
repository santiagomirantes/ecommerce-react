import { useContext } from "react"
import {cartContext} from "../../context/cartContext"
import { Item } from "./Item"
import { useState } from "react"
import { FormContainer } from "./FormContainer"

export const Cart = function() {
    let used = useContext(cartContext)
    let products = used.cart;
    let [isBuying, changeIsBuying] = useState(false)
    let [method, changeMethod] = useState("method")
    let [orderNumber, makeOrderNumber] = useState(null)

    const showInput = function() {
      if(document.querySelector("#cre").checked) {
         changeMethod("cre")
      }
      else if(document.querySelector("#mp").checked) {
        changeMethod("mp")
      }
      else if(document.querySelector("#deb").checked) {
        changeMethod("deb")
      }
      else if(document.querySelector("#pp").checked) {
        changeMethod("pp")
      }

      changeIsBuying(true)
    }

    if(used.cart.length === 0) {
      return(
        <>
        <h2>Aún no hay nada en el carrito</h2>
        </>
      )
    }
    else if(isBuying) {

      return(
        <FormContainer method={method} makeOrderNumber={makeOrderNumber}></FormContainer>
      )
    }
    else if(orderNumber !== null) {
      return(
        <>
        <h2 id="orderNumber">{orderNumber}</h2>
        </>
      )
    }
    else{
        return(
            <>
            <div className="fullCart">
    
            <div className="leftSide">
    
            <h2>Carrito</h2>
            <p className="cartCount">{used.cart.length}</p>
            {
               products.map(i => {
                return (<Item key={products.indexOf(i)} id={i.id} nombre={i.nombre} precio={i.precio} especie={i.especie} img={i.img} count={i.count} showCount="true" showDelete="true"></Item>)
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
            <input type="radio" id="mp" name="method" defaultChecked = {true}></input>
            <label htmlFor="mp">Mercado Pago</label>
            </div>
            
            <div className="payMethod">
            <input type="radio" id="cre" name="method"></input>
            <label htmlFor="cre">Crédito</label>
            </div>
    
            <div className="payMethod">
            <input type="radio" id="deb" name="method"></input>
            <label htmlFor="deb">Débito</label>
            </div>
            
            <div className="payMethod">
            <input type="radio" id="pp" name="method"></input>
            <label htmlFor="pp">PayPal</label>
            </div>
            
            <input type="button" value="Realizar compra" id="buyCart" onClick={() => {showInput(true)}}></input>
            {/*original function : used.clearCart("buy")*/}
            
            </div>
    
            </div>
            </>
        )
    }
        
}