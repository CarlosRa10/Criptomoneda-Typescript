import axios from 'axios';
import { CryptoCurrenciesResponseSchema } from '../schema/criptoSchema'; 
import { Pair } from '../types';

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios.get(url)//Desestructurando la respuesta de axios para obtener solo el objeto Data que esta dentro de data.
    //console.log(Data)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)//safeParse es una función de zod que valida los datos según el esquema definido.
    //console.log(result)
    if(result.success){
        return result.data
    }
}  

export async function fetchCurrentCryptoPrice(pair: Pair) {
    console.log(pair)
    // const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    // const {data} = await axios.get(url)
    // return data
}