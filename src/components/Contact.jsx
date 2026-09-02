import { useLang } from '../hooks/useLang'

const LINKS = [
  { labelKey: 'contact.email', href: 'mailto:gabo@email.com',         display: 'gabo@email.com' },
  { labelKey: 'GitHub',        href: 'https://github.com/Khmlwugh',       display: 'github.com/Khmlwugh' },
  { labelKey: 'LinkedIn',      href: 'https://linkedin.com/in/gabo',  display: 'linkedin.com/in/gabo' },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="snap-section">
      <div className="section-inner">
        <p className="section-label">{t('nav.contact')}</p>
        <h2 className="section-title">{t('contact.title')}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          {LINKS.map(({ labelKey, href, display }) => (
            <a key={href} href={href} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--fg2)', fontSize: '14px', paddingBottom: '1rem', borderBottom: '1px solid var(--border)', transition: 'color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.querySelector('span').style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg2)';    e.currentTarget.querySelector('span').style.color = 'var(--fg3)' }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg3)', width: '80px', flexShrink: 0, transition: 'color 0.2s' }}>
                {t(labelKey) === labelKey ? labelKey : t(labelKey)}
              </span>
              {display}
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--fg3)' }}>
          heygabo.dev — <a href="/now" style={{ color: 'var(--accent)', textDecoration: 'none' }}>{t('contact.profile')}</a>
        </p>
      </div>
    </section>
  )
}
