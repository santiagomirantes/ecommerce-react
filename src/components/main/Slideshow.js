/*sección de inicio*/

import { useState } from "react"

export const Slideshow = function () {
    let number = 0
    let linksArray = ["https://img.freepik.com/foto-gratis/retrato-mascota-adorable-aislado_23-2149192357.jpg?t=st=1669486046~exp=1669486646~hmac=3c9937d7d7f05ff90a3866eec5de84725315667b4dcf80cdd79b3341100f19ff", "https://img.freepik.com/foto-gratis/vista-frontal-hermoso-perro-espacio-copia_23-2148786561.jpg?t=st=1669487749~exp=1669488349~hmac=7e4adb35b3cbc6b31745e867131fe3bb96af2b25101bf830cac01bf41459a69e"]
    let [actualLink, changeLink] = useState("https://img.freepik.com/foto-gratis/retrato-mascota-adorable-aislado_23-2149192357.jpg?t=st=1669486046~exp=1669486646~hmac=3c9937d7d7f05ff90a3866eec5de84725315667b4dcf80cdd79b3341100f19ff")

    let callChangeLink = () => {
        changeLink(linksArray[number === 0 ? number = 1 : number = 0])
    }
    return (
            <section id="slideshow">
                <img id="titleBackground" onClick={callChangeLink} alt="Imágen de perro" src={actualLink}></img>
                <h1>Pet´s Kingdom</h1>
                <h2 className="centered">Toca para cambiar</h2>
            </section>
    )
}