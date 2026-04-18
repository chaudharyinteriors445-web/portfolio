export default function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--font-ui)', fontSize: '0.68rem',
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: 'var(--violet-bright)', marginBottom: '0.5rem', fontWeight: 600,
    }}>
      <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--violet-bright)', marginRight: 8, boxShadow: '0 0 6px var(--violet-bright)', verticalAlign: 'middle' }} />
      {children}
    </p>
  )
}
