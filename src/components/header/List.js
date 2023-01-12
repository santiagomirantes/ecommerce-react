/*lista de secciones del navegador*/

import { Link } from "react-router-dom"

export const List = () => {
    return (
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/general">General</Link></li>
            <li><Link to="/catalogue/todos">Productos</Link></li>
            <li><Link to="/pyr">P&R</Link></li>
        </ul>
    )
}