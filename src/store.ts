//"store" (almacén de estado global)
import {create} from 'zustand';
import {devtools } from 'zustand/middleware';
import { Cryptocurrency } from "./types";
import { getCryptos } from './services/CryptoService';//Importamos la función getCryptos que hace la llamada a la API para obtener las criptomonedas.

type CryptoStore = {
  cryptoCurrencies: Cryptocurrency[];
  fetchCryptos: () => Promise<void>;
};

//create: Crea un store de Zustand.
//useCryptoStore: Es un hook personalizado que cualquier componente puede usar para acceder al estado o funciones del store.
//fetchCryptos: Es una función que se encarga de obtener las criptomonedas desde la API y actualizar el estado del store con los datos obtenidos.

export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
    cryptoCurrencies: [],//Estado inicial del store, un array vacío.
    fetchCryptos: async () => {
        //console.log('Desde fetchCryptos')
        const cryptoCurrencies = await getCryptos()//tenemos que espear a que se resuelva la promesa o funcion asincrona
        //console.log(cryptoCurrencies)
        set(()=>({
            cryptoCurrencies//Actualiza el estado del store con el resultado de la función getCryptos.
        }))
}
})))