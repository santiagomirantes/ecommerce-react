import { Link } from "react-router-dom"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"

export const Item = ({id,nombre,precio,especie,img,count,showCount, showDelete}) => {

    let used = useContext(cartContext)

    return (
            <div id={id} className={especie}>
            <button className={"deleteItem-" + showDelete} onClick={() => {used.deleteProduct(id)}}>Eliminar producto</button>
            <img src={img} alt="producto"></img>
            <h3>{nombre}</h3>
            <h4>{precio}</h4>
            <Link to={"../../item/" + id } className="productButton">Ver más</Link>
            {/*showCount === true or === false*/}
            <p className={"addedCount-" + showCount}>{count}</p>
            </div>
    )
}