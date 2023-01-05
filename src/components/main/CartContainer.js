import { ProductsList } from "./ProductsList";
import { Cart } from "./Cart";
import {cartContext} from "../../context/cartContext"
import { useContext} from "react";

export const CartContainer = function() {
    let used = useContext(cartContext);

    let prom = new Promise((resolve,reject) => {
            resolve(used.added)
    });
    let filtered = [];

    prom.then(res => {
        res.forEach(id => {
        ProductsList.forEach(pr => {
            if(pr.id === id) {
                filtered.push(pr)
            }
        })
    })
})
    return(
        <>
        <Cart products={filtered}></Cart>
        </>
    )
}