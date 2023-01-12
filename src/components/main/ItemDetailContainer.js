import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { database } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";

export const ItemDetailContainer = function () {

    let productsCollection = collection(database, "products")
    let productsList;
    let product
    let [currentProduct, changeCurrentProduct] = useState(undefined)
    const currentId = useParams().id
    
    if(currentProduct === undefined) {
    getDocs(productsCollection).then((res) => {
         productsList = res.docs.map(i => {
            return {
                id : i.id,
                ...i.data()
            }
        
        })
        product = productsList.find(i => i.id === currentId)
        changeCurrentProduct(product)
    })
    .catch(err => {
        console.log(err)
    })

}
    return (
        <>
            <ItemDetail product={currentProduct}></ItemDetail>
        </>
    )
}