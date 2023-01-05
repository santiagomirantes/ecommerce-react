import { ProductsList } from "./ProductsList"
import {cartContext} from "../../context/cartContext"
import { useContext } from "react"

export const ItemDetail = ({ product }) => {
    const used = useContext(cartContext)
    let callChangeValue = function () {
        used.changeCount("sum")
        document.querySelector("#contador").innerHTML = used.count;
        used.added.push(product.id)
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
                <section className="cartCountButtons">
                    <input type="button" className="sum" value="+"></input>
                    <p className="cartAddingCount">0</p>
                    <input type="button" className="sub" value="-"></input>
                </section>
                <button onClick={() => { callChangeValue() }}>Añadir al carrito</button>
            </div>
        </section>
    )
}