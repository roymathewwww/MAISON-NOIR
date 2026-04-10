import { useEffect, useRef } from 'react'

/**
 * Renders a soft radial glow that follows the cursor — a premium micro-interaction.
 * Mount once at the App level.
 */
export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return

    const move = (e) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
      el.style.opacity = '1'
    }
    const leave = () => { el.style.opacity = '0' }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[200] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
        opacity: 0,
        transition: 'opacity 0.4s ease',
        mixBlendMode: 'screen',
      }}
    />
  )
}
