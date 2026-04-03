import { useState, useEffect } from 'react'
import { nav } from '../../data/content'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = nav.map(item => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i])
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.logo}>Ajay Raval</span>
      <nav className={styles.nav}>
        {nav.map(item => (
          <a
            key={item.label}
            href={item.href}
            className={`${styles.link} ${activeSection === item.href.slice(1) ? styles.active : ''}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
