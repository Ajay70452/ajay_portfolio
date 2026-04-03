import { useState } from 'react'
import styles from './Contact.module.css'
import { useInView } from '../../hooks/useInView'

const socials = [
  { label: 'E-Mail',    href: 'mailto:ajayraval49ar@gmail.com' },
  { label: 'GitHub',    href: 'https://github.com/Ajay70452' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/ajay-raval-85a8551b7/' },
  { label: 'WhatsApp',  href: 'https://wa.me/918469131771' },
]

export default function Contact() {
  const [leftRef, leftVisible] = useInView()
  const [rightRef, rightVisible] = useInView()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/ajayraval49ar@gmail.com', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

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

        <div className={styles.directContact}>
          <a href="tel:+918469131771" className={styles.directLink}>+91 8469131771</a>
          <a href="mailto:ajayraval49ar@gmail.com" className={styles.directLink}>ajayraval49ar@gmail.com</a>
        </div>
      </div>

      <form
        ref={rightRef}
        className={`${styles.form} ${rightVisible ? styles.formVisible : ''}`}
        onSubmit={handleSubmit}
      >
        <div className={styles.field}>
          <input type="text" name="name" placeholder="Your Name" className={styles.input} required />
        </div>
        <div className={styles.field}>
          <input type="email" name="email" placeholder="Your Email" className={styles.input} required />
        </div>
        <div className={styles.field}>
          <textarea name="message" placeholder="Your Message" className={styles.textarea} rows={5} required />
        </div>
        <button type="submit" className={styles.btn} disabled={status === 'sending'}>
          <span>
            {status === 'idle' && 'Send Message'}
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Message Sent!'}
            {status === 'error' && 'Failed — Try Again'}
          </span>
          <span className={styles.arrow}>
            {status === 'sent' ? '\u2713' : '\u2192'}
          </span>
        </button>
      </form>

    </section>
  )
}
