import { createContext, useContext, useState } from 'react'
import en from '../locales/en.json'
import es from '../locales/es.json'

const translations = { en, es }

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = (path) => {
    const keys = path.split('.')
    let val = translations[lang]
    for (const k of keys) {
      val = val?.[k]
    }
    return val ?? path
  }
  const toggle = () => setLang(l => l === 'en' ? 'es' : 'en')
  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
