import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import GoldDivider from '../components/GoldDivider'
import SectionLabel from '../components/SectionLabel'

const projects = [
  { id:1, name:'Home Root Farms', tagline:'Pure Atta. Ancient Grains. Modern Health.', type:'E-commerce Website', category:'Food & Agriculture', year:'2024', url:'https://homerootfarms.onrender.com/', emoji:'\u{1F33E}', color:'#fbbf24', bg:'linear-gradient(135deg,rgba(251,191,36,0.15),rgba(234,88,12,0.08))', tags:['E-commerce','WhatsApp Orders','SEO','Mobile-first'], desc:'Premium atta and ancient grain brand. We built a trust-rich e-commerce site with full product catalogue, WhatsApp ordering, and strong SEO foundations.', results:['120% increase in WhatsApp inquiries in 30 days','Mobile accounts for 78% of traffic','Avg. session duration 3x longer','Ranked page 1 for stone ground atta online'], features:['Full product catalogue','WhatsApp Order CTA','Brand story section','Customer reviews','Fast mobile performance','Structured data / SEO'] },
  { id:2, name:'PackFolio', tagline:'Packaging Solutions for Modern Businesses', type:'B2B Business Website', category:'Manufacturing & Supply', year:'2024', url:'https://packfolio-1.onrender.com/', emoji:'\u{1F4E6}', color:'#818cf8', bg:'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(168,85,247,0.08))', tags:['B2B','Lead Generation','Product Showcase','Inquiry Form'], desc:'B2B packaging supplier. We designed an authoritative website that positions them as a premium supplier with a quote-request flow that funnels serious buyers.', results:['Quote requests up 85% month-over-month','Bounce rate reduced from 72% to 38%','New partners from 6 new cities','Top 3 ranking for B2B packaging terms'], features:['Full product range','Multi-step quote form','Industry segments','Client logos & trust badges','Downloadable catalogue','Google Maps integration'] },
  { id:3, name:'LexAide', tagline:'Expert Legal Guidance, Accessible Online', type:'Professional Services Site', category:'Legal & Finance', year:'2025', url:'#', emoji:'\u2696\uFE0F', color:'#34d399', bg:'linear-gradient(135deg,rgba(52,211,153,0.12),rgba(6,182,212,0.07))', tags:['Portfolio','Booking Form','Authority Design','SEO'], desc:'Boutique legal consultancy. We built a premium site conveying credibility with appointment booking that converts visitors into consultation clients.', results:['35% increase in bookings in month 1','Featured in local business directory','Avg. session depth: 4.2 pages','Improved client retention'], features:['Attorney profiles','Practice area pages','Online booking','Secure contact forms','Blog section','Multi-language ready'] },
  { id:4, name:'Shristi Photography', tagline:'Where Moments Become Masterpieces', type:'Creative Portfolio', category:'Photography & Creative', year:'2025', url:'#', emoji:'\u{1F4F8}', color:'#f472b6', bg:'linear-gradient(135deg,rgba(244,114,182,0.12),rgba(192,38,211,0.07))', tags:['Portfolio','Image Gallery','Lightbox','Booking'], desc:'Wedding and lifestyle photographer. We rebuilt her site as a dark editorial portfolio with full-screen hero, curated galleries, and testimonials carousel.', results:['Consultation bookings tripled','Instagram conversions up 60%','Avg. gallery view time: 6.5 min','Secured 2 destination wedding clients'], features:['Full-screen hero','Masonry gallery with lightbox','Category filters','Testimonials carousel','Booking inquiry form','Instagram feed embed'] },
  { id:5, name:'Flavora Cloud Kitchen', tagline:'Fresh Food, Delivered Fast', type:'Restaurant & Food Delivery', category:'Food & Hospitality', year:'2025', url:'#', emoji:'\u{1F35C}', color:'#fb923c', bg:'linear-gradient(135deg,rgba(251,146,60,0.12),rgba(234,88,12,0.07))', tags:['Landing Page','Menu Showcase','WhatsApp Orders','Offers'], desc:'Cloud kitchen brand in 3 cities. We built a high-energy landing page showcasing best-sellers, linking to delivery platforms, and driving bulk orders via WhatsApp.', results:['WhatsApp bulk orders up 200% in 6 weeks','4 new corporate catering clients','Featured in food blog','1,400+ Swiggy clicks/month from site'], features:['Hero with food visuals','Best-seller menu cards','Delivery app links','WhatsApp bulk order flow','Offers section','Social media integration'] },
]

const categories = ['All','E-commerce','B2B','Portfolio','Food & Hospitality','Legal & Finance']

const testimonials = [
  { name:'Ananya Singh', role:'Founder, Home Root Farms', quote:'Our WhatsApp was ringing within the first week of launch. The website Nexora built made us look like a proper brand, not just a home business.' },
  { name:'Rohan Mehta', role:'Director, PackFolio', quote:'We were sceptical but the results speak for themselves. Quote requests went up 85% and we are now getting inquiries from cities we had never reached before.' },
  { name:'Shristi Kapoor', role:'Photographer, Shristi Photography', quote:'Every potential client who visits my site tells me it is stunning. I have tripled my bookings. Worth every rupee and then some.' },
]

function ProjectModal({ project, onClose }) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}
      style={{position:'fixed',inset:0,zIndex:200,background:'rgba(2,1,8,0.92)',backdropFilter:'blur(20px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem',overflowY:'auto'}}>
      <motion.div initial={{scale:0.88,y:50,opacity:0}} animate={{scale:1,y:0,opacity:1}} exit={{scale:0.9,y:20,opacity:0}}
        transition={{type:'spring',stiffness:280,damping:26}} onClick={e=>e.stopPropagation()}
        style={{background:'rgba(14,12,35,0.97)',backdropFilter:'blur(30px)',border:'1px solid rgba(124,58,255,0.3)',borderRadius:24,width:'100%',maxWidth:760,maxHeight:'90vh',overflow:'auto'}}>
        <div style={{padding:'2.5rem',background:project.bg,borderRadius:'24px 24px 0 0',position:'relative'}}>
          <button onClick={onClose} style={{position:'absolute',top:20,right:20,background:'rgba(0,0,0,0.4)',border:'1px solid rgba(255,255,255,0.1)',color:'white',borderRadius:8,padding:'5px 14px',cursor:'pointer',fontFamily:'var(--font-ui)',fontSize:'0.78rem'}}>Close</button>
          <div style={{fontSize:'3rem',marginBottom:'0.5rem'}}>{project.emoji}</div>
          <p style={{fontFamily:'var(--font-ui)',fontSize:'0.7rem',color:project.color,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:6}}>{project.type} - {project.year}</p>
          <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'2rem',marginBottom:4}}>{project.name}</h2>
          <p style={{color:'var(--muted)',fontSize:'0.9rem'}}>{project.tagline}</p>
          <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:'1rem'}}>
            {project.tags.map(t=><span key={t} style={{fontSize:'0.72rem',padding:'3px 10px',borderRadius:50,background:'rgba(0,0,0,0.35)',border:`1px solid ${project.color}44`,color:project.color,fontFamily:'var(--font-ui)'}}>{t}</span>)}
          </div>
        </div>
        <div style={{padding:'2.5rem',display:'flex',flexDirection:'column',gap:'2rem'}}>
          <p style={{color:'var(--muted)',lineHeight:1.85,fontSize:'0.9rem'}}>{project.desc}</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem'}}>
            <div>
              <h4 style={{fontFamily:'var(--font-ui)',fontWeight:600,fontSize:'0.78rem',letterSpacing:'0.1em',textTransform:'uppercase',color:project.color,marginBottom:'0.75rem'}}>Key Features</h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>
                {project.features.map(f=><li key={f} style={{fontSize:'0.83rem',color:'var(--off-white)',display:'flex',gap:8}}><span style={{color:project.color}}>›</span>{f}</li>)}
              </ul>
            </div>
            <div>
              <h4 style={{fontFamily:'var(--font-ui)',fontWeight:600,fontSize:'0.78rem',letterSpacing:'0.1em',textTransform:'uppercase',color:project.color,marginBottom:'0.75rem'}}>Results</h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>
                {project.results.map(r=><li key={r} style={{fontSize:'0.83rem',color:'var(--off-white)',display:'flex',gap:8}}><span style={{color:'#22c55e'}}>up</span>{r}</li>)}
              </ul>
            </div>
          </div>
          {project.url !== '#' && <a href={project.url} target="_blank" rel="noopener noreferrer"><motion.button whileHover={{scale:1.04}} style={{padding:'0.85rem 2rem',borderRadius:50,background:`linear-gradient(135deg,${project.color}25,${project.color}10)`,border:`1px solid ${project.color}50`,cursor:'pointer',color:project.color,fontFamily:'var(--font-ui)',fontSize:'0.85rem',fontWeight:600,display:'flex',alignItems:'center',gap:8,width:'fit-content'}}><ExternalLink size={15}/>Visit Live Website</motion.button></a>}
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onClick }) {
  const [hov,setHov] = useState(false)
  return (
    <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}}
      transition={{duration:0.65,ease:[0.16,1,0.3,1]}} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} onClick={onClick}
      style={{borderRadius:20,overflow:'hidden',border:hov?'1px solid rgba(124,58,255,0.4)':'1px solid rgba(255,255,255,0.06)',background:'rgba(14,12,35,0.7)',backdropFilter:'blur(16px)',cursor:'pointer',transform:hov?'translateY(-10px)':'translateY(0)',boxShadow:hov?'0 32px 80px rgba(0,0,0,0.5)':'0 4px 20px rgba(0,0,0,0.3)',transition:'all 0.4s var(--ease-out-expo)'}}>
      <div style={{aspectRatio:'16/10',background:project.bg,display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
        <motion.div animate={{scale:hov?1.1:1}} transition={{duration:0.5}} style={{textAlign:'center'}}>
          <div style={{fontSize:'4rem',marginBottom:'0.5rem',filter:'drop-shadow(0 8px 20px rgba(0,0,0,0.4))'}}>{project.emoji}</div>
          <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'1.1rem',color:project.color}}>{project.name}</div>
        </motion.div>
        <div style={{position:'absolute',top:0,left:0,right:0,height:28,background:'rgba(0,0,0,0.55)',display:'flex',alignItems:'center',padding:'0 10px',gap:5,backdropFilter:'blur(4px)'}}>
          {['#ff5f57','#febc2e','#28c840'].map(c=><div key={c} style={{width:8,height:8,borderRadius:'50%',background:c,opacity:0.85}}/>)}
        </div>
        <div style={{position:'absolute',top:36,right:12,padding:'3px 8px',borderRadius:4,background:'rgba(0,0,0,0.55)',fontFamily:'var(--font-ui)',fontSize:'0.62rem',color:project.color,backdropFilter:'blur(8px)',border:`1px solid ${project.color}44`}}>{project.year}</div>
        {project.url !== '#' && <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{position:'absolute',bottom:12,right:12}}><motion.div whileHover={{scale:1.1}} style={{padding:'5px 12px',borderRadius:50,background:'rgba(0,0,0,0.65)',border:'1px solid rgba(255,255,255,0.15)',fontFamily:'var(--font-ui)',fontSize:'0.65rem',color:'#fff',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',gap:4}}><ExternalLink size={11}/>Live Site</motion.div></a>}
        <motion.div animate={{opacity:hov?1:0}} transition={{duration:0.3}} style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.25)',display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none'}}>
          <div style={{padding:'8px 20px',borderRadius:50,background:'rgba(124,58,255,0.85)',fontFamily:'var(--font-ui)',fontSize:'0.75rem',fontWeight:600,color:'white'}}>View Case Study</div>
        </motion.div>
      </div>
      <div style={{padding:'1.5rem'}}>
        <p style={{fontFamily:'var(--font-ui)',fontSize:'0.68rem',color:project.color,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:4}}>{project.category}</p>
        <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'1.1rem',marginBottom:6,color:hov?'#fff':'var(--off-white)'}}>{project.name}</h3>
        <p style={{fontSize:'0.8rem',color:'var(--muted)',lineHeight:1.6,marginBottom:'1rem'}}>{project.tagline}</p>
        <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
          {project.tags.slice(0,3).map(t=><span key={t} style={{fontSize:'0.68rem',padding:'2px 8px',borderRadius:50,background:'rgba(124,58,255,0.08)',border:'1px solid rgba(124,58,255,0.2)',color:'var(--muted)',fontFamily:'var(--font-ui)'}}>{t}</span>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Work() {
  const [selected,setSelected] = useState(null)
  const [filter,setFilter] = useState('All')
  const filtered = filter==='All' ? projects : projects.filter(p=>p.category.toLowerCase().includes(filter.toLowerCase())||p.type.toLowerCase().includes(filter.toLowerCase())||p.tags.some(t=>t.toLowerCase().includes(filter.toLowerCase())))

  return (
    <PageTransition>
      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={()=>setSelected(null)}/>}</AnimatePresence>

      <section style={{padding:'clamp(7rem,16vw,11rem) var(--site-gutter) 5rem',background:'linear-gradient(180deg,var(--deep) 0%,var(--void) 100%)',borderBottom:'1px solid var(--border)',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:700,height:500,background:'radial-gradient(ellipse,rgba(124,58,255,0.12),transparent 70%)',pointerEvents:'none',filter:'blur(40px)'}}/>
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}} style={{position:'relative'}}>
          <SectionLabel>Our Portfolio</SectionLabel>
          <h1 className="display-hero" style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(2rem,5.5vw,5.5rem)',lineHeight:0.95,letterSpacing:'-0.03em',marginBottom:'1.5rem'}}>
            Work We Are<br/><span className="shimmer-text">Proud Of.</span>
          </h1>
          <GoldDivider center/>
          <p style={{maxWidth:520,margin:'1rem auto 0',color:'var(--muted)',lineHeight:1.8,fontSize:'1rem'}}>Real websites. Real results. Click any project to see the full case study.</p>
        </motion.div>
      </section>

      <section style={{padding:'2rem var(--site-gutter)',borderBottom:'1px solid var(--border)',background:'rgba(5,4,15,0.85)',backdropFilter:'blur(20px)',position:'sticky',top:64,zIndex:50}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',gap:'0.6rem',flexWrap:'wrap',justifyContent:'center'}}>
          {categories.map(cat=>(
            <motion.button key={cat} whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={()=>setFilter(cat)}
              style={{padding:'0.45rem 1.2rem',borderRadius:50,cursor:'pointer',fontFamily:'var(--font-ui)',fontSize:'0.78rem',fontWeight:500,border:filter===cat?'1px solid var(--violet-bright)':'1px solid var(--border)',background:filter===cat?'linear-gradient(135deg,var(--violet-deep),var(--violet))':'rgba(14,12,35,0.7)',color:filter===cat?'#fff':'var(--muted)',transition:'all 0.3s',boxShadow:filter===cat?'0 4px 20px rgba(124,58,255,0.35)':'none',backdropFilter:'blur(8px)'}}>
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      <section style={{padding:'4rem var(--site-gutter)',maxWidth:1200,margin:'0 auto'}}>
        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,300px),1fr))',gap:'1.5rem'}}>
            {filtered.map(p=><ProjectCard key={p.id} project={p} onClick={()=>setSelected(p)}/>)}
          </motion.div>
        </AnimatePresence>
      </section>

      <section style={{background:'var(--deep)',borderTop:'1px solid var(--border)',padding:'clamp(5rem,10vw,8rem) var(--site-gutter)'}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} style={{textAlign:'center',marginBottom:'4rem'}}>
            <SectionLabel>Client Voices</SectionLabel>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(2rem,4vw,3rem)'}}>What Our Clients Say</h2>
          </motion.div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))',gap:'1.5rem'}}>
            {testimonials.map((t,i)=>(
              <motion.div key={t.name} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:0.6}}
                whileHover={{y:-6,boxShadow:'0 20px 50px rgba(0,0,0,0.4)'}}
                style={{padding:'2.5rem',borderRadius:20,border:'1px solid rgba(255,255,255,0.06)',background:'rgba(14,12,35,0.7)',backdropFilter:'blur(16px)',position:'relative',overflow:'hidden',transition:'box-shadow 0.4s'}}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,var(--violet),var(--cyan))'}}/>
                <div style={{fontSize:'3rem',color:'var(--violet-bright)',lineHeight:1,marginBottom:'1rem',opacity:0.3}}>"</div>
                <p style={{fontSize:'0.9rem',color:'var(--off-white)',lineHeight:1.85,fontStyle:'italic',marginBottom:'1.5rem'}}>{t.quote}</p>
                <div style={{borderTop:'1px solid rgba(255,255,255,0.06)',paddingTop:'1rem',display:'flex',alignItems:'center',gap:'0.75rem'}}>
                  <div style={{width:36,height:36,borderRadius:'50%',background:'linear-gradient(135deg,var(--violet),var(--cyan))',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:700,fontSize:'0.9rem',color:'white',flexShrink:0}}>{t.name[0]}</div>
                  <div>
                    <p style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'0.95rem'}}>{t.name}</p>
                    <p style={{fontSize:'0.73rem',color:'var(--muted)',marginTop:2}}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'clamp(5rem,10vw,8rem) var(--site-gutter)',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:600,height:400,background:'radial-gradient(ellipse,rgba(124,58,255,0.08),transparent 70%)',pointerEvents:'none',filter:'blur(40px)'}}/>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} style={{position:'relative'}}>
          <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(2rem,4vw,3.5rem)',marginBottom:'1.5rem',lineHeight:1.1}}>
            Want results like these?<br/><span className="shimmer-text">Let us make it happen.</span>
          </h2>
          <Link to="/contact">
            <motion.button whileHover={{scale:1.05,boxShadow:'0 0 40px rgba(124,58,255,0.5)'}} whileTap={{scale:0.95}} className="btn-primary" style={{display:'inline-flex',alignItems:'center',gap:10}}>
              Start Your Project <ArrowRight size={16}/>
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  )
}
