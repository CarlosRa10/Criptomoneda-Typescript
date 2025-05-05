import {z} from 'zod';

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

//Cuando haces la consulta y vez que esta llegando la llamada de la api, verifica que data recibes o puedes ver
// y empiezas a crear el schema de lo que realmente quieres extraer de todos los datos que vez de la API

export const CryptoCurrencyResponseSchema =  z.object({
    CoinInfo : z.object({
        FullName: z.string(),
        Name: z.string()
    })
})

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)//Es un array de objetos que cumplen con el esquema CryptoCurrencyResponseSchema

export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
})