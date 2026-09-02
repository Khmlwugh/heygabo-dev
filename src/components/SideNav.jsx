import { useEffect, useState } from 'react'
import { useLang } from '../hooks/useLang'

const NAV_ITEMS = [
  { id: 'hero',       key: 'nav.home' },
  { id: 'about',      key: 'nav.about' },
  { id: 'skills',     key: 'nav.skills' },
  { id: 'projects',   key: 'nav.projects' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'contact',    key: 'nav.contact' },
]

export default function SideNav({ containerRef }) {
  const { t } = useLang()
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const container = containerRef?.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { root: container, threshold: 0.5 }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [containerRef])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      left: '1.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 100,
    }}>
      {NAV_ITEMS.map(({ id, key }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: active === id ? 'var(--accent)' : 'var(--nav-dot, rgba(26,25,23,0.2))',
            padding: 0,
          }}
          className="nav-item-btn"
          aria-label={t(key)}
        >
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'currentColor',
            flexShrink: 0,
            transform: active === id ? 'scale(1.6)' : 'scale(1)',
            transition: 'transform 0.2s',
          }} />
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            opacity: active === id ? 1 : 0,
            transform: active === id ? 'translateX(0)' : 'translateX(-4px)',
            transition: 'opacity 0.2s, transform 0.2s',
          }}>
            {t(key)}
          </span>
        </button>
      ))}
    </nav>
  )
}
