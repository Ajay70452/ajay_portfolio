import { useState } from 'react'
import { projects } from '../../data/content'
import styles from './Projects.module.css'
import { useInView } from '../../hooks/useInView'

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const placeholders = [
  { bg: 'linear-gradient(135deg, #0a2618, #0d3320, #1a5c38)', label: 'Google Ads AI Automation' },
  { bg: 'linear-gradient(135deg, #1a0a0a, #3d1010, #6b1f1f)', label: 'Obsessive.AI' },
  { bg: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', label: 'AI Inbox Manager' },
  { bg: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)', label: 'Reelr' },
  { bg: 'linear-gradient(135deg, #0d0d0d, #1a1a1a, #111827)', label: 'Local RAG Agent' },
]

function ProjectPreview({ project, index }) {
  const [current, setCurrent] = useState(0)
  const images = project.images

  if (images && images.length > 0) {
    return (
      <div className={styles.preview} style={{ background: '#111', position: 'relative' }}>
        <img
          src={images[current]}
          alt={`${project.name} screenshot ${current + 1}`}
          className={styles.previewImg}
        />
        {images.length > 1 && (
          <>
            <button className={`${styles.slideBtn} ${styles.slidePrev}`} onClick={() => setCurrent(i => (i - 1 + images.length) % images.length)}>&#8249;</button>
            <button className={`${styles.slideBtn} ${styles.slideNext}`} onClick={() => setCurrent(i => (i + 1) % images.length)}>&#8250;</button>
            <div className={styles.dots}>
              {images.map((_, i) => (
                <span key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={() => setCurrent(i)} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className={styles.preview} style={{ background: placeholders[index].bg }}>
      <span className={styles.previewLabel}>{placeholders[index].label}</span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`${styles.project} ${visible ? styles.projectVisible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <ProjectPreview project={project} index={index} />

      <div className={styles.info}>
        <div className={styles.infoTop}>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.tagline}>{project.tagline}</p>
          {project.status && (
            <span className={styles.status}>🚧 {project.status}</span>
          )}
        </div>

        <p className={styles.desc}>{project.description}</p>

        <div className={styles.stack}>
          {project.stack.map(s => (
            <span key={s} className={styles.badge}>{s}</span>
          ))}
        </div>

        <div className={styles.links}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={styles.link}>
              <GlobeIcon />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.link}>
              <GithubIcon />
            </a>
          )}
          {!project.live && !project.github && (
            <span className={styles.private}>Private project</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [headerRef, headerVisible] = useInView()

  return (
    <section id="works" className={styles.section}>

      <div
        ref={headerRef}
        className={`${styles.header} ${headerVisible ? styles.headerVisible : ''}`}
      >
        <span className={styles.label}>Projects</span>
        <h2 className={styles.heading}>Things I've Built</h2>
      </div>

      <div className={styles.list}>
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

    </section>
  )
}
