export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#6c3aff'}}/>
          <stop offset="100%" style={{stopColor:'#00d4ff'}}/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="18" fill="#07061a"/>
      <rect width="100" height="100" rx="18" fill="url(#logoGrad)" opacity="0.12"/>
      <path d="M22 20 L22 80 L38 80 L38 46 L62 80 L78 80 L78 20 L62 20 L62 54 L38 20 Z" fill="url(#logoGrad)"/>
    </svg>
  )
}
