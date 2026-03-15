import { about } from '../../data/content'
import NeuralNet from './NeuralNet'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>

      <h2 className={styles.heading}>Hello, I am<br />Ajay Raval</h2>

      <div className={styles.body}>
        <div className={styles.left}>
          {about.body.map((para, i) => (
            <p key={i} className={styles.para}>{para}</p>
          ))}
        </div>

        <div className={styles.right}>
          <NeuralNet />
        </div>
      </div>

    </section>
  )
}
