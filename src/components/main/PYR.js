import { Card } from "./Card"

export const PYR = function() {
    let firstAnswer = "Sí hacemos entregas a domicilio exclusivamente para residentes en Argentina."
    let secondAnswer = "No vendemos productos farmacéuticos, solo vendemos productos alimenticios."
    let thirdAnswer = "Nuestros productos son 100% originales y provenientes de marcas registradas."
    
    return(
        <>
        <Card idNumber={1} question={"¿Hacen entregas a domicilio?"} info={firstAnswer}></Card>
        <Card idNumber={2} question={"¿Venden remedios para animales?"} info={secondAnswer}></Card>
        <Card idNumber={3} question={"¿Sus productos son oficiales?"} info={thirdAnswer}></Card>
        </>
    )
}