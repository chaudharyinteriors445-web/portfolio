import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { MessageCircle, Phone, Mail, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      background: 'var(--deep)',
      borderTop: '1px solid var(--border)',
      padding: '5rem var(--site-gutter) 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 300,
        background: 'radial-gradient(ellipse, rgba(124,58,255,0.06), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: '3rem', marginBottom: '3.5rem',
        }}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}>
              <Logo size={32} />
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem',
                background: 'linear-gradient(90deg, #fff, #c8b8ff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Nexora Developers</span>
            </Link>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.85, maxWidth: 260, marginBottom: '1.5rem' }}>
              We build websites that open doors. Premium design, fast delivery, real results.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { href: 'https://wa.me/919358383671', icon: MessageCircle, bg: '#25d366', color: 'white', label: 'WhatsApp' },
                { href: 'tel:+919358383671', icon: Phone, bg: 'var(--raised)', color: 'var(--muted)', label: 'Phone' },
                { href: 'mailto:nexoraadevelopers@gmail.com', icon: Mail, bg: 'var(--raised)', color: 'var(--muted)', label: 'Email' },
              ].map(({ href, icon: Icon, bg, color, label }) => (
                <motion.a
                  key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: bg, border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'box-shadow 0.3s',
                  }}
                >
                  <Icon size={16} color={color} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {[
            { title: 'Pages', items: [['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/work', 'Work'], ['/contact', 'Contact']] },
            { title: 'Services', items: [['#', 'Business Websites'], ['#', 'Landing Pages'], ['#', 'Portfolios'], ['#', 'Redesigns'], ['#', 'SEO & Speed']] },
            { title: 'Contact', items: [['tel:+919358383671', '+91 93583 83671'], ['mailto:nexoraadevelopers@gmail.com', 'Email Us'], ['#', 'India (Remote)']] },
          ].map((col, ci) => (
            <motion.div key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (ci + 1) * 0.08 }}
            >
              <p style={{
                fontFamily: 'var(--font-ui)', fontSize: '0.7rem',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--violet-bright)', marginBottom: '1.2rem', fontWeight: 600,
              }}>{col.title}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {col.items.map(([href, label]) => (
                  <motion.div key={label} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <a
                      href={href.startsWith('/') ? undefined : href}
                      onClick={href.startsWith('/') ? undefined : undefined}
                      style={{ fontSize: '0.83rem', color: 'var(--muted)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: 4 }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                    >
                      {href.startsWith('/') ? (
                        <Link to={href} style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: 4 }}>
                          {label}
                        </Link>
                      ) : label}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: '1.8rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
            © {year} Nexora Developers. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Crafted with precision &amp; purpose · India</p>
            <motion.a
              href="#top"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              whileHover={{ scale: 1.1, y: -2 }}
              style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'var(--raised)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--muted)',
              }}
            >
              <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
