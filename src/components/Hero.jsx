import { useLang } from '../hooks/useLang'

export default function Hero() {
  const { t } = useLang()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="snap-section">
      <div className="section-inner">
        <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem' }}>
          {t('hero.eyebrow')}
        </p>
        <h1 style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--fg)', marginBottom: '1.5rem' }}>
          Hey, I'm<br /><span style={{ color: 'var(--accent)' }}>Gabo.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--fg2)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '2.5rem', fontWeight: 300 }}>
          {t('hero.desc')}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            {t('hero.cta1')}
          </button>
          <button className="btn-outline">
            <a href="\resume.pdf" target="_blank" rel="noopener noreferrer">
              {t('hero.cta2')}
            </a>
          </button>
        </div>
      </div>
      <div style={{
        position: 'absolute', bottom: '2rem', left: '5rem',
        fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.15em',
        textTransform: 'uppercase', color: 'var(--fg3)',
        display: 'flex', alignItems: 'center', gap: '0.75rem',
      }}>
        <span style={{ width: '32px', height: '1px', background: 'var(--fg3)' }} />
        {t('hero.scroll')}
      </div>
    </section>
  )
}
