import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, Tag } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import GoldDivider from '../components/GoldDivider'
import SectionLabel from '../components/SectionLabel'

const projects = [
  {
    id: 1,
    name: 'Home Root Farms',
    tagline: 'Pure Atta. Ancient Grains. Modern Health.',
    type: 'E-commerce Website',
    category: 'Food & Agriculture',
    year: '2024',
    url: 'https://homerootfarms.onrender.com/',
    emoji: '🌾',
    color: '#fbbf24',
    bg: 'linear-gradient(135deg, rgba(251,191,36,0.12) 0%, rgba(234,88,12,0.06) 100%)',
    tags: ['E-commerce', 'Product Catalogue', 'WhatsApp Orders', 'SEO', 'Mobile-first'],
    desc: 'Home Root Farms is a premium atta and ancient grain brand selling direct-to-consumer online. We built a warm, trust-rich e-commerce website that communicates the brand\'s commitment to purity and health. The site features a full product catalogue, WhatsApp-based ordering for frictionless checkout, a detailed brand story section, and strong SEO foundations to drive organic traffic.',
    results: ['120% increase in WhatsApp inquiries within 30 days', 'Mobile accounts for 78% of all traffic', 'Avg. session duration 3x longer than before', 'Ranked page 1 for "stone ground atta online"'],
    features: ['Full product catalogue with filters', 'WhatsApp "Order Now" CTA on every product', 'Brand story & sourcing section', 'Customer reviews integration', 'Fast mobile performance', 'Structured data / SEO'],
  },
  {
    id: 2,
    name: 'PackFolio',
    tagline: 'Packaging Solutions for Modern Businesses',
    type: 'B2B Business Website',
    category: 'Manufacturing & Supply',
    year: '2024',
    url: 'https://packfolio-1.onrender.com/',
    emoji: '📦',
    color: '#818cf8',
    bg: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.06) 100%)',
    tags: ['B2B', 'Lead Generation', 'Product Showcase', 'Inquiry Form', 'Professional Design'],
    desc: 'PackFolio is a B2B packaging supplier serving manufacturers, retailers, and exporters across India. We designed a clean, authoritative website that positions them as a premium supplier. The site showcases their full product range, provides detailed specifications, and features a quote-request flow that funnels serious buyers directly into their sales process.',
    results: ['Quote requests increased by 85% month-over-month', 'Bounce rate reduced from 72% to 38%', 'New trade partners from 6 new cities', 'Top 3 ranking for key B2B packaging terms'],
    features: ['Full product range with spec sheets', 'Multi-step quote request form', 'Industry segments landing sections', 'Client logos & trust badges', 'Downloadable catalogue PDF', 'Google Maps & contact integration'],
  },
  {
    id: 3,
    name: 'LexAide — Legal Consultancy',
    tagline: 'Expert Legal Guidance, Accessible Online',
    type: 'Professional Services Site',
    category: 'Legal & Finance',
    year: '2025',
    url: '#',
    emoji: '⚖️',
    color: '#34d399',
    bg: 'linear-gradient(135deg, rgba(52,211,153,0.1) 0%, rgba(6,182,212,0.06) 100%)',
    tags: ['Portfolio', 'Booking Form', 'Authority Design', 'SEO', 'Trust Building'],
    desc: 'LexAide is a boutique legal consultancy specialising in business law and intellectual property. We built a premium website designed to convey credibility and expertise from the first second. The design uses law-firm authority cues — dark navy, serif typography, gold accents — combined with an easy appointment booking flow that converts visitors into consultation clients.',
    results: ['35% increase in consultation bookings in month 1', 'Featured in a local business directory within weeks', 'Average session depth: 4.2 pages', 'Client retention improved with online document portal'],
    features: ['Attorney profiles with credentials', 'Practice area detail pages', 'Online appointment booking', 'Secure contact forms', 'Blog / Legal insights section', 'Multi-language ready'],
  },
  {
    id: 4,
    name: 'Shristi Photography',
    tagline: 'Where Moments Become Masterpieces',
    type: 'Creative Portfolio',
    category: 'Photography & Creative',
    year: '2025',
    url: '#',
    emoji: '📸',
    color: '#f472b6',
    bg: 'linear-gradient(135deg, rgba(244,114,182,0.1) 0%, rgba(192,38,211,0.06) 100%)',
    tags: ['Portfolio', 'Image Gallery', 'Lightbox', 'Booking', 'Instagram Feed'],
    desc: 'Shristi is a wedding and lifestyle photographer whose old website failed to showcase the true quality of her work. We rebuilt it as a dark, editorial portfolio with a full-screen hero, curated gallery sections, and a testimonials carousel. The result is a site that feels as premium as her photography — and books 3x more consultations.',
    results: ['Portfolio consultation bookings tripled', 'Instagram to website conversions up 60%', 'Average gallery view time: 6.5 minutes', 'Secured 2 destination wedding clients via the site'],
    features: ['Full-screen cinematic hero', 'Masonry photo gallery with lightbox', 'Category filters (Wedding/Portrait/Events)', 'Client testimonials carousel', 'Booking inquiry form', 'Instagram feed embed'],
  },
  {
    id: 5,
    name: 'Flavora — Cloud Kitchen',
    tagline: 'Fresh Food, Delivered Fast',
    type: 'Restaurant & Food Delivery',
    category: 'Food & Hospitality',
    year: '2025',
    url: '#',
    emoji: '🍜',
    color: '#fb923c',
    bg: 'linear-gradient(135deg, rgba(251,146,60,0.1) 0%, rgba(234,88,12,0.06) 100%)',
    tags: ['Landing Page', 'Menu Showcase', 'Zomato/Swiggy Links', 'WhatsApp Orders', 'Offers Section'],
    desc: 'Flavora is a cloud kitchen brand operating out of three cities, selling via Zomato, Swiggy, and direct WhatsApp orders. We built a high-energy landing page that showcases their best-sellers with rich food photography, links directly to delivery platforms, and drives bulk/catering orders via WhatsApp — all in a design that makes you hungry instantly.',
    results: ['WhatsApp bulk orders up 200% in 6 weeks', 'Catering inquiries from 4 new corporate clients', 'Brand recognition increased — featured in food blog', 'Swiggy clicks from site: 1,400+ per month'],
    features: ['Mouth-watering hero with food visuals', 'Best-seller menu cards', 'Direct delivery app links', 'WhatsApp bulk order flow', 'Special offers / promotions section', 'Social media integration'],
  },
]

const categories = ['All', 'E-commerce', 'B2B', 'Portfolio', 'Food & Hospitality', 'Legal & Finance']

const testimonials = [
  { name: 'Ananya Singh', role: 'Founder, Home Root Farms', quote: 'Our WhatsApp was ringing within the first week of launch. The website Nexora built made us look like a proper brand, not just a home business.' },
  { name: 'Rohan Mehta', role: 'Director, PackFolio', quote: 'We were sceptical — but the results don\'t lie. Quote requests went up 85% and we\'re now getting inquiries from cities we\'d never reached before.' },
  { name: 'Shristi Kapoor', role: 'Photographer, Shristi Photography', quote: 'Every potential client who visits my site tells me it\'s stunning. I\'ve tripled my bookings. Worth every rupee — and then some.' },
]

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(3,2,10,0.85)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', overflowY: 'auto' }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={e => e.stopPropagation()}
        style={{ background: 'var(--surface)', border: '1px solid var(--border-bright)', borderRadius: 20, width: '100%', maxWidth: 760, maxHeight: '90vh', overflow: 'auto' }}
      >
        {/* Header */}
        <div style={{ padding: '2.5rem', background: project.bg, borderRadius: '20px 20px 0 0', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: 8, padding: '4px 12px', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontSize: '0.78rem' }}>✕ Close</button>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{project.emoji}</div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: project.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>{project.type} · {project.year}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', marginBottom: 4 }}>{project.name}</h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{project.tagline}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: '1rem' }}>
            {project.tags.map(t => (
              <span key={t} style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: 50, background: 'rgba(0,0,0,0.3)', border: `1px solid ${project.color}44`, color: project.color, fontFamily: 'var(--font-ui)' }}>{t}</span>
            ))}
          </div>
        </div>
        {/* Body */}
        <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: project.color, marginBottom: '0.75rem' }}>The Project</h4>
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.9rem' }}>{project.desc}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: project.color, marginBottom: '0.75rem' }}>Key Features</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {project.features.map(f => (
                  <li key={f} style={{ fontSize: '0.83rem', color: 'var(--off-white)', display: 'flex', gap: 8 }}>
                    <span style={{ color: project.color }}>›</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: project.color, marginBottom: '0.75rem' }}>Results</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {project.results.map(r => (
                  <li key={r} style={{ fontSize: '0.83rem', color: 'var(--off-white)', display: 'flex', gap: 8 }}>
                    <span style={{ color: '#22c55e' }}>↑</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {project.url !== '#' && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.04 }} style={{
                padding: '0.85rem 2rem', borderRadius: 50,
                background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
                border: `1px solid ${project.color}55`, cursor: 'pointer',
                color: project.color, fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 8, width: 'fit-content',
              }}>
                <ExternalLink size={15} /> Visit Live Website
              </motion.button>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.65, ease: [0.16,1,0.3,1] }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        borderRadius: 16, overflow: 'hidden', border: hov ? '1px solid var(--border-bright)' : '1px solid var(--border)',
        background: 'var(--surface)', cursor: 'pointer',
        transform: hov ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: hov ? `0 28px 70px rgba(0,0,0,0.4)` : 'none',
        transition: 'all 0.4s var(--ease-out-expo)',
      }}
    >
      {/* Visual */}
      <div style={{ aspectRatio: '16/10', background: project.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
        <motion.div animate={{ scale: hov ? 1.08 : 1 }} transition={{ duration: 0.5 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '0.5rem', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))' }}>{project.emoji}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: project.color }}>{project.name}</div>
          </div>
        </motion.div>
        {/* Top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 28, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', padding: '0 10px', gap: 5, backdropFilter: 'blur(4px)' }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.85 }} />)}
        </div>
        <div style={{ position: 'absolute', top: 36, right: 12, padding: '3px 8px', borderRadius: 4, background: 'rgba(0,0,0,0.5)', fontFamily: 'var(--font-ui)', fontSize: '0.62rem', color: project.color, backdropFilter: 'blur(8px)', border: `1px solid ${project.color}44` }}>{project.year}</div>
        {project.url !== '#' && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
            style={{ position: 'absolute', bottom: 12, right: 12 }}>
            <motion.div whileHover={{ scale: 1.1 }} style={{ padding: '5px 12px', borderRadius: 50, background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: '#fff', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <ExternalLink size={11} /> Live Site
            </motion.div>
          </a>
        )}
      </div>
      {/* Info */}
      <div style={{ padding: '1.5rem' }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', color: project.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{project.category}</p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6, color: hov ? '#fff' : 'var(--off-white)' }}>{project.name}</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{project.tagline}</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {project.tags.slice(0, 3).map(t => (
            <span key={t} style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: 50, background: 'var(--raised)', border: '1px solid var(--border)', color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>{t}</span>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: project.color, marginTop: '1rem', display: 'flex', alignItems: 'center', gap: 4, opacity: hov ? 1 : 0.6, transition: 'opacity 0.3s' }}>View case study →</p>
      </div>
    </motion.div>
  )
}

export default function Work() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p =>
    p.category.toLowerCase().includes(filter.toLowerCase()) ||
    p.type.toLowerCase().includes(filter.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase()))
  )

  return (
    <PageTransition>
      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>

      {/* Hero */}
      <section style={{ padding: '10rem 48px 5rem', background: 'linear-gradient(180deg, var(--deep) 0%, var(--void) 100%)', borderBottom: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(108,58,255,0.1), transparent 70%)', pointerEvents: 'none' }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
          <SectionLabel>Our Portfolio</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Work We're<br /><span className="shimmer-text">Proud Of.</span>
          </h1>
          <GoldDivider center />
          <p style={{ maxWidth: 520, margin: '1rem auto 0', color: 'var(--muted)', lineHeight: 1.8, fontSize: '1rem' }}>Real websites. Real results. Click any project to see the full case study.</p>
        </motion.div>
      </section>

      {/* Filter tabs */}
      <section style={{ padding: '2.5rem 48px', borderBottom: '1px solid var(--border)', background: 'var(--deep)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(cat => (
            <motion.button key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.3rem', borderRadius: 50, cursor: 'pointer',
                fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 500,
                border: filter === cat ? '1px solid var(--violet-bright)' : '1px solid var(--border)',
                background: filter === cat ? 'linear-gradient(135deg, var(--violet), var(--violet-bright))' : 'var(--surface)',
                color: filter === cat ? '#fff' : 'var(--muted)',
                transition: 'all 0.3s',
                boxShadow: filter === cat ? '0 4px 16px rgba(108,58,255,0.3)' : 'none',
              }}
            >{cat}</motion.button>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section style={{ padding: '5rem 48px', maxWidth: 1200, margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          <motion.div key={filter}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}
          >
            {filtered.map(p => <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />)}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)', padding: '6rem 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <SectionLabel>Client Voices</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)' }}>What Our Clients Say</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{ padding: '2.5rem', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--violet), var(--cyan))' }} />
                <p style={{ fontSize: '2.5rem', color: 'var(--violet-bright)', lineHeight: 1, marginBottom: '1rem', opacity: 0.4 }}>"</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--off-white)', lineHeight: 1.85, fontStyle: 'italic', marginBottom: '1.5rem' }}>{t.quote}</p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>{t.name}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 2 }}>{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 48px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Want results like these?<br /><span className="shimmer-text">Let's make it happen.</span>
          </h2>
          <Link to="/contact">
            <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(108,58,255,0.45)' }} style={{
              padding: '1rem 2.5rem', borderRadius: 50,
              background: 'linear-gradient(135deg, var(--violet), var(--violet-bright))',
              border: 'none', cursor: 'pointer', color: 'white',
              fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 600,
              boxShadow: '0 8px 32px rgba(108,58,255,0.35)', display: 'inline-flex', alignItems: 'center', gap: 10, transition: 'box-shadow 0.3s',
            }}>
              Start Your Project <ArrowRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <style>{`@media(max-width:768px){section{padding-left:20px!important;padding-right:20px!important;}}`}</style>
    </PageTransition>
  )
}
