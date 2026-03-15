import { experience } from '../../data/content'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>

      <div className={styles.header}>
        <span className={styles.label}>Experience</span>
        <h2 className={styles.heading}>3+ years building AI-powered<br />& SaaS Products.</h2>
        <p className={styles.sub}>
          My experience spans AI systems, SaaS platforms, and automation tools — building
          products from idea to production and shipping solutions used by real businesses.
        </p>
      </div>

      <div className={styles.timeline}>
        {experience.map((job) => (
          <div key={job.company} className={styles.row}>
            <div className={styles.dot} />
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <span className={styles.company}>{job.company}</span>
                </div>
                <span className={styles.period}>{job.period}</span>
              </div>
              <p className={styles.desc}>{job.desc}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => (
                  <li key={i} className={styles.bullet}>
                    <svg className={styles.check} viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
