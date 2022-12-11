import { ProductsList } from "./ProductsList"

export const ItemDetail = ({ product }) => {
    if (product === undefined) {
        product = ProductsList[0]
    }
    return (
        <section className="item">
            <div className="left-side">
                <img alt="imágen de producto" src={product.img}></img>
            </div>
            <div className="right-side">
                <h2>{product.nombre}</h2>
                <h3>{product.marca}</h3>
                <h4>{product.precio}</h4>
                <p>{product.descripcion}</p>
            </div>
        </section>
    )
}