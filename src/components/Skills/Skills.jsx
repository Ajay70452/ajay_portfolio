import styles from './Skills.module.css'
import { useInView } from '../../hooks/useInView'

const boxes = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['Python', 'JavaScript'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: ['Next.js', 'FastAPI', 'React'],
  },
  {
    id: 'aimodels',
    label: 'AI / LLM Models & Frameworks',
    skills: ['LangChain', 'LangGraph', 'LlamaIndex', 'CrewAI', 'OpenAI', 'Anthropic', 'Gemini', 'Ollama', 'Llama'],
    feature: true,
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['PostgreSQL', 'Redis', 'ChromaDB', 'Pinecone'],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    skills: ['AWS', 'Docker', 'Git', 'GitHub'],
  },
  {
    id: 'techniques',
    label: 'AI Techniques',
    skills: ['RAG', 'Multi-Agent Systems', 'Prompt Engineering', 'Embeddings', 'Vector Search', 'Semantic Search', 'Reranking'],
  },
  {
    id: 'systemdesign',
    label: 'AI System Design',
    skills: ['LLM Evaluation', 'Model Routing', 'LLM Caching', 'Streaming APIs', 'WebSockets', 'Async Processing'],
  },
]

function BentoBox({ box, index }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`${styles.box} ${styles[box.id]} ${box.feature ? styles.feature : ''} ${visible ? styles.boxVisible : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <span className={styles.boxLabel}>{box.label}</span>
      <div className={styles.pills}>
        {box.skills.map(s => (
          <span key={s} className={styles.pill}>{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [headerRef, headerVisible] = useInView()

  return (
    <section id="skills" className={styles.section}>
      <div
        ref={headerRef}
        className={`${styles.header} ${headerVisible ? styles.headerVisible : ''}`}
      >
        <span className={styles.label}>Skills</span>
        <h2 className={styles.heading}>Tools & Technologies</h2>
      </div>

      <div className={styles.bento}>
        {boxes.map((box, i) => <BentoBox key={box.id} box={box} index={i} />)}
      </div>
    </section>
  )
}
