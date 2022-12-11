import { Link } from "react-router-dom"

export const Item = ({id,nombre,precio,especie,img}) => {
    return (
            <div id={id} className={especie}>
            <img src={img} alt="producto"></img>
            <h3>{nombre}</h3>
            <h4>{precio}</h4>
            <Link to={"../../item/" + id } className="productButton">Ver más</Link>
            </div>
    )
}