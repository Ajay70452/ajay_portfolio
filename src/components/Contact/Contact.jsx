import styles from './Contact.module.css'
import { useInView } from '../../hooks/useInView'

const socials = [
  { label: 'E-Mail',   href: 'mailto:ajayraval49ar@gmail.com' },
  { label: 'GitHub',   href: 'https://github.com/Ajay70452' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajay-raval-85a8551b7/' },
]

export default function Contact() {
  const [leftRef, leftVisible] = useInView()
  const [rightRef, rightVisible] = useInView()

  return (
    <section id="contact" className={styles.section}>

      <div
        ref={leftRef}
        className={`${styles.left} ${leftVisible ? styles.leftVisible : ''}`}
      >
        <span className={styles.eyebrow}>Contact</span>
        <h2 className={styles.heading}>LET'S TALK</h2>

        <nav className={styles.socials}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <form
        ref={rightRef}
        className={`${styles.form} ${rightVisible ? styles.formVisible : ''}`}
        onSubmit={e => e.preventDefault()}
      >
        <div className={styles.field}>
          <input type="text" placeholder="Your Name" className={styles.input} required />
        </div>
        <div className={styles.field}>
          <input type="email" placeholder="Your Email" className={styles.input} required />
        </div>
        <div className={styles.field}>
          <textarea placeholder="Your Message" className={styles.textarea} rows={5} required />
        </div>
        <button type="submit" className={styles.btn}>
          <span>Send Message</span>
          <span className={styles.arrow}>→</span>
        </button>
      </form>

    </section>
  )
}
