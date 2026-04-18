import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, Zap, Shield, Palette, BarChart, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import GoldDivider from '../components/GoldDivider'
import SectionLabel from '../components/SectionLabel'

const services = [
  { icon: Globe, title: 'Business Websites', tagline: 'Your storefront, open 24/7', desc: 'A fully custom multi-page website that makes your business look established, trustworthy, and ready to convert. Includes all key pages, mobile-first design, and WhatsApp/call integration.', features: ['Up to 6 pages', 'Mobile-first design', 'Contact form integration', 'WhatsApp & call buttons', 'Google Maps embed', 'SEO basics'], price: 'From ₹8,000', color: '#6c3aff' },
  { icon: Zap, title: 'Landing Pages', tagline: 'One page. Maximum impact.', desc: 'A focused, high-converting single page built for a campaign, product launch, or service — designed to grab attention and drive a single, clear action.', features: ['Single page layout', 'Strong CTA design', 'Testimonials section', 'Lead capture form', 'Analytics integration', 'Delivered in 3–5 days'], price: 'From ₹4,000', color: '#00d4ff' },
  { icon: Shield, title: 'Portfolio Sites', tagline: 'Show the world your best work', desc: 'Elegant personal sites for designers, photographers, coaches, and creatives. A premium online home that builds your brand and attracts the right clients.', features: ['Clean, modern design', 'Gallery / project showcase', 'Bio & skills section', 'Testimonials block', 'Social media links', 'Fully responsive'], price: 'From ₹5,500', color: '#f472b6' },
  { icon: Palette, title: 'Redesigns', tagline: 'Refresh. Modernize. Impress.', desc: 'Is your website outdated or not reflecting your quality? We\'ll redesign it from scratch with a fresh, modern look that builds trust from the first second.', features: ['Full visual overhaul', 'Content restructuring', 'Improved UX flow', 'Mobile optimization', 'Performance improvements', 'Brand consistency'], price: 'From ₹6,000', color: '#fb923c' },
  { icon: BarChart, title: 'SEO & Speed', tagline: 'Get found. Load fast.', desc: 'Already have a website but it\'s slow or buried on Google? We\'ll optimize speed, structure, and on-page SEO so you rank higher and load faster.', features: ['Page speed audit', 'Image compression', 'Meta tags & keywords', 'Search Console setup', 'Sitemap & robots.txt', 'Core Web Vitals'], price: 'From ₹3,000', color: '#34d399' },
  { icon: HeadphonesIcon, title: 'Maintenance', tagline: 'We handle the tech. You handle business.', desc: 'Monthly support so your website stays updated, secure, and running perfectly. Includes content updates, bug fixes, and priority WhatsApp support.', features: ['Monthly content updates', 'Hosting management', 'Security monitoring', 'Backup & recovery', 'Bug fixes included', 'Priority WhatsApp support'], price: 'From ₹1,500/mo', color: '#a78bfa' },
]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } } }

export default function Services() {
  return (
    <PageTransition>
      {/* Hero */}
      <section style={{ padding: '10rem 48px 5rem', background: 'linear-gradient(180deg, var(--deep) 0%, var(--void) 100%)', borderBottom: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(108,58,255,0.08), transparent)', pointerEvents: 'none' }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
          <SectionLabel>Services</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem,7vw,6rem)', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Everything You Need<br /><span className="shimmer-text">To Go Online.</span>
          </h1>
          <GoldDivider center />
          <p style={{ maxWidth: 520, margin: '1rem auto 0', color: 'var(--muted)', lineHeight: 1.8, fontSize: '1rem' }}>Transparent pricing, clear deliverables, and a process designed around your success — not ours.</p>
        </motion.div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '6rem 48px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}
        >
          {services.map(s => (
            <motion.div key={s.title} variants={fadeUp}
              whileHover={{ y: -8, boxShadow: `0 24px 60px ${s.color}22` }}
              style={{ padding: '2.5rem', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', flexDirection: 'column', gap: '1.2rem', transition: 'box-shadow 0.3s, transform 0.4s', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.color}, ${s.color}44)`, borderRadius: '16px 16px 0 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${s.color}18`, border: `1px solid ${s.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <s.icon size={22} color={s.color} />
                </div>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: s.color, border: `1px solid ${s.color}44`, padding: '4px 12px', borderRadius: 50, fontWeight: 600 }}>{s.price}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', marginBottom: 4 }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: s.color, letterSpacing: '0.08em' }}>{s.tagline}</p>
              </div>
              <p style={{ fontSize: '0.87rem', color: 'var(--muted)', lineHeight: 1.75 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.82rem', color: 'var(--off-white)' }}>
                    <CheckCircle size={13} color={s.color} style={{ flexShrink: 0 }} /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process */}
      <section style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '6rem 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <SectionLabel>Our Process</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)' }}>Simple. Fast. <span className="shimmer-text">Stress-free.</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', position: 'relative' }}>
            {[
              { n: '01', title: 'Discovery', desc: 'We learn about your business, your goals, and what success looks like for you.' },
              { n: '02', title: 'Design', desc: 'We design your site and share live previews. You review, we refine — until it\'s perfect.' },
              { n: '03', title: 'Build & Launch', desc: 'Once approved, we build and deploy. Usually delivered within 7 days.' },
              { n: '04', title: 'Ongoing Support', desc: 'We stay your tech partner. Updates, fixes, improvements — whenever you need.' },
            ].map((p, i) => (
              <motion.div key={p.n}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '2rem', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--surface)', position: 'relative' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 50, background: 'linear-gradient(135deg, var(--violet), var(--cyan))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.85rem', color: 'white' }}>{p.n}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 48px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Not sure which service?<br /><span className="shimmer-text">Let's figure it out together.</span>
          </h2>
          <Link to="/contact">
            <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(108,58,255,0.45)' }} style={{
              padding: '1rem 2.5rem', borderRadius: 50,
              background: 'linear-gradient(135deg, var(--violet), var(--violet-bright))',
              border: 'none', cursor: 'pointer', color: 'white',
              fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 600,
              boxShadow: '0 8px 32px rgba(108,58,255,0.35)', display: 'inline-flex', alignItems: 'center', gap: 10, transition: 'box-shadow 0.3s',
            }}>
              Free Consultation <ArrowRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <style>{`@media(max-width:768px){section{padding-left:20px!important;padding-right:20px!important;}}`}</style>
    </PageTransition>
  )
}
