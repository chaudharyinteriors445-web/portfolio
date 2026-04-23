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
      <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden' }}>

        {/* ✅ FIXED HERE */}
        <motion.div
          animate={{ opacity: 1 }}
          style={{
            y: heroY,
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        >
          <div />
          <div />
        </motion.div>

        {/* rest of your layout unchanged */}
      </section>
    </PageTransition>
  )
}