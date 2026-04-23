import { useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, Heart, Clock, Users, ArrowRight, Sparkles, Zap, Star, Award } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import GoldDivider from '../components/GoldDivider'
import SectionLabel from '../components/SectionLabel'
import Logo from '../components/Logo'

const skills = [
  { label: 'React', color: '#61dafb' },
  { label: 'Next.js', color: '#ffffff' },
  { label: 'TypeScript', color: '#3178c6' },
  { label: 'HTML5 / CSS3', color: '#e34f26' },
  { label: 'JavaScript', color: '#f7df1e' },
  { label: 'Framer Motion', color: '#ff4d8d' },
  { label: 'Figma', color: '#f24e1e' },
  { label: 'UI/UX Design', color: '#7c3aff' },
  { label: 'SEO', color: '#00e5ff' },
  { label: 'WordPress', color: '#21759b' },
  { label: 'Vite', color: '#646cff' },
  { label: 'Node.js', color: '#68a063' },
  { label: 'Git / GitHub', color: '#f05032' },
  { label: 'Responsive Design', color: '#00e5a0' },
  { label: 'Web Performance', color: '#f5c842' },
  { label: 'Hosting & DNS', color: '#a78bfa' },
  // Backend & Full Stack
  { label: 'Python', color: '#3776ab' },
  { label: 'Django', color: '#009421', },
  { label: 'FastAPI', color: '#009485' },
  { label: 'Express.js', color: '#90c53f' },
  { label: 'REST APIs', color: '#00a8cc' },
  { label: 'GraphQL', color: '#e10098' },
  // Databases
  { label: 'MongoDB', color: '#13aa52' },
  { label: 'PostgreSQL', color: '#336791' },
  { label: 'MySQL', color: '#00758f' },
  { label: 'Firebase', color: '#ffa400' },
  // Cloud & DevOps
  { label: 'AWS', color: '#ff9900' },
  { label: 'Google Cloud', color: '#4285f4' },
  { label: 'Azure', color: '#0078d4' },
  { label: 'Vercel', color: '#fff8f0' },
  { label: 'Netlify', color: '#00c7b7' },
  { label: 'Docker', color: '#2496ed' },
  { label: 'Kubernetes', color: '#316ce6' },
  // Tools & Frameworks
  { label: 'Tailwind CSS', color: '#06b6d4' },
  { label: 'Bootstrap', color: '#7952b3' },
  { label: 'Redux', color: '#764abc' },
  { label: 'Zustand', color: '#8b4513' },
  { label: 'Stripe', color: '#5469d4' },
  { label: 'Supabase', color: '#3ecf8e' },
]

const values = [
  { icon: Code2, title: 'Quality First', desc: "Every pixel, every line of code is deliberate. We don't ship work we're not proud of.", color: '#7c3aff' },
  { icon: Clock, title: 'On-Time, Every Time', desc: 'Deadlines matter. We plan carefully and communicate clearly — no surprises.', color: '#00e5ff' },
  { icon: Heart, title: 'Personal Touch', desc: "You're not a ticket number. We work closely with every client to bring their vision to life.", color: '#ff4d8d' },
  { icon: Users, title: 'Long-Term Partnership', desc: "Our goal isn't just to launch your site — it's to be your trusted tech partner for years.", color: '#00e5a0' },
]

const milestones = [
  { year: '2023', label: 'Founded', desc: 'Nexora Developers was born with a mission to make premium web design accessible.' },
  { year: '2024', label: 'First 10 Clients', desc: 'Delivered 10 projects across e-commerce, B2B, and creative portfolios.' },
  { year: '2024', label: '50+ Projects', desc: 'Crossed 50 successful launches with a 100% client satisfaction rate.' },
  { year: '2025', label: 'Growing Strong', desc: 'Expanding our team and service offerings to serve more businesses globally.' },
]

function ValueCard({ icon: Icon, title, desc, color, index }) {
  const [hovered, setHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const onMove = useCallback((e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
    setTilt({ x: dy * -8, y: dx * 8 })
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={onMove}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.03 : 1 }}
      style={{
        padding: '2.2rem', borderRadius: 20,
        background: hovered ? 'rgba(20,18,48,0.95)' : 'rgba(14,12,35,0.7)',
        backdropFilter: 'blur(20px)',
        border: hovered ? `1px solid ${color}44` : '1px solid rgba(255,255,255,0.06)',
        boxShadow: hovered ? `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${color}18` : '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'background 0.4s, border 0.4s, box-shadow 0.4s',
        position: 'relative', overflow: 'hidden',
        transformStyle: 'preserve-3d', cursor: 'default',
      }}
    >
      {/* content unchanged */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${color}, transparent)`,
          transformOrigin: 'left',
        }}
      />
      <div style={{
        position: 'absolute', bottom: -10, right: 10,
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: '5rem', color: `${color}08`,
        lineHeight: 1, userSelect: 'none',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: `${color}18`, border: `1px solid ${color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.25rem',
      }}>
        <Icon size={22} color={color} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  )
}

export default function About() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(7rem,16vw,11rem) var(--site-gutter) 5rem', background: 'linear-gradient(180deg,var(--deep) 0%,var(--void) 100%)', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
        <motion.div
          style={{
            y: heroY,
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        >
          <div style={{ position: 'absolute', top: '20%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,255,0.15), transparent 70%)', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.08), transparent 70%)', filter: 'blur(50px)' }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'relative', zIndex: 1 }}>
          <SectionLabel>About Nexora</SectionLabel>
          <h1 className="display-hero" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,5.5vw,5.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            We Build Premium Experiences,<br/><span className="shimmer-text">Not Just Websites.</span>
          </h1>
          <GoldDivider center/>
          <p style={{ maxWidth: 560, margin: '1rem auto 0', color: 'var(--muted)', lineHeight: 1.8 }}>Since 2023, we've been crafting digital experiences that drive real business results. Every project reflects our commitment to excellence, innovation, and lasting partnerships.</p>
        </motion.div>
      </section>

      {/* VALUES SECTION */}
      <section style={{ padding: 'clamp(5rem,10vw,8rem) var(--site-gutter)', background: 'rgba(5,4,15,0.6)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>Our Core Values</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>What Drives Everything We Do</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {values.map((v, i) => <ValueCard key={i} {...v} index={i} />)}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section style={{ padding: 'clamp(5rem,10vw,8rem) var(--site-gutter)', background: 'linear-gradient(180deg, rgba(5,4,15,0.3) 0%, rgba(10,9,24,0.5) 100%)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>Our Expertise</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', marginBottom: '1rem' }}>Technologies & Skills</h2>
          </motion.div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {skills.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03, duration: 0.4 }} whileHover={{ scale: 1.08, y: -4 }} style={{ padding: '0.7rem 1.4rem', borderRadius: 50, background: 'rgba(14,12,35,0.8)', border: `1px solid ${s.color}40`, cursor: 'pointer' }}>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 500, color: s.color }}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section style={{ padding: 'clamp(5rem,10vw,8rem) var(--site-gutter)', background: 'rgba(5,4,15,0.8)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>Our Journey</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', marginBottom: '1rem' }}>Milestones & Growth</h2>
          </motion.div>
          <div style={{ display: 'grid', gap: '2.5rem' }}>
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '2rem', alignItems: 'start', paddingBottom: i < milestones.length - 1 ? '2rem' : 0, borderBottom: i < milestones.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ paddingTop: '0.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', background: 'linear-gradient(90deg, var(--violet), var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{m.year}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--off-white)' }}>{m.label}</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: 'clamp(5rem,10vw,8rem) var(--site-gutter)', textAlign: 'center', background: 'linear-gradient(180deg, rgba(5,4,15,0.5) 0%, rgba(20,18,48,0.3) 100%)', borderTop: '1px solid var(--border)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', marginBottom: '1.5rem' }}>Ready to Work Together?</h2>
          <p style={{ maxWidth: 480, margin: '0 auto 2rem', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>Let's turn your vision into reality. We're here to bring your ideas to life with precision and passion.</p>
          <Link to="/contact">
            <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }} className="btn-primary">
              Start Your Project <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  )
}