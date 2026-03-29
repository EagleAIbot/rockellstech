export function BrandMark() {
  return (
    <span className="rt-logo-graphic" aria-hidden>
      <svg className="rt-logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rt-mark-a" x1="4" y1="4" x2="36" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="0.5" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#818cf8" />
          </linearGradient>
          <linearGradient id="rt-mark-b" x1="18" y1="10" x2="34" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.15" />
          </linearGradient>
          <clipPath id="rt-mark-clip">
            <rect x="12" y="8" width="22" height="26" rx="7" transform="rotate(-14 23 21)" />
          </clipPath>
        </defs>
        <rect x="4" y="6" width="26" height="26" rx="8" fill="url(#rt-mark-b)" transform="rotate(-6 17 19)" />
        <g clipPath="url(#rt-mark-clip)">
          <rect x="4" y="4" width="32" height="32" fill="url(#rt-mark-a)" />
        </g>
        <circle cx="27" cy="13" r="3" fill="#03050a" fillOpacity="0.25" />
      </svg>
    </span>
  )
}
