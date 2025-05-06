import { useCryptoStore } from "../store"
import { currencies } from "../data"
import { ChangeEvent, FormEvent, useState } from "react"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CriptoSearchForm() {
    const cryptocurrencies = useCryptoStore((state)=>state.cryptoCurrencies)//llamamos al store para obtener las criptomonedas y poder usarlas en el select de criptomonedas.   
    const fetchData = useCryptoStore((state)=>state.fetchData)


    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    })

    const [error, setError] = useState ('') //estado para manejar el error


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value //actualizamos el state con el valor del select que se ha cambiado
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault() //evitamos el comportamiento por defecto del formulario
        //console.log(pair) //imprimimos el par de monedas seleccionado
        if(Object.values(pair).includes('')) { //verificamos si hay un valor vacio en el par de monedas
            setError('Todos los campos son obligatorios') //si hay un valor vacio, mostramos els error
            return
        }
        setError('') //si no hay un valor vacio, limpiamos el error
        fetchData(pair) //llamamos a la función fetchData que se encarga de hacer la llamada a la API y obtener el precio de la criptomoneda seleccionada
    }


    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>} {/* si hay un error(error && ), mostramos el mensaje de error */}
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select 
                    name="currency" //este name es el que me va ayudar a escribir el valor en el state - para seleccionar lo que quiero cotizar
                    id="currency"
                    onChange ={handleChange}
                    value={pair.currency} //valor que se va a enviar al state
                >
                    <option value="">-- Seleccione --</option>
                    {currencies.map(currency => (
                        <option 
                            key={currency.code} //clave unica para cada moneda
                            value={currency.code} //valor que se va a enviar al state
                        >
                            {currency.name} {/* nombre de la moneda */}
                        </option>
                    ))} 
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">Criptomoneda:</label>
                <select 
                    name="criptocurrency"
                    id ="criptocurrency" 
                    onChange ={handleChange}
                    value={pair.criptocurrency} //valor que se va a enviar al state
                >
                    <option value="">-- Seleccione --</option>
                    {cryptocurrencies.map(crypto => (
                        <option 
                            key={crypto.CoinInfo.FullName} //clave unica para cada criptomoneda
                            value={crypto.CoinInfo.Name} //valor que se va a enviar al state
                        >
                            {crypto.CoinInfo.FullName} {/* nombre de la criptomoneda */}
                        </option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Cotizar" />
        </form>
    )
}
