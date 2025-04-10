import 'dotenv/config'
import { z } from 'zod'

const dotenvSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']),
  PORT: z.coerce.number().default(3333),
})

const _env = dotenvSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment varables', _env.error.format())
  throw new Error('Invalid environment variables')
}

export const env = _env.data
