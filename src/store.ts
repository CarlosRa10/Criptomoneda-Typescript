//"store" (almacén de estado global)

import {create} from 'zustand';
import {devtools } from 'zustand/middleware';
import axios from 'axios';
import { CryptoCurrenciesResponseSchema } from './schema/criptoSchema';
import { Cryptocurrency } from "./types";

type CryptoStore = {
  cryptoCurrencies: Cryptocurrency[];
  fetchCryptos: () => Promise<void>;
};

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios.get(url)//Desestructurando la respuesta de axios para obtener solo el objeto Data que esta dentro de data.
    //console.log(Data)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)//safeParse es una función de zod que valida los datos según el esquema definido.
    //console.log(result)
    if(result.success){
        return result.data
    }
}   


//create: Crea un store de Zustand.
//useCryptoStore: Es un hook personalizado que cualquier componente puede usar para acceder al estado o funciones del store.
//fetchCryptos: Una función asíncrona que (por ahora) solo imprime un mensaje.

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