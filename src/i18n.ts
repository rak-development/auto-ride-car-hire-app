import i18n from 'i18next'
import i18nBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'http://localhost:8000/assets/lng/{{lng}}.json',
    },
  })

export default i18n
