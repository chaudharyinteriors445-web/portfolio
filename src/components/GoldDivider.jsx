import { motion } from 'framer-motion'

export default function GoldDivider({ center = false }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        margin: '1.4rem 0',
        justifyContent: center ? 'center' : 'flex-start',
        transformOrigin: center ? 'center' : 'left',
      }}
    >
      <div style={{
        width: 48, height: 1.5,
        background: 'linear-gradient(90deg, var(--violet), var(--cyan))',
        borderRadius: 2,
        boxShadow: '0 0 8px rgba(0,229,255,0.4)',
      }} />
      <div style={{
        width: 7, height: 7, borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--cyan), var(--violet-bright))',
        boxShadow: '0 0 12px var(--cyan), 0 0 24px rgba(0,229,255,0.3)',
      }} />
      <div style={{
        width: 24, height: 1.5,
        background: 'linear-gradient(90deg, var(--cyan), transparent)',
        borderRadius: 2,
      }} />
    </motion.div>
  )
}
