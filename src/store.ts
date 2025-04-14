//"store" (almacén de estado global)

import {create} from 'zustand';


//create: Crea un store de Zustand.

//useCryptoStore: Es un hook personalizado que cualquier componente puede usar para acceder al estado o funciones del store.

//fetchCryptos: Una función asíncrona que (por ahora) solo imprime un mensaje.

export const useCryptoStore = create(()=>({
    fetchCryptos: async () => {
        console.log('Desde fetchCryptos')
        // const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        // const data = await response.json();
        // return data;
    }
}))