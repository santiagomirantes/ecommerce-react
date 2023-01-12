export const Card = function({idNumber,question,info}) {
    function reveal(id) {
        document.querySelector("#info" + id).className = "show"
        document.querySelector("#question" + id).className = "hidden"
    }
    function hide(id) {
        document.querySelector("#info" + id).className = "hidden"
        document.querySelector("#question" + id).className = "show"
    }
    return (
        <div className="card"  onMouseOver={() => {reveal(idNumber)}} onMouseLeave={() => {hide(idNumber)}}>
            <h3 id={"question" + idNumber}>{question}</h3>
            <p id={"info" + idNumber} className="hidden">{info}</p>
        </div>
    )
}