import { useLang } from '../hooks/useLang'
import { useTheme } from '../hooks/useTheme'

export default function FixedUI() {
  const { lang, toggle: toggleLang } = useLang()
  const { dark, toggle: toggleTheme } = useTheme()

  return (
    <div style={{ position: 'fixed', top: '1.5rem', right: '1.5rem', display: 'flex', gap: '0.5rem', zIndex: 100 }}>
      <button className="toggle-btn" onClick={toggleLang}>
        {lang === 'en' ? 'ES' : 'EN'}
      </button>
      <button className="toggle-btn" onClick={toggleTheme}>
        {dark ? '○' : '◑'}
      </button>
    </div>
  )
}
