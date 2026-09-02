import { useLang } from '../hooks/useLang'

export default function Experience() {
  const { t } = useLang()
  const items = t('experience.items')

  return (
    <section id="experience" className="snap-section">
      <div className="section-inner">
        <p className="section-label">{t('nav.experience')}</p>
        <h2 className="section-title">{t('experience.title')}</h2>
        <div>
          {Array.isArray(items) && items.map((item, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1.5rem',
              padding: '1.25rem 0',
              borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--fg3)', paddingTop: '3px' }}>
                {item.date}
              </span>
              <div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>{item.role}</p>
                <p style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '0.5rem' }}>{item.place}</p>
                <p style={{ fontSize: '12px', color: 'var(--fg2)', lineHeight: 1.6, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
