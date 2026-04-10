import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const FOOTER_LINKS = {
  Collections: ['Ready-to-Wear', 'Haute Couture', 'Accessories', 'Made to Measure', 'Archive'],
  Maison: ['The Atelier', 'Our Heritage', 'Craftsmanship', 'Press', 'Careers'],
  Contact: ['Paris Flagship', 'Private Appointments', 'Client Services', 'Stockists'],
}

const SOCIAL = ['IG', 'FB', 'TW', 'LI']

export default function Footer() {
  const [ref, inView] = useInView()

  return (
    <footer
      id="contact"
      className="bg-[#050505] px-16 pt-20 pb-10"
      style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)' }}
    >
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

        {/* Brand column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#home"
            className="font-serif text-[1.8rem] font-light tracking-[0.35em] uppercase text-white no-underline block mb-6"
          >
            Maison Noir
          </a>
          <p
            className="leading-[1.9] mb-8 max-w-[220px]"
            style={{ fontSize: '0.75rem', color: '#6b6860' }}
          >
            Where silence becomes the most powerful statement. Haute couture and
            ready-to-wear from the Paris atelier since 1987.
          </p>
          <div className="flex gap-3">
            {SOCIAL.map((s) => (
              <SocialBtn key={s} label={s} />
            ))}
          </div>
        </motion.div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links], i) => (
          <motion.div
            key={heading}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: (i + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4
              className="mb-6"
              style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#c9a96e' }}
            >
              {heading}
            </h4>
            <ul className="list-none space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-white"
                    style={{ fontSize: '0.75rem', color: '#6b6860', textDecoration: 'none', letterSpacing: '0.05em' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            {heading === 'Contact' && (
              <div
                className="mt-8 leading-[2.1]"
                style={{ fontSize: '0.65rem', color: '#6b6860' }}
              >
                <p>24 Rue du Faubourg</p>
                <p>Saint-Honoré, Paris 75008</p>
                <p className="mt-2" style={{ color: '#c9a96e' }}>+33 1 44 XX XX XX</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Newsletter strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10 mb-10"
        style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}
      >
        <div>
          <p
            className="font-serif italic mb-1"
            style={{ fontSize: '1.2rem', color: '#e8d5b0' }}
          >
            Join the Inner Circle
          </p>
          <p style={{ fontSize: '0.7rem', color: '#6b6860', letterSpacing: '0.05em' }}>
            Private previews, invitations, and the occasional secret.
          </p>
        </div>
        <NewsletterForm />
      </motion.div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 flex-wrap">
        <p style={{ fontSize: '0.65rem', color: '#444441', letterSpacing: '0.1em' }}>
          © 2025 Maison Noir. All rights reserved.
        </p>
        <div className="flex gap-8">
          {['Privacy Policy', 'Terms', 'Cookie Preferences'].map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors duration-300 hover:text-[#c9a96e]"
              style={{ fontSize: '0.65rem', color: '#444441', textDecoration: 'none', letterSpacing: '0.05em' }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function SocialBtn({ label }) {
  return (
    <a
      href="#"
      className="flex items-center justify-center transition-all duration-300 hover:text-[#c9a96e] group"
      style={{
        width: 36,
        height: 36,
        border: '0.5px solid rgba(255,255,255,0.1)',
        color: '#6b6860',
        fontSize: '0.65rem',
        textDecoration: 'none',
        letterSpacing: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#c9a96e'
        e.currentTarget.style.background = 'rgba(201,169,110,0.05)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {label}
    </a>
  )
}

function NewsletterForm() {
  return (
    <div className="flex gap-0 w-full md:w-auto">
      <input
        type="email"
        placeholder="Your email address"
        className="bg-transparent outline-none text-white placeholder-[#444441] px-5 py-3 flex-1 md:w-72"
        style={{
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          border: '0.5px solid rgba(255,255,255,0.12)',
          borderRight: 'none',
        }}
      />
      <button
        className="px-6 py-3 text-[#0a0a0a] font-medium transition-all duration-300 hover:opacity-90 active:scale-95 cursor-pointer"
        style={{
          background: '#c9a96e',
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          border: 'none',
          fontFamily: 'Inter, sans-serif',
          whiteSpace: 'nowrap',
        }}
      >
        Subscribe
      </button>
    </div>
  )
}
