import "./frase.css"

function Frase({frase}) {

    if(Object.keys(frase).length === 0) return null

    return (
        <div className="contenedorFrase">
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </div>
    )
}

export default Frase
