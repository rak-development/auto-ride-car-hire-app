import { z } from 'zod'

const languageSchema = z.array(
  z.object({
    label: z.union([z.literal('English'), z.literal('Polish')]),
    code: z.union([z.literal('pl'), z.literal('en')]),
  }),
)

type LanguageData = z.infer<typeof languageSchema>

export const LANGUAGES = [
  { label: 'English', code: 'en' },
  { label: 'Polish', code: 'pl' },
] as LanguageData

console.log('test')
