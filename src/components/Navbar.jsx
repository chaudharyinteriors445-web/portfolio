import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => setOpen(false), [location])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, height: 2, zIndex: 200,
          background: 'linear-gradient(90deg, var(--violet), var(--cyan), var(--violet-bright))',
          width: progressWidth,
          boxShadow: '0 0 10px var(--cyan-glow)',
        }}
      />

      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          paddingTop: scrolled ? 10 : 20,
          paddingBottom: scrolled ? 10 : 20,
          background: scrolled
            ? 'rgba(5, 4, 15, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(28px) saturate(200%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(200%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124,58,255,0.12)' : '1px solid transparent',
          transition: 'all 0.5s var(--ease-out-expo)',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div
          className="nav-inner"
          style={{
            maxWidth: 1200, margin: '0 auto', width: '100%',
            paddingLeft: 'var(--site-gutter)', paddingRight: 'var(--site-gutter)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <motion.div whileHover={{ scale: 1.08, rotate: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
              <Logo size={34} />
            </motion.div>
            <div>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '1.1rem', letterSpacing: '-0.01em',
                background: 'linear-gradient(90deg, #fff 0%, #c8b8ff 60%, var(--cyan) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Nexora</span>
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: '0.68rem',
                letterSpacing: '0.2em', display: 'block',
                textTransform: 'uppercase', marginTop: -2,
                background: 'linear-gradient(90deg, var(--cyan) 0%, var(--violet-bright) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Developers</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hide-mobile" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {links.map(l => {
              const active = location.pathname === l.to
              return (
                <Link key={l.to} to={l.to} style={{ position: 'relative' }}>
                  <motion.span
                    whileHover={{ color: '#fff', y: -1 }}
                    style={{
                      fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 500,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: active ? '#fff' : 'var(--muted)',
                      transition: 'color 0.3s', display: 'block',
                    }}
                  >{l.label}</motion.span>
                  {active && (
                    <motion.div layoutId="nav-active"
                      style={{
                        position: 'absolute', bottom: -5, left: 0, right: 0,
                        height: 1.5,
                        background: 'linear-gradient(90deg, var(--violet), var(--cyan))',
                        borderRadius: 2,
                        boxShadow: '0 0 8px var(--cyan-glow)',
                      }}
                    />
                  )}
                </Link>
              )
            })}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(124,58,255,0.5), 0 0 60px rgba(124,58,255,0.2)' }}
                whileTap={{ scale: 0.94 }}
                style={{
                  padding: '0.55rem 1.5rem', borderRadius: 50,
                  background: 'linear-gradient(135deg, var(--violet-deep), var(--violet), var(--violet-bright))',
                  border: 'none', cursor: 'pointer', color: 'white',
                  fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 600,
                  letterSpacing: '0.06em',
                  boxShadow: '0 4px 20px rgba(124,58,255,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
                  transition: 'box-shadow 0.3s',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Let's Talk</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'rgba(124,58,255,0.1)', border: '1px solid var(--border)',
              cursor: 'pointer', color: 'var(--off-white)',
              display: 'none', padding: '8px', borderRadius: 10,
              backdropFilter: 'blur(8px)',
            }}
            className="mobile-toggle"
          >
            <AnimatePresence mode="wait">
              {open
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={20} /></motion.div>
                : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={20} /></motion.div>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'rgba(2, 1, 8, 0.97)',
              backdropFilter: 'blur(40px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2rem',
              overflowY: 'auto', paddingBottom: '2rem', paddingTop: '7rem',
            }}
          >
            {/* Animated bg */}
            <div style={{
              position: 'absolute', top: '30%', left: '50%',
              transform: 'translate(-50%,-50%)', width: 500, height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,58,255,0.15), transparent 70%)',
              pointerEvents: 'none', filter: 'blur(40px)',
            }} />
            <div style={{
              position: 'absolute', bottom: '20%', right: '20%',
              width: 300, height: 300, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,229,255,0.08), transparent 70%)',
              pointerEvents: 'none', filter: 'blur(30px)',
            }} />

            {links.map((l, i) => {
              const active = location.pathname === l.to
              return (
                <motion.div key={l.to}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to={l.to} style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: 'clamp(2.2rem, 9vw, 4rem)',
                    color: active ? 'transparent' : 'var(--off-white)',
                    background: active ? 'linear-gradient(90deg, var(--violet), var(--cyan))' : 'none',
                    WebkitBackgroundClip: active ? 'text' : 'unset',
                    WebkitTextFillColor: active ? 'transparent' : 'unset',
                    letterSpacing: '-0.03em',
                    display: 'block',
                    transition: 'all 0.3s',
                  }}>{l.label}</Link>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              style={{ marginTop: '1rem' }}
            >
              <Link to="/contact">
                <button className="btn-primary">Let's Talk →</button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-inner { padding-left: 24px !important; padding-right: 24px !important; }
          .mobile-toggle { display: flex !important; align-items: center; justify-content: center; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
