import { z } from 'zod'//usaremos la función infer de zod para inferir el tipo de datos de un objeto
import {CurrencySchema,CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema} from '../schema/criptoSchema'

export type Currency = z.infer<typeof CurrencySchema> //inferimos el tipo de datos de un objeto que cumple con el esquema definido en criptoSchema.ts
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema> //inferimos el tipo de datos de un objeto que cumple con el esquema definido en criptoSchema.ts
export type Pair = z.infer<typeof PairSchema> //inferimos el tipo de datos de un objeto que cumple con el esquema definido en criptoSchema.ts
export type CryptoPrice = z.infer<typeof CryptoPriceSchema> //inferimos el tipo de datos de un objeto que cumple con el esquema definido en criptoSchema.ts