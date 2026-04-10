import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { PRODUCTS, CATEGORIES } from '../../assets/data/products'

/* Luxury easing — used by Hermès, Chanel, Bottega */
const luxuryEase = [0.22, 1, 0.36, 1]

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: luxuryEase },
  },
}

const filterReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3, ease: luxuryEase },
  },
}

export default function Collection() {
  const [active, setActive] = useState('All')
  const [ref, inView] = useInView()

  const filtered = active === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category.includes(active))

  return (
    <section id="collection" className="bg-[#0a0a0a] py-32 px-8 md:px-16">
      <div ref={ref} className="flex justify-between items-end mb-20 flex-wrap gap-8">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <p className="section-label mb-5">SS 2025 Collection</p>
          <h2 className="font-serif font-normal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1 }}>
            The <em className="italic text-[#e8d5b0]">Capsule</em> Edit
          </h2>
        </motion.div>

        <motion.div
          variants={filterReveal}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex gap-2 flex-wrap"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[0.65rem] tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-500 cursor-pointer font-sans
                ${active === cat
                  ? 'border-[#c9a96e] text-[#c9a96e] bg-[#c9a96e0d]'
                  : 'border-white/10 text-[#b0ada6] bg-transparent hover:border-[#c9a96e]/50 hover:text-[#c9a96e]'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Staggered grid */}
      <motion.div
        layout
        className="grid grid-cols-12 gap-5 md:gap-6"
      >
        <AnimatePresence>
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false)
  const [ref, inView] = useInView()

  const colSpan = `col-span-12 md:col-span-${product.span}`

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1.2, ease: luxuryEase, delay: index * 0.12 }}
      className={`${colSpan} relative overflow-hidden cursor-pointer group`}
      style={{ aspectRatio: product.aspectRatio, marginTop: product.marginTop }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image with luxury scale */}
      <motion.div
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 1.4, ease: luxuryEase }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Permanent subtle gradient for readability */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: hovered
            ? 'linear-gradient(0deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 45%, rgba(10,10,10,0.1) 70%)'
            : 'linear-gradient(0deg, rgba(10,10,10,0.5) 0%, transparent 40%)',
        }}
      />

      {/* Always-visible product name at bottom + expanded on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        {/* Category — slides up on hover */}
        <motion.span
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="block mb-2"
          style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a96e' }}
        >
          {product.category}
        </motion.span>

        {/* Name — always visible, grows on hover */}
        <motion.span
          initial={false}
          animate={{ y: hovered ? 0 : 4 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="font-serif font-normal text-white block mb-2"
          style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 1.2 }}
        >
          {product.name}
        </motion.span>

        {/* Price — slides up on hover */}
        <motion.span
          initial={false}
          animate={{ opacity: hovered ? 1 : 0.7, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.6, delay: 0.05, ease: luxuryEase }}
          className="tracking-wider font-light"
          style={{ fontSize: '0.9rem', color: '#e8e6e1' }}
        >
          {product.price}
        </motion.span>
      </div>

      {/* Gold corner accent — reveals on hover */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.9 }}
        transition={{ duration: 0.5, ease: luxuryEase }}
        className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
        style={{
          borderTop: '1px solid rgba(201,169,110,0.5)',
          borderRight: '1px solid rgba(201,169,110,0.5)',
        }}
      />

      {/* Arrow — bottom-right, luxury reveal */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
        transition={{ duration: 0.5, delay: 0.1, ease: luxuryEase }}
        className="absolute bottom-8 md:bottom-10 right-8 md:right-10 flex items-center gap-3"
      >
        <span
          className="h-px bg-[#c9a96e]/50"
          style={{ width: 32 }}
        />
        <span className="text-[#c9a96e] text-sm">→</span>
      </motion.div>
    </motion.div>
  )
}
