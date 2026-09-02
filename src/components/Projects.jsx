import { useLang } from '../hooks/useLang'
import projects from '../data/projects'

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projects" className="snap-section">
      <div className="section-inner">
        <p className="section-label">{t('nav.projects')}</p>
        <h2 className="section-title">{t('projects.title')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {projects.map((p) => (
            <div key={p.name} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '2px', padding: '1.25rem', transition: 'border-color 0.2s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 700, color: 'var(--fg)' }}>{p.name}</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {p.github && <a href={p.github} style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--fg3)', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--accent)'} onMouseLeave={e => e.target.style.color = 'var(--fg3)'}>GH ↗</a>}
                  {p.live   && <a href={p.live}   style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--fg3)', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--accent)'} onMouseLeave={e => e.target.style.color = 'var(--fg3)'}>Live ↗</a>}
                </div>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--fg2)', lineHeight: 1.6, marginBottom: '1rem', fontWeight: 300 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {p.stack.map(s => (
                  <span key={s} style={{ fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.08em', padding: '3px 8px', background: 'var(--bg2)', color: 'var(--fg3)', borderRadius: '2px' }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
