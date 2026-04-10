import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useScrolled } from '../../hooks/useScrolled'

const LINKS = ['Home', 'Collection', 'Lookbook', 'Atelier', 'Contact']

/* Ultra-luxury stagger for nav links */
const navContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.6 } },
}

const navLinkReveal = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Navbar() {
  const scrolled = useScrolled(60)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${scrolled
            ? 'px-10 md:px-16 py-4 backdrop-blur-xl border-b border-white/[0.06]'
            : 'px-10 md:px-16 py-6'
          }
        `}
        style={{
          background: scrolled
            ? 'rgba(10, 10, 10, 0.92)'
            : 'linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.3) 60%, transparent 100%)',
        }}
      >
        {/* Brand logo with clip reveal */}
        <motion.a
          href="#home"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl font-light tracking-[0.35em] uppercase text-white no-underline"
        >
          Maison Noir
        </motion.a>

        {/* Desktop links — staggered reveal */}
        <motion.ul
          variants={navContainer}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-10 list-none"
        >
          {LINKS.map((link) => (
            <motion.li key={link} variants={navLinkReveal}>
              <NavLink href={`#${link.toLowerCase()}`}>{link}</NavLink>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="block w-6 h-px bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="block w-4 h-px bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="block w-6 h-px bg-white"
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay — cinematic full-screen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-10"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-4xl font-light italic text-white no-underline hover:text-[#c9a96e] transition-colors duration-500"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative text-[0.7rem] tracking-[0.2em] uppercase font-normal text-white/80
        hover:text-white transition-all duration-500 no-underline group"
    >
      {children}
      <span className="absolute -bottom-1.5 left-1/2 w-0 h-px bg-[#c9a96e]
        group-hover:w-full group-hover:left-0 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]" />
    </a>
  )
}
