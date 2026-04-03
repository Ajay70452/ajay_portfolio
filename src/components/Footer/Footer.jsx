import styles from './Footer.module.css'

const links = [
  { label: 'GitHub', href: 'https://github.com/Ajay70452' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajay-raval-85a8551b7/' },
  { label: 'Email', href: 'mailto:ajayraval49ar@gmail.com' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>Ajay Raval</span>

        <nav className={styles.links}>
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
