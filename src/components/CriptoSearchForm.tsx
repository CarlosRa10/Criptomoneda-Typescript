import { currencies } from "../data"

export default function CriptoSearchForm() {
  return (
    <form
        className="form"
    >
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select 
                name="currency" //este name es el que me va ayudar a escribir el valor en el state - para seleccionar lo que quiero cotizar hola
                id="currency"
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
            >
                <option value="">-- Seleccione --</option>
            </select>
        </div>

        <input type="submit" value="Cotizar" />
    </form>
  )
}
