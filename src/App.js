import "./app.css";
import { useState, useEffect } from "react";
import Frase from "./Components/Frase";

function App() {

  const [frase, setFrase] = useState({})

  useEffect(() => {
    
    consultApi()

  }, [])

  const consultApi = async () =>{
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    const frase = await api.json()
    setFrase(frase[0])
  }

  return (
    <div className="contenedor">
      <Frase 
        frase={frase}
      />
    <button 
      onClick={() => consultApi()}
      type="button" 
      className="boton"
    >
      Buscar Frase
    </button>
    </div>
  );
}

export default App;
