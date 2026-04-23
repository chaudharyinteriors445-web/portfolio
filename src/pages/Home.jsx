import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import {
  ArrowRight,
  Zap,
  Globe,
  Layers,
  Sparkles,
  TrendingUp,
  Code2,
  Palette,
  Rocket,
  ChevronDown,
  Star,
  Shield,
  Clock,
  Users,
  ExternalLink,
  Play,
} from 'lucide-react'

/* ─────────────────────────────────────────────
   CURSOR GLOW
───────────────────────────────────────────── */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const leave = () => setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [visible])

  return (
    <motion.div
      animate={{ x: pos.x - 200, y: pos.y - 200, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(124,58,255,0.12) 0%, rgba(0,229,255,0.04) 50%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
        mixBlendMode: 'screen',
      }}
    />
  )
}

/* ─────────────────────────────────────────────
   FLOATING ORBS
───────────────────────────────────────────── */
function FloatingOrbs() {
  const orbs = [
    { w: 600, h: 600, top: '-10%', left: '-15%', color: 'rgba(124,58,255,0.18)', blur: 120, delay: 0, dur: 18 },
    { w: 500, h: 500, top: '20%', right: '-10%', color: 'rgba(0,229,255,0.12)', blur: 100, delay: 3, dur: 22 },
    { w: 400, h: 400, bottom: '10%', left: '20%', color: 'rgba(245,200,66,0.08)', blur: 80, delay: 6, dur: 26 },
    { w: 350, h: 350, top: '55%', right: '25%', color: 'rgba(124,58,255,0.1)', blur: 90, delay: 2, dur: 20 },
  ]
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 15, 0], x: [0, 15, -10, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: o.dur, delay: o.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: o.w,
            height: o.h,
            top: o.top,
            left: o.left,
            right: o.right,
            bottom: o.bottom,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
            filter: `blur(${o.blur}px)`,
          }}
        />
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   ANIMATED GRID BACKGROUND
───────────────────────────────────────────── */
function AnimatedGrid() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(124,58,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,58,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        pointerEvents: 'none',
      }}
    />
  )
}

/* ─────────────────────────────────────────────
   MARQUEE STRIP
───────────────────────────────────────────── */
const marqueeItems = [
  { icon: Zap, label: 'Lightning Fast' },
  { icon: Globe, label: 'Global Ready' },
  { icon: Layers, label: 'Pixel Perfect' },
  { icon: Sparkles, label: 'Premium Design' },
  { icon: TrendingUp, label: 'SEO Optimised' },
  { icon: Shield, label: 'Secure & Reliable' },
  { icon: Rocket, label: 'Launch Ready' },
  { icon: Star, label: 'Award Worthy' },
]

function MarqueeStrip() {
  const doubled = [...marqueeItems, ...marqueeItems]
  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(124,58,255,0.03)',
        padding: '14px 0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* fade edges */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(90deg, var(--void) 0%, transparent 8%, transparent 92%, var(--void) 100%)',
      }} />
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '3rem', width: 'max-content' }}
      >
        {doubled.map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              whiteSpace: 'nowrap', flexShrink: 0,
            }}
          >
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              background: 'rgba(124,58,255,0.15)',
              border: '1px solid rgba(124,58,255,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={13} color="var(--violet-bright)" />
            </div>
            <span style={{
              fontFamily: 'var(--font-ui)', fontSize: '0.78rem',
              fontWeight: 500, letterSpacing: '0.06em',
              color: 'var(--muted)', textTransform: 'uppercase',
            }}>{label}</span>
            <span style={{ color: 'var(--border-bright)', marginLeft: 8, fontSize: '0.6rem' }}>✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   COUNTER ANIMATION
───────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

/* ─────────────────────────────────────────────
   3D SERVICE CARD
───────────────────────────────────────────── */
function ServiceCard({ icon: Icon, title, desc, color, delay, index }) {
  const [hovered, setHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -10, y: dx * 10 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovered(false)
    setTilt({ x: 0, y: 0 })
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: hovered ? 1.03 : 1,
        z: hovered ? 40 : 0,
      }}
      transition={{
        default: { type: 'spring', stiffness: 200, damping: 20 },
        opacity: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{
        background: hovered
          ? 'rgba(20,18,48,0.95)'
          : 'rgba(14,12,35,0.7)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: hovered
          ? `1px solid ${color}55`
          : '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20,
        padding: '2rem',
        cursor: 'default',
        transformStyle: 'preserve-3d',
        boxShadow: hovered
          ? `0 24px 80px rgba(0,0,0,0.5), 0 0 40px ${color}22`
          : '0 8px 32px rgba(0,0,0,0.3)',
        transition: 'background 0.4s, border 0.4s, box-shadow 0.4s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Shimmer overlay on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '200%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '60%', height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)',
              pointerEvents: 'none', zIndex: 1,
            }}
          />
        )}
      </AnimatePresence>

      {/* Icon */}
      <motion.div
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 52, height: 52, borderRadius: 14,
          background: `${color}18`,
          border: `1px solid ${color}35`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.25rem',
          boxShadow: hovered ? `0 0 20px ${color}30` : 'none',
          transition: 'box-shadow 0.4s',
          position: 'relative', zIndex: 2,
        }}
      >
        <Icon size={22} color={color} />
      </motion.div>

      {/* Number badge */}
      <div style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem',
        fontFamily: 'var(--font-display)', fontSize: '3.5rem',
        fontWeight: 800, color: 'rgba(255,255,255,0.03)',
        lineHeight: 1, userSelect: 'none', zIndex: 0,
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: '1.1rem', color: 'var(--off-white)',
        marginBottom: '0.6rem', position: 'relative', zIndex: 2,
      }}>{title}</h3>

      <p style={{
        fontSize: '0.85rem', color: 'var(--muted)',
        lineHeight: 1.75, position: 'relative', zIndex: 2,
      }}>{desc}</p>

      {/* Bottom accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          transformOrigin: 'left',
        }}
      />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   PROJECT CARD (Work Teaser)
───────────────────────────────────────────── */
function ProjectCard({ title, tag, desc, color, delay, gradient }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 24,
        overflow: 'hidden',
        background: 'var(--card)',
        border: hovered ? `1px solid ${color}40` : '1px solid var(--border)',
        boxShadow: hovered
          ? `0 32px 80px rgba(0,0,0,0.5), 0 0 60px ${color}18`
          : '0 8px 32px rgba(0,0,0,0.3)',
        transition: 'all 0.5s var(--ease-out-expo)',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Visual area */}
      <div style={{
        height: 220,
        background: gradient,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Animated grid inside card */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }} />

        {/* Floating orb */}
        <motion.div
          animate={{ scale: hovered ? 1.3 : 1, opacity: hovered ? 0.8 : 0.5 }}
          transition={{ duration: 0.6 }}
          style={{
            width: 120, height: 120, borderRadius: '50%',
            background: `radial-gradient(circle, ${color}60, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />

        {/* Tag */}
        <div style={{
          position: 'absolute', top: 16, left: 16,
          padding: '4px 12px', borderRadius: 50,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${color}40`,
          fontFamily: 'var(--font-ui)', fontSize: '0.68rem',
          fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color,
        }}>{tag}</div>

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <motion.div
            animate={{ scale: hovered ? 1 : 0.7, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            style={{
              width: 52, height: 52, borderRadius: '50%',
              background: color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 0 30px ${color}80`,
            }}
          >
            <ExternalLink size={20} color="white" />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: '1.05rem', color: 'var(--off-white)',
          marginBottom: '0.5rem',
        }}>{title}</h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   MAGNETIC CTA BUTTON
───────────────────────────────────────────── */
function MagneticButton({ children, to, style: extraStyle }) {
  const btnRef = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setOffset({
      x: (e.clientX - cx) * 0.35,
      y: (e.clientY - cy) * 0.35,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 })
  }, [])

  return (
    <motion.div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      style={{ display: 'inline-block' }}
    >
      <Link to={to}>
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="btn-primary"
          style={extraStyle}
        >
          {children}
        </motion.button>
      </Link>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   SCROLL INDICATOR
───────────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.8 }}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 8,
        position: 'absolute', bottom: '2.5rem', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
      }}
    >
      <span style={{
        fontFamily: 'var(--font-ui)', fontSize: '0.65rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--muted)',
      }}>Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 24, height: 38, borderRadius: 12,
          border: '1.5px solid rgba(124,58,255,0.4)',
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'center', padding: '5px 0',
        }}
      >
        <motion.div
          animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 4, height: 8, borderRadius: 2,
            background: 'linear-gradient(var(--violet), var(--cyan))',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    desc: 'Full-stack websites that convert visitors into clients. Built for speed, SEO, and lasting impressions.',
    color: 'var(--violet-bright)',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    desc: 'High-converting single pages engineered around your offer. Every pixel earns its place.',
    color: 'var(--cyan)',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Interfaces that feel inevitable. We design with psychology, not just aesthetics.',
    color: 'var(--gold)',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    desc: 'Bespoke web applications built with modern stacks. Scalable, maintainable, and fast.',
    color: '#ff4d8d',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance',
    desc: 'Technical SEO and Core Web Vitals optimisation that puts you ahead of the competition.',
    color: '#00e5a0',
  },
  {
    icon: Layers,
    title: 'Brand Identity',
    desc: 'Cohesive visual systems — logos, palettes, typography — that make your brand unforgettable.',
    color: 'var(--violet)',
  },
]

const projects = [
  {
    title: 'Luminary Finance',
    tag: 'Fintech',
    desc: 'A premium dashboard and marketing site for a next-gen investment platform.',
    color: 'var(--cyan)',
    gradient: 'linear-gradient(135deg, #020a18 0%, #001a2e 50%, #002a40 100%)',
  },
  {
    title: 'Aura Wellness',
    tag: 'Health & Wellness',
    desc: 'Calming, conversion-focused website for a luxury wellness brand.',
    color: '#00e5a0',
    gradient: 'linear-gradient(135deg, #020f0a 0%, #001a10 50%, #002a1a 100%)',
  },
  {
    title: 'Forge Studio',
    tag: 'Creative Agency',
    desc: 'Bold portfolio site with immersive 3D transitions for a design studio.',
    color: 'var(--violet-bright)',
    gradient: 'linear-gradient(135deg, #08020f 0%, #120520 50%, #1a0830 100%)',
  },
]

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: Rocket },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: Star },
  { value: 3, suffix: 'x', label: 'Avg. Traffic Increase', icon: TrendingUp },
  { value: 48, suffix: 'h', label: 'Avg. Turnaround', icon: Clock },
]

const techBadges = [
  { label: 'React', color: '#61dafb' },
  { label: 'Next.js', color: '#ffffff' },
  { label: 'Framer', color: '#ff4d8d' },
  { label: 'Figma', color: '#f24e1e' },
  { label: 'TypeScript', color: '#3178c6' },
  { label: 'Tailwind', color: '#38bdf8' },
]

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
export default function Home() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])

  const springY = useSpring(heroY, { stiffness: 60, damping: 20 })

  return (
    <motion.main
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ background: 'var(--void)', overflowX: 'hidden' }}
    >
      <CursorGlow />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          position: 'relative',
          paddingTop: 100,
          paddingBottom: 80,
          paddingLeft: 'var(--site-gutter)',
          paddingRight: 'var(--site-gutter)',
          overflow: 'hidden',
        }}
      >
        <FloatingOrbs />
        <AnimatedGrid />

        {/* Radial spotlight */}
        <div style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '100%', maxWidth: 900, height: 600,
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,255,0.2), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <motion.div
          style={{ y: springY, opacity: heroOpacity, scale: heroScale }}
          className="display-hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{
            maxWidth: 900, margin: '0 auto',
            textAlign: 'center', position: 'relative', zIndex: 5,
          }}>

            {/* Label pill */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px 6px 10px', borderRadius: 50,
                background: 'rgba(124,58,255,0.1)',
                border: '1px solid rgba(124,58,255,0.3)',
                backdropFilter: 'blur(12px)',
                marginBottom: '2rem',
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: 'var(--cyan)',
                  boxShadow: '0 0 8px var(--cyan)',
                }}
              />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: '0.72rem',
                fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--violet-bright)',
              }}>Premium Web Design Agency</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                lineHeight: 1.05, letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
                color: 'var(--off-white)',
              }}
            >
              We Build Websites{' '}
              <br />
              <span className="shimmer-text">That Open Doors</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--muted)', lineHeight: 1.8,
                maxWidth: 580, margin: '0 auto 2.5rem',
                fontWeight: 300,
              }}
            >
              Nexora Developers crafts premium digital experiences — from bold landing pages
              to full-scale web applications — built to convert, impress, and scale.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex', gap: '1rem',
                justifyContent: 'center', flexWrap: 'wrap',
                marginBottom: '3.5rem',
              }}
            >
              <MagneticButton to="/contact">
                Start Your Project <ArrowRight size={16} />
              </MagneticButton>
              <Link to="/work">
                <motion.button
                  whileHover={{ scale: 1.04, borderColor: 'var(--violet-bright)', color: '#fff' }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-ghost"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                >
                  <Play size={14} />
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{
                display: 'flex', gap: '0.6rem',
                justifyContent: 'center', flexWrap: 'wrap',
              }}
            >
              {techBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + i * 0.07, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  style={{
                    padding: '4px 12px', borderRadius: 50,
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${badge.color}30`,
                    fontFamily: 'var(--font-ui)', fontSize: '0.7rem',
                    fontWeight: 500, color: badge.color,
                    backdropFilter: 'blur(8px)',
                    cursor: 'default',
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <ScrollIndicator />
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeStrip />

      {/* ── STATS ── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) var(--site-gutter)',
        position: 'relative',
        background: 'linear-gradient(180deg, var(--void) 0%, var(--deep) 100%)',
      }}>
        {/* Subtle divider glow */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 1,
          background: 'linear-gradient(90deg, transparent, var(--violet), var(--cyan), transparent)',
          opacity: 0.4,
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <div className="section-label-line" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <Sparkles size={12} color="var(--violet-bright)" />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: '0.68rem',
                fontWeight: 600, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--violet-bright)',
              }}>By the Numbers</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.02em', color: 'var(--off-white)',
            }}>
              Results that{' '}
              <span className="gradient-text">speak for themselves</span>
            </h2>
          </motion.div>

          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}>
            {stats.map(({ value, suffix, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.03 }}
                style={{
                  background: 'rgba(14,12,35,0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(124,58,255,0.4)'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(124,58,255,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Background number */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '6rem', color: 'rgba(124,58,255,0.04)',
                  lineHeight: 1, userSelect: 'none', whiteSpace: 'nowrap',
                }}>
                  {value}{suffix}
                </div>

                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(124,58,255,0.12)',
                  border: '1px solid rgba(124,58,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}>
                  <Icon size={20} color="var(--violet-bright)" />
                </div>

                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, var(--off-white), var(--violet-bright))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  lineHeight: 1, marginBottom: '0.5rem',
                }}>
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>

                <p style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.78rem',
                  color: 'var(--muted)', fontWeight: 500,
                  letterSpacing: '0.04em',
                }}>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .stats-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── SERVICES TEASER ── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) var(--site-gutter)',
        position: 'relative',
        background: 'var(--deep)',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800, height: 600,
          background: 'radial-gradient(ellipse, rgba(124,58,255,0.06), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          {/* Header */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem',
            marginBottom: '3.5rem',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="section-label-line" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
                <Layers size={12} color="var(--violet-bright)" />
                <span style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.68rem',
                  fontWeight: 600, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--violet-bright)',
                }}>What We Do</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.02em', color: 'var(--off-white)',
                lineHeight: 1.1,
              }}>
                Services built for{' '}
                <br />
                <span className="gradient-text">modern businesses</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-ghost"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                >
                  All Services <ArrowRight size={14} />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Services grid */}
          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            perspective: '1000px',
          }}>
            {services.map((svc, i) => (
              <ServiceCard
                key={svc.title}
                {...svc}
                index={i}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 580px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── WORK TEASER ── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) var(--site-gutter)',
        position: 'relative',
        background: 'linear-gradient(180deg, var(--deep) 0%, var(--surface) 100%)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Header */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem',
            marginBottom: '3.5rem',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="section-label-line" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
                <Star size={12} color="var(--gold)" />
                <span style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.68rem',
                  fontWeight: 600, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                }}>Selected Work</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.02em', color: 'var(--off-white)',
                lineHeight: 1.1,
              }}>
                Projects we're{' '}
                <span style={{
                  background: 'linear-gradient(135deg, var(--gold), #ffaa00)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>proud of</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/work">
                <motion.button
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-ghost"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                >
                  View All Work <ArrowRight size={14} />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Projects grid */}
          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {projects.map((proj, i) => (
              <ProjectCard key={proj.title} {...proj} delay={i * 0.12} />
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 580px) {
            .projects-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 5rem) var(--site-gutter)',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(124,58,255,0.04), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div className="trust-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}>
            {[
              {
                icon: Shield,
                title: 'No-Risk Guarantee',
                desc: "If you're not happy with the first draft, we revise until you are — no questions asked.",
                color: 'var(--cyan)',
              },
              {
                icon: Clock,
                title: 'Fast Delivery',
                desc: 'Most projects delivered within 5–10 business days. Speed without sacrificing quality.',
                color: 'var(--gold)',
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                desc: 'Direct access to your designer and developer throughout the entire project lifecycle.',
                color: 'var(--violet-bright)',
              },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color={color} />
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '0.95rem', color: 'var(--off-white)',
                    marginBottom: '0.4rem',
                  }}>{title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .trust-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{
        padding: 'clamp(6rem, 12vw, 10rem) var(--site-gutter)',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--surface) 0%, var(--void) 100%)',
      }}>
        {/* Animated rings */}
        {[1, 2, 3, 4].map((n) => (
          <motion.div
            key={n}
            animate={{ scale: [1, 1.5 + n * 0.3], opacity: [0.4, 0] }}
            transition={{
              duration: 3 + n * 0.5,
              repeat: Infinity,
              delay: n * 0.7,
              ease: 'easeOut',
            }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 200 + n * 80,
              height: 200 + n * 80,
              borderRadius: '50%',
              border: '1px solid rgba(124,58,255,0.2)',
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Glow center */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(124,58,255,0.15), transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }} />

        <div style={{
          maxWidth: 700, margin: '0 auto',
          textAlign: 'center', position: 'relative', zIndex: 5,
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 72, height: 72, borderRadius: 20,
                background: 'linear-gradient(135deg, var(--violet-deep), var(--violet))',
                border: '1px solid rgba(124,58,255,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 2rem',
                boxShadow: '0 0 40px rgba(124,58,255,0.4), 0 0 80px rgba(124,58,255,0.15)',
              }}
            >
              <Sparkles size={30} color="white" />
            </motion.div>

            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              letterSpacing: '-0.03em', lineHeight: 1.05,
              color: 'var(--off-white)', marginBottom: '1.25rem',
            }}>
              Ready to build{' '}
              <span className="shimmer-text">something great?</span>
            </h2>

            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'var(--muted)', lineHeight: 1.8,
              marginBottom: '2.5rem', maxWidth: 500, margin: '0 auto 2.5rem',
            }}>
              Let's turn your vision into a website that works as hard as you do.
              Free consultation, no commitment.
            </p>

            <div style={{
              display: 'flex', gap: '1rem',
              justifyContent: 'center', flexWrap: 'wrap',
            }}>
              <MagneticButton to="/contact">
                Get a Free Quote <ArrowRight size={16} />
              </MagneticButton>
              <a
                href="https://wa.me/919358383671"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.04, borderColor: '#25d366', color: '#25d366' }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-ghost"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                >
                  <span style={{ fontSize: '1rem' }}>💬</span>
                  WhatsApp Us
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
