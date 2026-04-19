import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Zap, Shield, ChevronDown, Star, TrendingUp, Code, Layers } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import GoldDivider from '../components/GoldDivider'
import SectionLabel from '../components/SectionLabel'

/* ── Magnetic button hook ─────────────────────────────────── */
function useMagnet(strength = 0.4) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 200, damping: 20 })
  const y = useSpring(0, { stiffness: 200, damping: 20 })
  useEffect(() => {
    const el = ref.current; if (!el) return
    const move = e => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      x.set(dx * strength); y.set(dy * strength)
    }
    const leave = () => { x.set(0); y.set(0) }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave) }
  }, [])
  return { ref, x, y }
}

/* ── Cursor follower ──────────────────────────────────────── */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  useEffect(() => {
    const h = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])
  return (
    <motion.div
      animate={{ x: pos.x - 200, y: pos.y - 200 }}
      transition={{ type: 'spring', stiffness: 80, damping: 25 }}
      style={{
        position: 'fixed', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,58,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 1, top: 0, left: 0,
      }}
    />
  )
}

/* ── Floating orbs ────────────────────────────────────────── */
function Orbs() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {[
        { x: '65%', y: '10%', size: 500, color: 'rgba(108,58,255,0.12)', delay: 0, dur: 8 },
        { x: '-5%', y: '50%', size: 350, color: 'rgba(0,212,255,0.07)', delay: 2, dur: 10 },
        { x: '80%', y: '60%', size: 280, color: 'rgba(108,58,255,0.08)', delay: 4, dur: 7 },
        { x: '30%', y: '80%', size: 200, color: 'rgba(0,212,255,0.05)', delay: 1, dur: 12 },
      ].map((o, i) => (
        <motion.div key={i}
          animate={{ y: [0, -30, 10, 0], scale: [1, 1.05, 0.97, 1] }}
          transition={{ duration: o.dur, delay: o.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', left: o.x, top: o.y,
            width: o.size, height: o.size, borderRadius: '50%',
            background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
            filter: 'blur(40px)',
          }}
        />
      ))}
    </div>
  )
}

/* ── Animated grid background ────────────────────────────── */
function Grid() {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `
        linear-gradient(rgba(108,58,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(108,58,255,0.04) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
    }} />
  )
}

/* ── Marquee strip ────────────────────────────────────────── */
function Marquee() {
  const items = ['Business Websites', 'Landing Pages', 'E-commerce', 'Portfolios', 'SEO Optimization', 'Brand Identity', 'Web Apps', 'Redesigns']
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--deep)', padding: '14px 0' }}>
      <div style={{ display: 'flex', animation: 'marquee 22s linear infinite', width: 'max-content' }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap', padding: '0 2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {item}
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--violet)', display: 'inline-block', flexShrink: 0, boxShadow: '0 0 6px var(--violet)' }} />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Counter animation ───────────────────────────────────── */
function Counter({ to, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  useEffect(() => {
    if (!started) return
    let start = 0; const dur = 1800; const step = 16
    const inc = to / (dur / step)
    const t = setInterval(() => {
      start += inc
      if (start >= to) { setCount(to); clearInterval(t) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(t)
  }, [started, to])
  return <span ref={ref}>{count}{suffix}</span>
}

/* ── Service card ─────────────────────────────────────────── */
function ServiceCard({ icon: Icon, title, desc, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay, duration: 0.7, ease: [0.16,1,0.3,1] }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: '2.5rem', borderRadius: 16, cursor: 'default', position: 'relative', overflow: 'hidden',
        border: hov ? '1px solid var(--border-bright)' : '1px solid var(--border)',
        background: hov ? 'var(--card)' : 'var(--surface)',
        transform: hov ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.4s var(--ease-out-expo)',
        boxShadow: hov ? '0 24px 60px rgba(108,58,255,0.15)' : 'none',
      }}
    >
      {hov && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--violet), var(--cyan))', borderRadius: '16px 16px 0 0' }} />}
      <motion.div animate={{ rotate: hov ? [0, -10, 10, 0] : 0 }} transition={{ duration: 0.5 }}
        style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, rgba(108,58,255,0.2), rgba(0,212,255,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--border)' }}
      >
        <Icon size={22} color={hov ? 'var(--cyan)' : 'var(--violet-bright)'} />
      </motion.div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.7rem', color: hov ? '#fff' : 'var(--off-white)' }}>{title}</h3>
      <p style={{ fontSize: '0.87rem', color: 'var(--muted)', lineHeight: 1.75 }}>{desc}</p>
    </motion.div>
  )
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16,1,0.3,1] } } }

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const mag = useMagnet(0.3)

  return (
    <PageTransition>
      <CursorGlow />

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', overflowX: 'hidden', background: 'var(--void)' }}>
        <Orbs />
        <Grid />

        <motion.div
          className="hero-container"
          style={{
            position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto',
            padding: '0 var(--site-gutter)', width: '100%', minWidth: 0, boxSizing: 'border-box',
            y: heroY, opacity: heroOpacity,
          }}
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
              minWidth: 0,
              textAlign: 'left',
              /* Keeps headline / copy in the same vertical band as before (badge height + 1.5rem margin). */
              paddingTop: 'clamp(2.25rem, 4.5vw, 3.5rem)',
            }}
          >

            <motion.h1 variants={fadeUp} className="display-hero" style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(1.875rem, 6.5vw + 0.65rem, 8.5rem)', lineHeight: 0.95,
              letterSpacing: '-0.03em', margin: '0 0 0.4em',
              width: '100%', alignSelf: 'stretch',
            }}>
              <span style={{ display: 'block', color: 'var(--off-white)' }}>We Build</span>
              <span className="shimmer-text" style={{ display: 'block' }}>Websites</span>
              <span style={{ display: 'block', color: 'var(--off-white)' }}>That Win.</span>
            </motion.h1>

            <GoldDivider />

            <motion.p variants={fadeUp} style={{ maxWidth: 500, width: '100%', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.85, margin: '1rem 0 2.5rem', fontWeight: 300 }}>
              Nexora Developers craft premium, high-performance websites for businesses and individuals who demand the very best online presence — fast, beautiful, and built to convert.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <motion.div ref={mag.ref} style={{ x: mag.x, y: mag.y }}>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '1rem 2.5rem', borderRadius: 50,
                      background: 'linear-gradient(135deg, var(--violet), var(--violet-bright))',
                      border: 'none', cursor: 'pointer', color: 'white',
                      fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 600,
                      display: 'flex', alignItems: 'center', gap: 10,
                      boxShadow: '0 8px 32px rgba(108,58,255,0.4)',
                      position: 'relative', overflow: 'hidden',
                    }}
                  >
                    <span>Start a Project</span> <ArrowRight size={16} />
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                      style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', width: '50%' }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
              <Link to="/work">
                <motion.button whileHover={{ borderColor: 'var(--violet-bright)', color: '#fff' }} style={{
                  padding: '1rem 2.2rem', borderRadius: 50, background: 'transparent',
                  border: '1px solid var(--border)', cursor: 'pointer', color: 'var(--muted)',
                  fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 500,
                  transition: 'all 0.3s',
                }}>View Our Work</motion.button>
              </Link>
            </motion.div>

            {/* Stars / social proof */}
            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: '2.5rem' }}>
              <div style={{ display: 'flex' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f0c040" color="#f0c040" style={{ marginRight: 2 }} />)}
              </div>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', color: 'var(--muted)' }}>50+ happy clients · 5★ rated</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating tech badges */}
        {[
          { label: 'React', x: '78%', y: '20%', delay: 0.3 },
          { label: 'Framer Motion', x: '82%', y: '55%', delay: 0.6 },
          { label: 'Figma', x: '70%', y: '75%', delay: 0.9 },
        ].map(b => (
          <motion.div key={b.label}
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: b.delay + 0.8, type: 'spring', stiffness: 200 }}
            style={{ position: 'absolute', left: b.x, top: b.y, padding: '6px 14px', borderRadius: 50, background: 'rgba(13,12,36,0.9)', border: '1px solid var(--border)', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--muted)', backdropFilter: 'blur(10px)', animation: 'float 6s ease-in-out infinite', animationDelay: `${b.delay}s`, zIndex: 3 }}
            className="hide-mobile"
          >{b.label}</motion.div>
        ))}

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="hero-scroll-hint"
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'var(--muted)', zIndex: 3 }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── STATS ── */}
      <section style={{ padding: '6rem var(--site-gutter)', background: 'var(--deep)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(108,58,255,0.06), transparent 70%)', pointerEvents: 'none' }} />
        <div className="home-stats-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', position: 'relative' }}>
          {[
            { n: 50, suf: '+', label: 'Projects Delivered', icon: TrendingUp },
            { n: 100, suf: '%', label: 'Client Satisfaction', icon: Star },
            { n: 7, suf: ' Days', label: 'Avg. Delivery', icon: Zap },
            { n: 3, suf: ' Years', label: 'In Business', icon: Globe },
          ].map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16,1,0.3,1] }}
              style={{ textAlign: 'center', padding: '2rem', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--violet), transparent)' }} />
              <s.icon size={20} color="var(--violet-bright)" style={{ margin: '0 auto 1rem' }} />
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', lineHeight: 1 }}>
                <Counter to={s.n} suffix={s.suf} />
              </p>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--muted)', marginTop: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES TEASER ── */}
      <section style={{ padding: '7rem var(--site-gutter)', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <SectionLabel>What We Do</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1.1, maxWidth: 600 }}>
            Full-stack web presence,<br /><span className="shimmer-text">built for growth.</span>
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <ServiceCard icon={Globe} title="Business Websites" desc="Custom multi-page sites that make your business look established and trustworthy from day one." delay={0} />
          <ServiceCard icon={Zap} title="Landing Pages" desc="Single-focus, conversion-optimised pages for campaigns, products, and lead generation." delay={0.1} />
          <ServiceCard icon={Shield} title="Portfolios & Brands" desc="Elegant personal sites that make creatives, coaches, and professionals stand out instantly." delay={0.2} />
          <ServiceCard icon={Code} title="Redesigns & Fixes" desc="Breathe new life into outdated websites with modern design, improved UX, and better performance." delay={0.3} />
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/services">
            <motion.button whileHover={{ scale: 1.04, borderColor: 'var(--violet-bright)', color: '#fff' }} style={{
              padding: '0.85rem 2rem', background: 'transparent',
              border: '1px solid var(--border)', borderRadius: 50, cursor: 'pointer',
              color: 'var(--muted)', fontFamily: 'var(--font-ui)', fontSize: '0.85rem',
              fontWeight: 500, transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              See All Services <ArrowRight size={14} />
            </motion.button>
          </Link>
        </div>
      </section>

      {/* ── WORK TEASER ── */}
      <section style={{ padding: '2rem var(--site-gutter) 7rem', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <SectionLabel>Recent Work</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)' }}>Selected Projects</h2>
          </div>
          <Link to="/work"><motion.button whileHover={{ scale: 1.04 }} style={{ padding: '0.7rem 1.6rem', background: 'var(--raised)', border: '1px solid var(--border)', borderRadius: 50, cursor: 'pointer', color: 'var(--muted)', fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}>View All Work <ArrowRight size={13} /></motion.button></Link>
        </motion.div>
        <div className="home-work-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { name: 'Home Root Farms', type: 'E-commerce · Atta & Grains', emoji: '🌾', color: 'rgba(251,191,36,0.1)', accent: '#fbbf24', url: 'https://homerootfarms.onrender.com/', desc: 'Premium flour & ancient grain e-commerce platform' },
            { name: 'PackFolio', type: 'B2B · Packaging Supplier', emoji: '📦', color: 'rgba(99,102,241,0.1)', accent: '#818cf8', url: 'https://packfolio-1.onrender.com/', desc: 'Professional packaging supplier showcase website' },
          ].map((p, i) => (
            <motion.a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16,1,0.3,1] }}
              whileHover={{ y: -8, boxShadow: `0 24px 60px ${p.color.replace('0.1','0.3')}` }}
              style={{
                borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)',
                background: 'var(--surface)', display: 'block', cursor: 'pointer',
                transition: 'box-shadow 0.4s, transform 0.4s', textDecoration: 'none',
              }}
            >
              <div style={{ aspectRatio: '16/9', background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8, borderBottom: '1px solid var(--border)', position: 'relative' }}>
                <div style={{ fontSize: '3.5rem' }}>{p.emoji}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: p.accent }}>{p.name}</div>
                <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', borderRadius: 50, background: 'rgba(0,0,0,0.4)', fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'var(--muted)', backdropFilter: 'blur(8px)' }}>Live Site ↗</div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: p.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{p.type}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>{p.name}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 4 }}>{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="home-cta-outer" style={{ margin: '0 var(--site-gutter) 6rem', borderRadius: 24, overflow: 'hidden', position: 'relative' }}>
        <div className="home-cta-inner" style={{ background: 'linear-gradient(135deg, var(--raised) 0%, #0d0c36 100%)', padding: '6rem clamp(1.25rem, 5vw, 4rem)', textAlign: 'center', border: '1px solid var(--border-bright)', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(108,58,255,0.12), transparent)', pointerEvents: 'none' }} />
          {/* Animated ring */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(108,58,255,0.12)', animation: 'pulse-glow 3s ease-in-out infinite', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(108,58,255,0.06)', animation: 'pulse-glow 3s ease-in-out infinite 1s', pointerEvents: 'none' }} />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--violet-bright)', marginBottom: '1rem' }}>Ready to launch?</p>
            <h2 className="display-hero" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,4rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Your business deserves<br /><span className="shimmer-text">to be found online.</span>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: 420, margin: '0 auto 2.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>No jargon, no delays. Just a stunning website delivered on time — and a partner you can trust long-term.</p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(108,58,255,0.5)' }} whileTap={{ scale: 0.95 }} style={{
                padding: '1.1rem 3rem', borderRadius: 50,
                background: 'linear-gradient(135deg, var(--violet), var(--violet-bright))',
                border: 'none', cursor: 'pointer', color: 'white',
                fontFamily: 'var(--font-ui)', fontSize: '0.95rem', fontWeight: 600,
                boxShadow: '0 8px 32px rgba(108,58,255,0.4)', transition: 'box-shadow 0.3s',
              }}>Start Your Project Today →</motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-scroll-hint {
            left: max(1rem, env(safe-area-inset-left, 0px)) !important;
            transform: none !important;
            align-items: flex-start !important;
          }
          .home-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
          .home-work-grid { grid-template-columns: 1fr !important; }
          .home-cta-outer { margin-left: 1rem !important; margin-right: 1rem !important; }
          section.px-mobile { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </PageTransition>
  )
}
