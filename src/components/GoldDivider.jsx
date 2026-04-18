export default function GoldDivider({ center = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '1.2rem 0', justifyContent: center ? 'center' : 'flex-start' }}>
      <div style={{ width: 32, height: 1, background: 'linear-gradient(90deg, var(--violet), var(--cyan))' }} />
      <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }} />
      <div style={{ width: 16, height: 1, background: 'linear-gradient(90deg, var(--cyan), transparent)' }} />
    </div>
  )
}
