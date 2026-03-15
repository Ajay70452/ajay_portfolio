import heroImg from '../../assets/hero.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            <span className={styles.line}>AI</span>
            <span className={styles.line}>
              Engineer <span className={styles.amp}>&</span>
            </span>
            <span className={styles.line}>Builder</span>
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
