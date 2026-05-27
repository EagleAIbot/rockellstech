export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden>
      <svg className="rt-logo-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#050814" />
        <rect x="1" y="1" width="30" height="30" rx="7" stroke="#22d3ee" strokeOpacity="0.4" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="var(--font-display), system-ui, sans-serif"
          fontSize="13"
          fontWeight="800"
          fill="#22d3ee"
        >
          JR
        </text>
      </svg>
    </span>
  )
}
