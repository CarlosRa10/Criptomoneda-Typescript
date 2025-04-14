import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"


function App() {
  const fetchCryptos= useCryptoStore((state) => state.fetchCryptos)

  useEffect(()=>{
    fetchCryptos()// ← Esta línea se ejecuta al montar el componente (como un "onLoad")
  },[])// <-- El array vacío hace que se ejecute solo una vez al inicio -"Ejecuta esta función solo una vez, cuando el componente se renderiza por primera vez".
 
  return (
    <>
      <div className="container">
          <h1 className="app-title">
              Cotizador de <span>Criptomonedas</span>
          </h1>

          <div className="content">
              <CriptoSearchForm />
          </div>
      </div>
    </>
  )
}

export default App
