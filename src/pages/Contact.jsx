import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle, Sparkles, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import GoldDivider from '../components/GoldDivider'
import SectionLabel from '../components/SectionLabel'

const PHONE = '+91 93583 83671'
const PHONE_CLEAN = '919358383671'
const EMAIL = 'nexoraadevelopers@gmail.com'
const WA_MSG = encodeURIComponent("Hi Nexora Developers! I'd like to discuss a web project with you.")

function FloatingOrbs() {
  return (
    <div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}>
      {[
        {top:'-10%',left:'-5%',size:400,color:'rgba(124,58,255,0.12)',dur:16},
        {top:'40%',right:'-8%',size:300,color:'rgba(0,229,255,0.08)',dur:20},
      ].map((o,i)=>(
        <motion.div key={i} animate={{y:[0,-20,10,0],x:[0,10,-5,0]}} transition={{duration:o.dur,repeat:Infinity,ease:'easeInOut',delay:i*3}}
          style={{position:'absolute',top:o.top,left:o.left,right:o.right,width:o.size,height:o.size,borderRadius:'50%',background:`radial-gradient(circle,${o.color},transparent 70%)`,filter:'blur(60px)'}}/>
      ))}
    </div>
  )
}

export default function Contact() {
  const [form,setForm] = useState({name:'',email:'',service:'',budget:'',message:''})
  const [submitted,setSubmitted] = useState(false)
  const [focused,setFocused] = useState(null)
  const handle = e => setForm(f=>({...f,[e.target.name]:e.target.value}))

  const inputBase = {
    width:'100%',padding:'0.95rem 1.2rem',
    background:'rgba(14,12,35,0.7)',
    border:'1px solid rgba(255,255,255,0.06)',
    borderRadius:12,color:'var(--off-white)',
    fontFamily:'var(--font-body)',fontSize:'0.93rem',
    outline:'none',transition:'all 0.3s',
    boxSizing:'border-box',backdropFilter:'blur(8px)',
  }

  const submit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(`Hi! I'm reaching out via the Nexora website.\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage: ${form.message}`)
    window.open(`https://wa.me/${PHONE_CLEAN}?text=${msg}`,'_blank')
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <section style={{padding:'clamp(7rem,16vw,11rem) var(--site-gutter) 5rem',background:'linear-gradient(180deg,var(--deep) 0%,var(--void) 100%)',borderBottom:'1px solid var(--border)',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <FloatingOrbs/>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 60% at 50% 100%,rgba(124,58,255,0.1),transparent)',pointerEvents:'none'}}/>
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}} style={{position:'relative'}}>
          <SectionLabel>Get In Touch</SectionLabel>
          <h1 className="display-hero" style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(2rem,5.5vw,5.5rem)',lineHeight:0.95,letterSpacing:'-0.03em',marginBottom:'1.5rem'}}>
            Let's Build Your<br/><span className="shimmer-text">Dream Website.</span>
          </h1>
          <GoldDivider center/>
          <p style={{maxWidth:460,margin:'1rem auto 0',color:'var(--muted)',lineHeight:1.8}}>Reach out any way you prefer. We respond within a few hours.</p>
        </motion.div>
      </section>

      <section style={{padding:'3rem var(--site-gutter)',background:'rgba(5,4,15,0.8)',backdropFilter:'blur(20px)',borderBottom:'1px solid var(--border)'}}>
        <div style={{maxWidth:900,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'1rem'}}>
          <motion.a href={`https://wa.me/${PHONE_CLEAN}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            whileHover={{scale:1.04,y:-4,boxShadow:'0 16px 40px rgba(37,211,102,0.3)'}} whileTap={{scale:0.96}}
            style={{display:'flex',alignItems:'center',gap:'1rem',padding:'1.4rem 1.8rem',borderRadius:18,background:'linear-gradient(135deg,#25d366,#1da851)',color:'#fff',cursor:'pointer',transition:'box-shadow 0.3s',textDecoration:'none'}}>
            <div style={{width:44,height:44,borderRadius:12,background:'rgba(255,255,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}><MessageCircle size={22}/></div>
            <div><p style={{fontSize:'0.68rem',opacity:0.8,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:2}}>WhatsApp</p><p style={{fontSize:'0.95rem',fontWeight:600,fontFamily:'var(--font-ui)'}}>Chat Now</p></div>
          </motion.a>
          <motion.a href={`tel:+${PHONE_CLEAN}`}
            whileHover={{scale:1.04,y:-4,borderColor:'var(--violet-bright)'}} whileTap={{scale:0.96}}
            style={{display:'flex',alignItems:'center',gap:'1rem',padding:'1.4rem 1.8rem',borderRadius:18,background:'rgba(14,12,35,0.7)',backdropFilter:'blur(16px)',border:'1px solid rgba(255,255,255,0.06)',color:'var(--off-white)',cursor:'pointer',transition:'all 0.3s',textDecoration:'none'}}>
            <div style={{width:44,height:44,borderRadius:12,background:'rgba(124,58,255,0.15)',border:'1px solid rgba(124,58,255,0.25)',display:'flex',alignItems:'center',justifyContent:'center'}}><Phone size={20} color="var(--violet-bright)"/></div>
            <div><p style={{fontSize:'0.68rem',color:'var(--muted)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:2}}>Call Us</p><p style={{fontSize:'0.88rem',fontFamily:'var(--font-ui)',fontWeight:500}}>{PHONE}</p></div>
          </motion.a>
          <motion.a href={`mailto:${EMAIL}`}
            whileHover={{scale:1.04,y:-4,borderColor:'var(--cyan)'}} whileTap={{scale:0.96}}
            style={{display:'flex',alignItems:'center',gap:'1rem',padding:'1.4rem 1.8rem',borderRadius:18,background:'rgba(14,12,35,0.7)',backdropFilter:'blur(16px)',border:'1px solid rgba(255,255,255,0.06)',color:'var(--off-white)',cursor:'pointer',transition:'all 0.3s',textDecoration:'none'}}>
            <div style={{width:44,height:44,borderRadius:12,background:'rgba(0,229,255,0.1)',border:'1px solid rgba(0,229,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}><Mail size={20} color="var(--cyan)"/></div>
            <div><p style={{fontSize:'0.68rem',color:'var(--muted)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:2}}>Email</p><p style={{fontSize:'0.82rem',fontFamily:'var(--font-ui)',fontWeight:500}}>{EMAIL}</p></div>
          </motion.a>
        </div>
      </section>

      <section className="contact-split" style={{padding:'clamp(5rem,10vw,8rem) var(--site-gutter)',maxWidth:1100,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr min(380px,100%)',gap:'4rem',alignItems:'flex-start'}}>
        <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7,ease:[0.16,1,0.3,1]}}>
          <SectionLabel>Tell Us About Your Project</SectionLabel>
          <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.6rem,3vw,2.2rem)',marginBottom:'2rem',lineHeight:1.2}}>
            Fill in the details and we will respond via <span style={{color:'#25d366'}}>WhatsApp</span>.
          </h2>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} exit={{opacity:0}}
                style={{padding:'3rem',borderRadius:24,border:'1px solid rgba(37,211,102,0.3)',textAlign:'center',background:'rgba(37,211,102,0.04)',backdropFilter:'blur(16px)'}}>
                <motion.div animate={{scale:[1,1.2,1]}} transition={{duration:0.5}}>
                  <CheckCircle size={56} color="#22c55e" style={{margin:'0 auto 1rem'}}/>
                </motion.div>
                <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'2rem',marginBottom:'0.5rem'}}>We've Got It!</h3>
                <p style={{color:'var(--muted)',fontSize:'0.93rem',lineHeight:1.8}}>Your message has been sent to WhatsApp. We will respond within a few hours. Looking forward to working together!</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:'1.2rem'}}>
                <div className="contact-form-row" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                  {[{n:'name',l:'Your Name',p:'Rahul Sharma'},{n:'email',l:'Email Address',p:'rahul@example.com',t:'email'}].map(f=>(
                    <div key={f.n}>
                      <label style={{display:'block',fontFamily:'var(--font-ui)',fontSize:'0.72rem',color:'var(--muted)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8}}>{f.l} *</label>
                      <input required name={f.n} type={f.t||'text'} value={form[f.n]} onChange={handle}
                        onFocus={()=>setFocused(f.n)} onBlur={()=>setFocused(null)} placeholder={f.p}
                        style={{...inputBase,borderColor:focused===f.n?'var(--violet-bright)':'rgba(255,255,255,0.06)',boxShadow:focused===f.n?'0 0 0 3px rgba(124,58,255,0.15)':'none'}}/>
                    </div>
                  ))}
                </div>
                <div className="contact-form-row" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                  {[
                    {n:'service',l:'Service Needed',opts:['Business Website','Landing Page','Portfolio Site','Redesign','SEO & Speed','Maintenance','Not Sure']},
                    {n:'budget',l:'Your Budget',opts:['Under \u20b95,000','\u20b95,000\u201310,000','\u20b910,000\u201320,000','\u20b920,000+','Let\'s discuss']},
                  ].map(f=>(
                    <div key={f.n}>
                      <label style={{display:'block',fontFamily:'var(--font-ui)',fontSize:'0.72rem',color:'var(--muted)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8}}>{f.l}</label>
                      <select name={f.n} value={form[f.n]} onChange={handle}
                        onFocus={()=>setFocused(f.n)} onBlur={()=>setFocused(null)}
                        style={{...inputBase,cursor:'pointer',borderColor:focused===f.n?'var(--violet-bright)':'rgba(255,255,255,0.06)',boxShadow:focused===f.n?'0 0 0 3px rgba(124,58,255,0.15)':'none'}}>
                        <option value="" style={{background:'#0a0918'}}>Select...</option>
                        {f.opts.map(o=><option key={o} value={o} style={{background:'#0a0918'}}>{o}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{display:'block',fontFamily:'var(--font-ui)',fontSize:'0.72rem',color:'var(--muted)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8}}>Your Message *</label>
                  <textarea required name="message" value={form.message} onChange={handle}
                    onFocus={()=>setFocused('message')} onBlur={()=>setFocused(null)}
                    rows={5} placeholder="Tell us about your business and what you need..."
                    style={{...inputBase,resize:'vertical',borderColor:focused==='message'?'var(--violet-bright)':'rgba(255,255,255,0.06)',boxShadow:focused==='message'?'0 0 0 3px rgba(124,58,255,0.15)':'none'}}/>
                </div>
                <motion.button type="submit" whileHover={{scale:1.03,boxShadow:'0 0 30px rgba(37,211,102,0.35)'}} whileTap={{scale:0.97}}
                  style={{padding:'1rem 2.5rem',borderRadius:50,background:'linear-gradient(135deg,#25d366,#1da851)',border:'none',cursor:'pointer',color:'white',fontFamily:'var(--font-ui)',fontSize:'0.9rem',fontWeight:600,display:'flex',alignItems:'center',gap:10,width:'fit-content',transition:'box-shadow 0.3s',boxShadow:'0 8px 24px rgba(37,211,102,0.3)'}}>
                  <MessageCircle size={18}/> Send via WhatsApp
                </motion.button>
                <p style={{fontSize:'0.73rem',color:'var(--muted)'}}>Your message will open in WhatsApp. No forms, no spam — just a real conversation.</p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7,delay:0.15,ease:[0.16,1,0.3,1]}} style={{display:'flex',flexDirection:'column',gap:'1.2rem'}}>
          {[
            {icon:MapPin,label:'Location',value:'India (Remote-Friendly)',color:'var(--violet-bright)'},
            {icon:Clock,label:'Working Hours',value:'Mon–Sat, 10am–8pm IST',color:'var(--cyan)'},
            {icon:MessageCircle,label:'Response Time',value:'Within 2–4 hours',color:'#25d366'},
          ].map(info=>(
            <motion.div key={info.label} whileHover={{y:-4,borderColor:info.color}}
              style={{display:'flex',gap:'1rem',alignItems:'flex-start',padding:'1.4rem',borderRadius:18,border:'1px solid rgba(255,255,255,0.06)',background:'rgba(14,12,35,0.7)',backdropFilter:'blur(16px)',transition:'all 0.3s'}}>
              <div style={{width:42,height:42,borderRadius:12,background:`${info.color}15`,border:`1px solid ${info.color}30`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><info.icon size={18} color={info.color}/></div>
              <div>
                <p style={{fontFamily:'var(--font-ui)',fontSize:'0.7rem',color:'var(--muted)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:4}}>{info.label}</p>
                <p style={{fontSize:'0.9rem',color:'var(--off-white)'}}>{info.value}</p>
              </div>
            </motion.div>
          ))}

          <div style={{padding:'1.5rem',borderRadius:18,border:'1px solid rgba(124,58,255,0.2)',background:'rgba(124,58,255,0.04)',backdropFilter:'blur(16px)'}}>
            <p style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'1rem',marginBottom:'1rem',display:'flex',alignItems:'center',gap:8}}>
              <Sparkles size={16} color="var(--violet-bright)"/> Quick Answers
            </p>
            {[
              ['How long does it take?','3–7 days for most projects'],
              ['Do you offer revisions?','Yes — 3 rounds included'],
              ['What do you need from me?','Your logo, content & goals'],
              ['Payment methods?','UPI, Bank Transfer, GPay'],
            ].map(([q,a])=>(
              <div key={q} style={{borderBottom:'1px solid rgba(255,255,255,0.05)',padding:'0.65rem 0'}}>
                <p style={{fontSize:'0.78rem',color:'var(--off-white)',marginBottom:2}}>{q}</p>
                <p style={{fontSize:'0.73rem',color:'var(--violet-bright)'}}>{a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <style>{`
        @media(max-width:768px){
          .contact-split{grid-template-columns:1fr!important;gap:2.5rem!important;}
          .contact-form-row{grid-template-columns:1fr!important;}
          input,textarea,select{font-size:16px!important;}
        }
      `}</style>
    </PageTransition>
  )
}
