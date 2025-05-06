import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
    const result = useCryptoStore((state) => state.result)//llamamos al store para obtener el resultado de la API y poder usarlo en el componente.
    const loading = useCryptoStore((state) => state.loading)
    const hasResult = useMemo(() => !Object.values(result).includes('') , [result] )
    //useMemo: memoriza el resultado de la función y solo se vuelve a calcular si el valor de result cambia.
    //Object.values(result):Convierte los valores del objeto result en un array. Ejemplo: Si result = { a: 1, b: '', c: 'hola' }
    //!Object.values(result).includes('') : verifica si hay un valor vacio en el resultado de la API. Si no hay un valor vacio, devuelve true.
  return (
    <div className="result-wrapper">
        {loading ? <Spinner/> : hasResult && ( //si loading es true, mostramos el spinner, si no, verificamos si hay un resultado y lo mostramos.
            <>
                <h2>Cotización</h2>
                <div className="result">
                    <img src={`https://www.cryptocompare.com${result.IMAGEURL}`} alt="Logo de la criptomoneda" />
                    <div>
                        <p>El precio es de: <span>{result.PRICE}</span></p>
                        <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                        <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                        <p>Variación ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                        <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}
