import { useEffect } from "react"
import { Link } from "react-router-dom"

export const Inicio = function () {
    /*animación (no importante)*/
    useEffect(() => {
        setTimeout(document.querySelector("#inicio_title").addEventListener("mouseover", (e) => {
            e.target.className = " "
            setTimeout(() => { document.querySelector("#inicio_title").className = "animate__animated animate__bounce" }, 1)
        }), 100)
    }, [])
    return (
        <section id="inicio">
            <div>
                <img alt="Beatiful dog" src="https://media.giphy.com/media/fJdpdS5jaDje8/giphy.gif"></img>
            </div>
            <div>
                <h2 id="inicio_title">INICIO</h2>
                <h3>Bienvenido a la mejor tienda de alimento para mascotas en el mundo</h3>
                <p> Te recomendamos explorar nuestro extenso catalogo de productos,
                    donde hallarás un sin fín de alimentos nutritivos y balanceados
                    para mejorar el día a día de tu mejor amigo.
                </p>
                <Link to="catalogue/todos" class="exploreProducts">Ir al catalogo de productos</Link>
            </div>
        </section>
    )
}