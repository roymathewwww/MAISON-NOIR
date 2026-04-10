import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

/**
 * Wraps children with a scroll-triggered fade+slide animation.
 * @param {number} delay    - stagger delay in seconds
 * @param {string} className
 * @param {'up'|'left'|'right'} direction
 */
export default function FadeReveal({ children, delay = 0, className = '', direction = 'up' }) {
  const [ref, inView] = useInView()

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 32 : 0,
    x: direction === 'left' ? -32 : direction === 'right' ? 32 : 0,
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
