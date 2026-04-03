import { useEffect, useRef } from 'react'
import heroImg from '../../assets/hero.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return
      const y = window.scrollY
      heroRef.current.style.backgroundPositionY = `${y * 0.4}px`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={heroRef} className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            <span className={styles.line}>
              {'AI'.split('').map((ch, i) => (
                <span key={i} className={styles.char} style={{ animationDelay: `${0.1 + i * 0.04}s` }}>
                  {ch}
                </span>
              ))}
            </span>
            <span className={styles.line}>
              {'Engineer'.split('').map((ch, i) => (
                <span key={i} className={styles.char} style={{ animationDelay: `${0.25 + i * 0.04}s` }}>
                  {ch}
                </span>
              ))}
              <span className={styles.amp} style={{ animationDelay: '0.6s' }}>&</span>
            </span>
            <span className={styles.line}>
              {'Builder'.split('').map((ch, i) => (
                <span key={i} className={styles.char} style={{ animationDelay: `${0.5 + i * 0.04}s` }}>
                  {ch}
                </span>
              ))}
            </span>
          </h1>
        </div>

        <div className={styles.right}>
          <p className={styles.desc}>
            I'm an AI engineer specializing in generative AI and intelligent systems.
            I enjoy building products that solve real-world problems.
            <br /><br />
            Previously a startup founder, I've spent the last few years turning ideas into working software.
            When I'm not building, you'll probably find me playing basketball, exploring nature, or eating pizza.
          </p>
          <a href="#contact" className={styles.cta}>Contact Me</a>
        </div>
      </div>
    </section>
  )
}
