import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const luxuryEase = [0.22, 1, 0.36, 1]

const STATS = [
  { num: '37', label: 'Years of Craft' },
  { num: '47', label: 'Master Artisans' },
  { num: '12', label: 'Collections' },
]

export default function About() {
  const [textRef, textInView] = useInView()
  const [imgRef, imgInView] = useInView()

  return (
    <section id="atelier" className="bg-[#0a0a0a] py-32 px-8 md:px-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 items-center">

        {/* Text side */}
        <div ref={textRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, ease: luxuryEase }}
          >
            <p className="section-label mb-12">The Atelier</p>

            <h2
              className="font-serif font-light text-white mb-10 leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Crafted in Silence,<br />
              Worn with <em className="italic text-[#e8d5b0]">Purpose</em>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={textInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: luxuryEase }}
              className="text-[0.85rem] leading-[2.1] text-[#b0ada6] mb-6 font-light"
            >
              Founded in 1987 on the Rue du Faubourg Saint-Honoré, Maison Noir was born
              from a singular obsession: that true luxury whispers rather than shouts.
              Each garment is an exercise in restraint — where every seam, every grain
              of fabric, every proportion is considered over weeks, not hours.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={textInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: luxuryEase }}
              className="font-serif text-[1.25rem] italic leading-[1.7] my-10 pl-8"
              style={{
                borderLeft: '1px solid #c9a96e',
                color: '#e8d5b0',
              }}
            >
              "Luxury is not about visibility. It is about the weight of something
              well-made in your hands."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              animate={textInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: luxuryEase }}
              className="text-[0.85rem] leading-[2.1] text-[#b0ada6] font-light"
            >
              Our atelier employs 47 artisans, each a master of a single craft. From the
              première main who drapes the toile to the brodeuse who finishes each
              buttonhole by hand — this is the labour that defines us.
            </motion.p>
          </motion.div>

          {/* Stats row with staggered count-up feel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: luxuryEase }}
            className="flex gap-12 mt-14"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={textInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 + i * 0.15, ease: luxuryEase }}
                className="border-t pt-6"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <span
                  className="font-serif font-light block"
                  style={{ fontSize: '2.5rem', color: '#c9a96e', lineHeight: 1 }}
                >
                  {stat.num}
                </span>
                <span
                  className="block mt-2"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b6860' }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Visual side — clip-path reveal */}
        <div ref={imgRef} className="relative">
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(5% 5% 5% 5%)' }}
            animate={imgInView ? { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
            transition={{ duration: 1.8, ease: luxuryEase, delay: 0.2 }}
            className="relative"
            style={{ aspectRatio: '3/4' }}
          >
            {/* Main image */}
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90&auto=format&fit=crop&crop=top"
                alt="Paris Atelier craftsmanship"
                className="w-full h-full object-cover object-top"
              />
              {/* Gold inner border overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={imgInView ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 1.2, ease: luxuryEase }}
                className="absolute pointer-events-none"
                style={{ inset: '1.5rem', border: '0.5px solid rgba(201,169,110,0.25)' }}
              />
              {/* Subtle dark vignette */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>

            {/* Accent block — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.6, ease: luxuryEase }}
              className="absolute -bottom-8 -left-10 w-[52%]"
              style={{
                aspectRatio: '1',
                background: 'linear-gradient(135deg, rgba(201,169,110,0.12), rgba(160,120,64,0.06))',
                border: '0.5px solid rgba(201,169,110,0.18)',
              }}
            />

            {/* Gold vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={imgInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.8, ease: luxuryEase }}
              className="absolute -right-4 top-12 origin-top"
              style={{
                width: '0.5px',
                height: '55%',
                background: 'linear-gradient(#c9a96e, transparent)',
                opacity: 0.3,
              }}
            />

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={imgInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 1, ease: luxuryEase }}
              className="absolute top-8 -left-6 bg-[#0a0a0a] px-5 py-4"
              style={{ border: '0.5px solid rgba(201,169,110,0.2)' }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span
                  className="block font-serif italic"
                  style={{ fontSize: '0.9rem', color: '#c9a96e', letterSpacing: '0.05em' }}
                >
                  Paris Atelier
                </span>
                <span
                  className="block mt-0.5"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6b6860' }}
                >
                  Est. 1987
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
