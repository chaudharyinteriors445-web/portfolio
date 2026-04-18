import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => setOpen(false), [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: scrolled ? '12px 48px' : '22px 48px',
          background: scrolled ? 'rgba(7,6,26,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.5s var(--ease-out-expo)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logo size={34} />
          <div>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: '1.1rem', letterSpacing: '-0.01em',
              background: 'linear-gradient(90deg, #fff 0%, #c0b0ff 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Nexora</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.18em', display: 'block', textTransform: 'uppercase', marginTop: -2 }}>Developers</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {links.map(l => {
            const active = location.pathname === l.to
            return (
              <Link key={l.to} to={l.to} style={{ position: 'relative' }}>
                <motion.span
                  whileHover={{ color: '#fff' }}
                  style={{
                    fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 500,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: active ? '#fff' : 'var(--muted)',
                    transition: 'color 0.3s', display: 'block',
                  }}
                >{l.label}</motion.span>
                {active && (
                  <motion.div layoutId="nav-active"
                    style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 1, background: 'var(--violet-bright)', borderRadius: 1 }}
                  />
                )}
              </Link>
            )
          })}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 24px var(--violet-glow)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.55rem 1.4rem', borderRadius: 50,
                background: 'linear-gradient(135deg, var(--violet), var(--violet-bright))',
                border: 'none', cursor: 'pointer', color: 'white',
                fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 600,
                letterSpacing: '0.06em', transition: 'box-shadow 0.3s',
              }}
            >Let's Talk</motion.button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--off-white)',
          display: 'none', padding: 6,
        }} className="mobile-toggle">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'rgba(3,2,10,0.97)',
              backdropFilter: 'blur(30px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
            }}
          >
            {/* animated bg orb */}
            <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,58,255,0.12), transparent 70%)', pointerEvents: 'none' }} />
            {links.map((l, i) => (
              <motion.div key={l.to}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={l.to} style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                  color: location.pathname === l.to ? 'transparent' : 'var(--off-white)',
                  background: location.pathname === l.to ? 'linear-gradient(90deg,var(--violet),var(--cyan))' : 'none',
                  WebkitBackgroundClip: location.pathname === l.to ? 'text' : 'unset',
                  WebkitTextFillColor: location.pathname === l.to ? 'transparent' : 'unset',
                  letterSpacing: '-0.02em',
                }}>{l.label}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          nav { padding-left: 24px !important; padding-right: 24px !important; }
          .mobile-toggle { display: block !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
