import { useEffect } from "react"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { ProductsList } from "./ProductsList";


export const ItemListContainer = () => {
    let { especie } = useParams()

    const [items, setItems] = useState()

    useEffect(() => {
        let prom = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(especie !== "todos" ? ProductsList.filter(x => x.especie === especie) : ProductsList)
            }, 100)
        })
        prom.then(data => {
            setItems(data)
        })
    }, [especie])

    return (
        <>
            <ItemList items={items}></ItemList>
        </>
    )
}