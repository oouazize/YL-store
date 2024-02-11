import { createI18nClient } from 'next-international/client'

export const {
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  en: () => import('./en/home.json'),
  fr: () => import('./fr/home.json'),
})