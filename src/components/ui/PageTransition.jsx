import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 12 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function PageTransition({ children, routeKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
