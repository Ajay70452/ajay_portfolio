 import { nav } from '../../data/content'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Ajay Raval</span>
      <nav className={styles.nav}>
        {nav.map(item => (
          <a key={item.label} href={item.href} className={styles.link}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
