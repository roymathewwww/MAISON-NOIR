import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/* Ultra-luxury easing — slow, deliberate, cinematic */
const luxuryEase = [0.22, 1, 0.36, 1]

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.5 },
  },
}

const clipRevealUp = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  show: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 1.4, ease: luxuryEase },
  },
}

const fadeSlideUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: luxuryEase },
  },
}

const fadeLine = {
  hidden: { opacity: 0, scaleX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1.2, ease: luxuryEase, delay: 1 },
  },
}

const imageReveal = {
  hidden: { clipPath: 'inset(0 0 0 100%)' },
  show: {
    clipPath: 'inset(0 0 0 0%)',
    transition: { duration: 1.8, ease: luxuryEase, delay: 0.2 },
  },
}

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen flex items-end overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background texture grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fafafa 1px, transparent 1px), linear-gradient(90deg, #fafafa 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Right image block — clip-path cinematic reveal */}
      <motion.div
        variants={imageReveal}
        initial="hidden"
        animate="show"
        style={{ y: imageY, scale: imageScale }}
        className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[55%] overflow-hidden"
      >
        <HeroImagePlaceholder />
        {/* Gradient mask to blend with left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 md:via-transparent to-transparent md:w-[40%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent md:bg-none" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
      </motion.div>

      {/* Gold vertical accent line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.3 }}
        transition={{ duration: 1.8, delay: 1.2, ease: luxuryEase }}
        className="absolute right-[5%] top-[15%] w-px origin-top pointer-events-none"
        style={{
          height: '60%',
          background: 'linear-gradient(180deg, transparent, #c9a96e, transparent)',
        }}
      />

      {/* Ghost large number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5, ease: luxuryEase }}
        className="absolute bottom-16 left-8 md:bottom-24 md:left-16 font-serif text-[6rem] md:text-[8rem] font-light select-none pointer-events-none opacity-20 md:opacity-100"
        style={{ color: 'rgba(255,255,255,0.025)', lineHeight: 1 }}
      >
        01
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 px-6 sm:px-10 md:px-16 pb-16 md:pb-24 pt-32 w-full max-w-[100%] md:max-w-[55%]"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          <motion.p
            variants={fadeSlideUp}
            className="section-label mb-6 md:mb-8 text-xs md:text-sm"
          >
            Paris — Autumn Winter 2025
          </motion.p>

          {/* Title with clip-path reveal per line */}
          <div
            className="font-serif leading-[1.0] md:leading-[0.93] mb-8 md:mb-10 text-[3.8rem] sm:text-[4.5rem] md:text-[clamp(4.5rem,8vw,7rem)]"
            style={{ fontWeight: 300 }}
          >
            {['The Art', 'of ', 'Luxury'].map((line, i) => (
              <motion.span
                key={i}
                variants={clipRevealUp}
                className={`block ${i === 2 ? 'italic text-[#e8d5b0] pr-2' : ''}`}
              >
                {i === 1 ? (
                  <>{line}<em className="italic text-[#e8d5b0]">Silent</em></>
                ) : line}
              </motion.span>
            ))}
          </div>

          <motion.div
            variants={fadeLine}
            className="w-12 md:w-16 h-px mb-6 md:mb-8 origin-left"
            style={{ background: '#c9a96e' }}
          />

          <motion.p
            variants={fadeSlideUp}
            className="text-[0.8rem] md:text-[0.85rem] leading-[1.8] md:leading-[1.9] text-[#e0dfdc] md:text-[#b0ada6] max-w-[90%] md:max-w-[360px] mb-10 md:mb-12 font-light tracking-wide text-shadow-sm md:text-shadow-none"
          >
            Where craftsmanship meets quiet confidence. Each piece, a statement without words —
            tailored for those who define culture, not follow it.
          </motion.p>

          <motion.div variants={fadeSlideUp} className="flex flex-wrap items-center gap-6 md:gap-8">
            <a href="#collection" className="btn-primary text-xs md:text-sm px-6 py-3 md:px-8 md:py-4">
              <span>Explore Collection</span>
              <span className="text-sm md:text-base">→</span>
            </a>
            <a href="#lookbook" className="btn-ghost text-xs md:text-sm">
              View Lookbook <span>↗</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with luxury animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 right-16 hidden md:flex flex-col items-center gap-4 z-10"
        style={{
          writingMode: 'vertical-rl',
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#6b6860',
        }}
      >
        <ScrollLine />
        Scroll
      </motion.div>
    </section>
  )
}

function HeroImagePlaceholder() {
  return (
    <div className="w-full h-full relative">
      <img
        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=2400&q=90&auto=format&fit=crop"
        alt="Maison Noir editorial"
        className="w-full h-full object-cover object-top"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.2) 50%, transparent 80%)' }}
      />
    </div>
  )
}

function ScrollLine() {
  return (
    <motion.div
      animate={{ scaleY: [1, 0.3, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      className="w-px h-14 origin-top"
      style={{ background: 'linear-gradient(#c9a96e, transparent)' }}
    />
  )
}
