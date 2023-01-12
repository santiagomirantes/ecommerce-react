import { Form } from "./Form"

export const FormContainer = function({method, makeOrderNumber}) {
    let textMethod;
    switch(method) {
        case "mp":
            textMethod = "Mercado Pago"
            break
        case "deb":
            textMethod = "Débito"
            break
         case "cre":
            textMethod = "Crédito"
            break
        case "pp":
            textMethod = "PayPal"
            break
        default:
            textMethod = "indefinido"
            break
    }
    
     return(
        <>
        <h2 id="method">{textMethod}</h2>
        <Form method={method} makeOrderNumber={makeOrderNumber}></Form>
        </>
     )
}