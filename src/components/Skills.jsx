import { useLang } from '../hooks/useLang'

const SKILL_GROUPS = [
  { key: 'skills.frontend', items: ['React + Vite', 'Tailwind CSS', 'JavaScript / TS', 'HTML / CSS'] },
  { key: 'skills.backend',  items: ['.NET Core / C#', 'SpringBoot / Java','MySQL / Postgresql / SQLServer', 'REST APIs'] },
  { key: 'skills.tools',    items: ['Git / GitHub', 'Vercel / Netlify', 'Figma', 'Postman'] },
]

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="snap-section">
      <div className="section-inner">
        <p className="section-label">{t('nav.skills')}</p>
        <h2 className="section-title">{t('skills.title')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          {SKILL_GROUPS.map(({ key, items }) => (
            <div key={key} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '2px', padding: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg3)', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' }}>
                {t(key)}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {items.map(item => (
                  <span key={item} style={{ fontSize: '13px', color: 'var(--fg2)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--accent)' }}>—</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
