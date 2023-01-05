import { ProductsList } from "./ProductsList"
import { cartContext } from "../../context/cartContext"
import { useContext } from "react"

export const ItemDetail = ({ product }) => {
    const used = useContext(cartContext)

    let callChangeValue = function () {
        document.querySelector("#contador").innerHTML = used.cart.length;
        let content = parseInt(document.querySelector(".cartAddingCount").textContent)
        document.querySelector(".cartAddingCount").innerHTML = "0";
        used.addToCart(product, content)
    }

    let sumCount = function () {
        if(product.count + parseInt(document.querySelector(".cartAddingCount").textContent) >= product.limit) {
         let errorElement = document.querySelector(".hideLimitError")
         if(errorElement) {
            errorElement.className = "showLimitError"
         }
        }
        else{
        let content = parseInt(document.querySelector(".cartAddingCount").textContent)
        content++
        document.querySelector(".cartAddingCount").innerHTML = content;
        }
    }

    let subCount = function () {
        let content = parseInt(document.querySelector(".cartAddingCount").textContent)
        if (content > 0) {
            content -= 1
            document.querySelector(".cartAddingCount").innerHTML = content;
            if(product.count + parseInt(document.querySelector(".cartAddingCount").textContent) <= product.limit && product.count < product.limit) {
              let errorElement = document.querySelector(".showLimitError")
              if(errorElement) {
                errorElement.className = "hideLimitError"
              }
            }
        }
    }
    

    if (product === undefined) {
        product = ProductsList[0]
    }
    return (
        <section className="item">
            <div className="left-side">
                <img alt="imágen de producto" src={product.img}></img>
            </div>
            <div className="right-side">
                <h2 className="productName">{product.nombre}</h2>
                <h3>{product.marca}</h3>
                <h4>{product.precio}</h4>
                <p>{product.descripcion}</p>
                <p className="limit">{"El limite permitido es:" + product.limit}</p>
                <p className={product.count === product.limit  ? "showLimitError" : "hideLimitError"}>Ya has alcanzado el limite de productos permitido</p>
                <section className="cartCountButtons">
                    <input type="button" className="sum" value="+" onClick={sumCount}></input>
                    <p className="cartAddingCount">0</p>
                    <input type="button" className="sub" value="-" onClick={subCount}></input>
                </section>
                <button onClick={() => { callChangeValue() }}>Añadir al carrito</button>
            </div>
        </section>
    )
}