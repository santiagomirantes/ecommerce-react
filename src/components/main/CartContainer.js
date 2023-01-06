import { Cart } from "./Cart";
import { ScaleLoader } from "react-spinners";
import { useState } from "react";

export const CartContainer = function() {
    let [isLoading, changeLoading] = useState(true)
    setTimeout(() => {changeLoading(false)},2000)
    return(
        <>
        {
            isLoading ? <ScaleLoader color="var(--col)" height={30} width={10}></ScaleLoader> : <Cart></Cart>
        }
        </>
    )
}