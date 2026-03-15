import styles from './Skills.module.css'

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

function BentoBox({ box }) {
  return (
    <div className={`${styles.box} ${styles[box.id]} ${box.feature ? styles.feature : ''}`}>
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
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>Skills</span>
        <h2 className={styles.heading}>Tools & Technologies</h2>
      </div>

      <div className={styles.bento}>
        {boxes.map(box => <BentoBox key={box.id} box={box} />)}
      </div>
    </section>
  )
}
