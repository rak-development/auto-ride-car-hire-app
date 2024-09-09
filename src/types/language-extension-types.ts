import { z } from 'zod'

const LanguageSchema = z.union([z.literal('pl'), z.literal('en')])

export type LanguageExtensionTypes = z.infer<typeof LanguageSchema>

