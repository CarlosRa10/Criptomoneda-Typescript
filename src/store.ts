//"store" (almacén de estado global)
import {create} from 'zustand';
import {devtools } from 'zustand/middleware';
import { Cryptocurrency, CryptoPrice, Pair } from "./types";
import { getCryptos, fetchCurrentCryptoPrice } from './services/CryptoService';//Importamos la función getCryptos que hace la llamada a la API para obtener las criptomonedas.

type CryptoStore = {
  cryptoCurrencies: Cryptocurrency[];
  result: CryptoPrice
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair:Pair) => Promise<void>;//recibe un pair de type Pair, que es un objeto con dos propiedades: currency y criptocurrency.
};

//create: Crea un store de Zustand.
//useCryptoStore: Es un hook personalizado que cualquier componente puede usar para acceder al estado o funciones del store.
//fetchCryptos: Es una función que se encarga de obtener las criptomonedas desde la API y actualizar el estado del store con los datos obtenidos.

export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
    cryptoCurrencies: [],//Estado inicial del store, un array vacío.
    //result:{} as CryptoPrice,//Estado inicial del resultado de la API, un objeto vacío. - una forma de inicializar un objeto vacio es usar as para decirle que es de un tipo especifico.
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },

    loading: false,//Estado inicial de loading, un booleano que indica si se está cargando o no.

    fetchCryptos: async () => {
        //console.log('Desde fetchCryptos')
        const cryptoCurrencies = await getCryptos()//tenemos que espear a que se resuelva la promesa o funcion asincrona
        //console.log(cryptoCurrencies)
        set(()=>({
            cryptoCurrencies//Actualiza el estado del store con el resultado de la función getCryptos.
        }))
},

    fetchData: async (pair) => {
        //console.log(pair)
        set(()=>({
          loading: true//Actualiza el estado de loading a true, indicando que se está cargando la información.
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        //console.log(result)//Imprimimos el resultado de la función fetchCurrentCryptoPrice.

        set(()=>({
          result,//Actualiza el estado del store con el resultado de la función fetchCurrentCryptoPrice.
          loading: false//Actualiza el estado de loading a false, indicando que se ha terminado de cargar la información.
        }))
    }
      

})))