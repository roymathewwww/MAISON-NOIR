import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const luxuryEase = [0.22, 1, 0.36, 1]

const LOOKS = [
  {
    id: 1,
    num: '01',
    season: 'Look 01 — AW 2025',
    title: 'Ombre de Nuit',
    desc: 'Cashmere overcoat with hand-stitched lapels. Worn over a bias-cut silk dress. The architecture of restraint.',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1920&q=90&auto=format&fit=crop',
    offset: false,
  },
  {
    id: 2,
    num: '02',
    season: 'Look 02 — AW 2025',
    title: 'Lumière Dorée',
    desc: 'Structured blazer in double-faced wool. Paired with wide-leg trousers. Power distilled to its purest form.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1920&q=90&auto=format&fit=crop',
    offset: true,
  },
]

export default function Lookbook() {
  const [ref, inView] = useInView()

  return (
    <section id="lookbook" className="bg-[#0d0b09]" style={{ padding: '8rem 0' }}>
      <div className="px-8 md:px-16 mb-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="flex justify-between items-end flex-wrap gap-4"
        >
          <div>
            <p className="section-label mb-5">Editorial 2025</p>
            <h2 className="font-serif font-normal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1 }}>
              The <em className="italic text-[#e8d5b0]">Lookbook</em>
            </h2>
          </div>
          <a href="#" className="btn-ghost mb-2">Full Editorial →</a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {LOOKS.map((look, i) => (
          <LookCard key={look.id} look={look} delay={i * 0.2} />
        ))}
      </div>
    </section>
  )
}

function LookCard({ look, delay }) {
  const [hovered, setHovered] = useState(false)
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(8% 8% 8% 8%)' }}
      animate={inView ? { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
      transition={{ duration: 1.6, ease: luxuryEase, delay }}
      className="relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: '3/4', marginTop: look.offset ? '5rem' : 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo with luxury zoom */}
      <motion.img
        src={look.image}
        alt={look.title}
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 1.4, ease: luxuryEase }}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />

      {/* Permanent dark gradient at bottom */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: hovered
            ? 'linear-gradient(0deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 45%, transparent 70%)'
            : 'linear-gradient(0deg, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.1) 40%, transparent 70%)',
        }}
      />

      {/* Ghost number */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 0.2 : 0.08 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-10 font-serif select-none pointer-events-none"
        style={{ fontSize: '4rem', fontWeight: 300, color: '#fff' }}
      >
        {look.num}
      </motion.div>

      {/* Info panel — always partially visible, expands on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
        <motion.span
          initial={false}
          animate={{ opacity: hovered ? 1 : 0.6, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="block mb-3"
          style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a96e' }}
        >
          {look.season}
        </motion.span>
        <motion.h3
          initial={false}
          animate={{ y: hovered ? 0 : 4 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="font-serif font-normal italic text-white mb-4 leading-tight"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
        >
          {look.title}
        </motion.h3>
        <motion.p
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 16 }}
          transition={{ duration: 0.7, delay: 0.05, ease: luxuryEase }}
          className="text-[0.85rem] text-[#e8e6e1] leading-[1.8] max-w-sm"
        >
          {look.desc}
        </motion.p>
      </div>

      {/* Gold border reveal on hover */}
      <motion.div
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: luxuryEase }}
        className="absolute pointer-events-none"
        style={{
          inset: '1.5rem',
          border: '0.5px solid rgba(201,169,110,0.3)',
        }}
      />
    </motion.div>
  )
}
