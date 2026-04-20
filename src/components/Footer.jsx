import { Link } from 'react-router-dom'
import Logo from './Logo'
import { MessageCircle, Phone } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)', padding: `4rem var(--site-gutter) 2rem` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <Logo size={32} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', background: 'linear-gradient(90deg,#fff,#c0b0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nexora Developers</span>
            </Link>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: 260 }}>We build websites that open doors. Premium design, fast delivery, real results.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: '1.2rem' }}>
              <a href="https://wa.me/919358383671" target="_blank" rel="noopener noreferrer">
                <div style={{ width: 36, height: 36, borderRadius: 8, background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <MessageCircle size={16} color="white" />
                </div>
              </a>
              <a href="tel:+91935838367">
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--raised)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Phone size={16} color="var(--muted)" />
                </div>
              </a>
            </div>
          </div>
          {/* Nav */}
          {[
            { title: 'Pages', items: [['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/work', 'Work'], ['/contact', 'Contact']] },
            { title: 'Services', items: [['#','Business Websites'], ['#','Landing Pages'], ['#','Portfolios'], ['#','Redesigns'], ['#','SEO & Speed']] },
            { title: 'Contact', items: [['tel:+919358383671','+91 93583 83671'], ['mailto:nexoraadevelopers@gmail.com','nexoraadevelopers@gmail.com'], ['#','India (Remote-Friendly)']] },
          ].map(col => (
            <div key={col.title}>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--violet-bright)', marginBottom: '1rem', fontWeight: 600 }}>{col.title}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {col.items.map(([href, label]) => (
                  <Link key={label} to={href.startsWith('/') ? href : '#'}
                    onClick={href.startsWith('tel:') || href.startsWith('mailto:') ? () => window.location.href = href : undefined}
                    style={{ fontSize: '0.83rem', color: 'var(--muted)', transition: 'color 0.25s' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                  >{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>© {year} Nexora Developers. All rights reserved.</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Crafted with precision &amp; purpose · India</p>
        </div>
      </div>
      <style>{`@media(max-width:768px){footer>div>div:first-child{grid-template-columns:1fr!important;}}`}</style>
    </footer>
  )
}
