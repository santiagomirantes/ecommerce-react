import { useContext } from "react"
import {cartContext} from "../../context/cartContext"
import { Item } from "./Item"
import { ProductsList } from "./ProductsList"

export const Cart = function({products}) {
    if(products === undefined) {
        products = ProductsList
    }
    let used = useContext(cartContext)
        return(
        <>
        <h2>Carrito</h2>
        <p className="cartCount">{used.count}</p>
        {
           products.map(i => {
            return (<Item key={products.indexOf(i)} id={i.id} nombre={i.nombre} precio={i.precio} especie={i.especie} img={i.img}></Item>)
           })
        }
        </>
    )
}