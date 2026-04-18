import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, Heart, Clock, Users, ArrowRight, Sparkles } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import GoldDivider from '../components/GoldDivider'
import SectionLabel from '../components/SectionLabel'
import Logo from '../components/Logo'

const skills = ['React', 'HTML5 / CSS3', 'JavaScript', 'Framer Motion', 'Figma', 'UI/UX Design', 'SEO', 'WordPress', 'Vite', 'Node.js basics', 'Git / GitHub', 'Responsive Design', 'Web Performance', 'Hosting & DNS']

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section style={{ padding: '10rem 48px 6rem', background: 'linear-gradient(180deg, var(--deep) 0%, var(--void) 100%)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
            <SectionLabel>About Nexora</SectionLabel>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              We Build for the<br /><span className="shimmer-text">Next Generation.</span>
            </h1>
            <GoldDivider />
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginTop: '1rem', fontSize: '1rem' }}>
              Nexora Developers is a boutique web design studio based in India, built around one obsession: making businesses look and perform their absolute best online.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginTop: '1rem', fontSize: '1rem' }}>
              We started because we saw too many brilliant businesses held back by poor or nonexistent websites. We bridge that gap — with fast, premium, and purposeful digital experiences at accessible prices.
            </p>
          </motion.div>
          {/* Visual */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16,1,0.3,1] }} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <motion.div
                animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', inset: -20, border: '1px dashed rgba(108,58,255,0.25)', borderRadius: '50%', pointerEvents: 'none' }}
              />
              <motion.div
                animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', inset: -50, border: '1px dashed rgba(0,212,255,0.12)', borderRadius: '50%', pointerEvents: 'none' }}
              />
              <div style={{
                width: 300, height: 340, borderRadius: 24, overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(108,58,255,0.15), rgba(0,212,255,0.08))',
                border: '1px solid var(--border-bright)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '1rem', boxShadow: '0 0 80px rgba(108,58,255,0.15)',
              }}>
                <Logo size={80} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', background: 'linear-gradient(90deg,#fff,#c0b0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nexora</div>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--muted)', textTransform: 'uppercase', marginTop: 4 }}>Developers</div>
                </div>
                <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, var(--violet), transparent)' }} />
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase' }}>Web Design Studio</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {['React', 'Figma', 'Vite'].map(t => (
                    <span key={t} style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: 50, background: 'rgba(108,58,255,0.15)', border: '1px solid var(--border)', color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 48px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3.5rem' }}>
          <SectionLabel>Our Values</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1 }}>The way we <span className="shimmer-text">work.</span></h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: Code2, title: 'Quality First', desc: 'Every pixel, every line of code is deliberate. We don\'t ship work we\'re not proud of.', color: '#6c3aff' },
            { icon: Clock, title: 'On-Time, Every Time', desc: 'Deadlines matter. We plan carefully and communicate clearly — no surprises.', color: '#00d4ff' },
            { icon: Heart, title: 'Personal Touch', desc: 'You\'re not a ticket number. We work closely with every client to bring their vision to life.', color: '#f472b6' },
            { icon: Users, title: 'Long-Term Partnership', desc: 'Our goal isn\'t just to launch your site — it\'s to be your trusted tech partner for years.', color: '#34d399' },
          ].map((v, i) => (
            <motion.div key={v.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: `0 20px 50px ${v.color}18` }}
              style={{ padding: '2.2rem', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--surface)', transition: 'all 0.4s', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${v.color}, transparent)` }} />
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${v.color}18`, border: `1px solid ${v.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <v.icon size={20} color={v.color} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.75 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionLabel>Our Toolkit</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,2.8rem)', marginBottom: '2.5rem' }}>Technologies we master.</h2>
          </motion.div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {skills.map((s, i) => (
              <motion.span key={s}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.08, borderColor: 'var(--violet-bright)', color: '#fff', background: 'rgba(108,58,255,0.15)' }}
                style={{ padding: '0.55rem 1.3rem', borderRadius: 50, border: '1px solid var(--border)', fontSize: '0.82rem', fontFamily: 'var(--font-ui)', color: 'var(--muted)', cursor: 'default', transition: 'all 0.25s', background: 'var(--surface)' }}
              >{s}</motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 48px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Sparkles size={32} color="var(--violet-bright)" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Let's build something<br /><span className="shimmer-text">extraordinary together.</span>
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact"><motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(108,58,255,0.45)' }} style={{ padding: '1rem 2.5rem', borderRadius: 50, background: 'linear-gradient(135deg, var(--violet), var(--violet-bright))', border: 'none', cursor: 'pointer', color: 'white', fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 600, boxShadow: '0 8px 32px rgba(108,58,255,0.35)', display: 'inline-flex', alignItems: 'center', gap: 10, transition: 'box-shadow 0.3s' }}>Contact Us <ArrowRight size={16} /></motion.button></Link>
            <Link to="/work"><motion.button whileHover={{ borderColor: 'var(--violet-bright)', color: '#fff' }} style={{ padding: '1rem 2.2rem', borderRadius: 50, background: 'transparent', border: '1px solid var(--border)', cursor: 'pointer', color: 'var(--muted)', fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.3s' }}>View Our Work</motion.button></Link>
          </div>
        </motion.div>
      </section>
      <style>{`@media(max-width:768px){section{padding-left:20px!important;padding-right:20px!important;} section>div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;gap:2.5rem!important;}}`}</style>
    </PageTransition>
  )
}
