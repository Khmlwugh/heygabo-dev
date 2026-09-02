import { useLang } from '../hooks/useLang'

const TAGS = ['.NET Core', 'React', 'Swift / UIKit', 'SQL Server', 'Firebase', 'Woodworking', 'Electronics', 'Lima, PE']

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="snap-section">
      <div className="section-inner">
        <p className="section-label">{t('nav.about')}</p>
        <h2 className="section-title">{t('about.title')}</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--fg2)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '2rem', fontWeight: 300 }}>
          {t('about.body')}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {TAGS.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </section>
  )
}
