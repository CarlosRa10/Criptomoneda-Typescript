//"store" (almacén de estado global)

import {create} from 'zustand';
import axios from 'axios';
import { CryptoCurrenciesResponseSchema } from './schema/criptoSchema';


async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios.get(url)//Desestructurando la respuesta de axios para obtener solo el objeto Data que esta dentro de data.
    //console.log(Data)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)//safeParse es una función de zod que valida los datos según el esquema definido.
    console.log(result)
    if(result.success){
        return result.data
    }
}   


//create: Crea un store de Zustand.
//useCryptoStore: Es un hook personalizado que cualquier componente puede usar para acceder al estado o funciones del store.
//fetchCryptos: Una función asíncrona que (por ahora) solo imprime un mensaje.

export const useCryptoStore = create(()=>({
    fetchCryptos: async () => {
        //console.log('Desde fetchCryptos')
        getCryptos()
    }
}))