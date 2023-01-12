import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import Swal from "sweetalert2"
import { cartContext } from "../../context/cartContext"
import { database } from "../../firebase"
import { doc, updateDoc} from "firebase/firestore"
import { useState } from "react"

export const Form = function({method, makeOrderNumber}) {
    let [finalOrderNumber, changeFinalOrder] = useState()

    let used = useContext(cartContext)

    const saveInfo = function(event) {
    event.preventDefault()


    const getText = function(selector) {
        return document.querySelector(selector).value
    }

    if(getText("#input-name") !== "" && getText("#input-phone") !== "" && getText("#input-email") !== "" ) {
    let name = getText("#input-name")
    let phone = getText("#input-phone")
    let email = getText("#input-email")

    let person = {
        "name":name,
        "phone":phone,
        "email":email
    }
    
    let finalPrice = used.getFinalPrice()
    const order = {
        "buyer":person,
        "cart":used.cart,
        "total":finalPrice,
        "date":serverTimestamp()
    }

    let gotCollection = collection(database, "orders")
    

    addDoc(gotCollection, order)
    .then(res => {changeFinalOrder(res.id)})

    used.cart.map(i => {
        updateDoc( doc(database, "products", i.id), {limit : i.limit - i.count}  )
    })
    makeOrderNumber(finalOrderNumber)

    used.clearCart("buy")
}
else{
    Swal.fire({
        title:"ERROR",
        text:"Se necesita rellenar todas las casillas para continuar",
        icon:"error",
        confirmButtonText:"aceptar"
    })
}
}
    return (
        <form>
            <h2>Rellena el formulario para continuar</h2>
            <p id="input-name-text">Escribe tu nombre</p>
            <input type="name" id="input-name" placeholder="Damian Gutierrez" required></input>
            <p id="input-phone-text">Escribe tu número de telefono</p>
            <input type="number" id="input-phone" placeholder="5492994574301" required></input>
            <p id="input-email-text">Escribe tu número de telefono</p>
            <input type="email" id="input-email" placeholder="damiang@gmail.com" required></input>
            <input type="submit" onClick={(event) => {saveInfo(event)}}></input>
        </form>
    )
}