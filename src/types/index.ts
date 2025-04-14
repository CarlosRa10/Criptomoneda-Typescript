import { z } from 'zod'//usaremos la función infer de zod para inferir el tipo de datos de un objeto
import {CurrencySchema} from '../schema/criptoSchema'

export type Currency = z.infer<typeof CurrencySchema> //inferimos el tipo de datos de un objeto que cumple con el esquema definido en criptoSchema.ts