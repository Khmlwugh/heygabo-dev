import { useRef } from 'react'
import { LangProvider } from './hooks/useLang'
import { ThemeProvider } from './hooks/useTheme'
import FixedUI    from './components/FixedUI'
import SideNav    from './components/SideNav'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'

export default function App() {
  const containerRef = useRef(null)

  return (
    <ThemeProvider>
      <LangProvider>
        <FixedUI />
        <SideNav containerRef={containerRef} />
        <div className="snap-container" ref={containerRef}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </LangProvider>
    </ThemeProvider>
  )
}
