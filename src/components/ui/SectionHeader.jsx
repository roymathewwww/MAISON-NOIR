import { motion } from 'framer-motion'

/**
 * Reusable editorial section header
 * @param {string} label  - small caps eyebrow text
 * @param {string} title  - main serif heading (supports <em> for italic gold)
 * @param {boolean} inView - controls animation trigger
 * @param {number} delay
 */
export default function SectionHeader({ label, title, inView, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="section-label mb-4">{label}</p>
      <h2
        className="font-serif font-normal text-white"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </motion.div>
  )
}
