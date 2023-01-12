import { Item } from "./Item"
import { Link } from "react-router-dom"
import { ProductsList } from "./ProductsList"

export const ItemList = function({items}) {
    if(items === undefined) {
      items = ProductsList
    }
    return (
        <>
        <h2>Productos</h2>
        <div className="productsClasses">
        <ul>
            <li><Link to="../catalogue/todos">Todos</Link></li>
            <li><Link to="../catalogue/perro">Perros</Link></li>
            <li><Link to="../catalogue/gato">Gatos</Link></li>
            <li><Link to="../catalogue/pez">Peces</Link></li>
        </ul>  
        </div>
        <section id="productos">
            {
                items.map(i => {
                return <Item key={i.id} id={i.id} nombre={i.nombre} precio={i.precio} especie={i.especie} img={i.img} showDelete="false"></Item>
                })
            }

        </section>
        </>
    )
}