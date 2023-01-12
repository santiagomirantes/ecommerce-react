import { useEffect } from "react"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { ProductsList } from "./ProductsList";

import { getDocs, collection  } from "firebase/firestore";
import { database } from "../../firebase";


export const ItemListContainer = () => {
    let { especie } = useParams()

    const [items, setItems] = useState()

    useEffect(() => {
        /*let prom = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(especie !== "todos" ? ProductsList.filter(x => x.especie === especie) : ProductsList)
            }, 100)
        })
        prom.then(data => {
            setItems(data)
        })*/
    

    const itemCollection = collection(database, "products")

    getDocs(itemCollection)
    .then((res) => {
        let productsGot = res.docs.map(i => {
            return {
                id : i.id,
                ...i.data()
            }
        
        })
        setItems(especie !== "todos" ? productsGot.filter(x => x.especie === especie) : productsGot)
        
    })
    .catch((err) => {
        console.log(err)
    })

}, [especie])
    return (
        <>
            <ItemList items={items}></ItemList>
        </>
    )
}