import { motion } from 'framer-motion'

export default function SectionLabel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: '0.75rem' }}
    >
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '5px 14px 5px 8px', borderRadius: 50,
        background: 'rgba(124,58,255,0.08)',
        border: '1px solid rgba(124,58,255,0.22)',
        backdropFilter: 'blur(8px)',
      }}>
        <span style={{
          display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--violet-bright), var(--cyan))',
          boxShadow: '0 0 8px var(--violet-bright)',
          animation: 'pulse-glow 2s ease-in-out infinite',
        }} />
        <span style={{
          fontFamily: 'var(--font-ui)', fontSize: '0.68rem',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--violet-bright)', fontWeight: 600,
        }}>{children}</span>
      </div>
    </motion.div>
  )
}
