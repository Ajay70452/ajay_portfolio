import { about } from '../../data/content'
import NeuralNet from './NeuralNet'
import styles from './About.module.css'
import { useInView } from '../../hooks/useInView'

export default function About() {
  const [headingRef, headingVisible] = useInView()
  const [bodyRef, bodyVisible] = useInView()

  return (
    <section id="about" className={styles.section}>

      <h2
        ref={headingRef}
        className={`${styles.heading} ${headingVisible ? styles.visible : ''}`}
      >
        Hello, I am<br />Ajay Raval
      </h2>

      <div
        ref={bodyRef}
        className={`${styles.body} ${bodyVisible ? styles.bodyVisible : ''}`}
      >
        <div className={styles.left}>
          {about.body.map((para, i) => (
            <p key={i} className={styles.para} style={{ animationDelay: `${i * 0.1}s` }}>
              {para}
            </p>
          ))}
        </div>

        <div className={styles.right}>
          <NeuralNet />
        </div>
      </div>

    </section>
  )
}
