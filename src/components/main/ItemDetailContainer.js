import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { ProductsList } from "./ProductsList";

export const ItemDetailContainer = function () {
    const currentId = useParams().id
    let product = ProductsList.find(i => i.id === parseInt(currentId))
    return (
        <>
            <ItemDetail product={product}></ItemDetail>
        </>
    )
}