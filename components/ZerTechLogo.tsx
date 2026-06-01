interface ZerTechLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export function ZerTechLogoIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="zertech-logo-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="0.72" stopColor="#2563eb" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
        <filter id="zertech-logo-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="11" fill="#0c1222" stroke="rgba(37,99,235,0.35)" strokeWidth="0.75" />
      <path
        d="M12 14h24L16 24h20L12 34h24"
        stroke="url(#zertech-logo-grad)"
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#zertech-logo-glow)"
      />
      <circle cx="36" cy="12" r="2.25" fill="#f97316" className="zertech-logo-accent" />
    </svg>
  );
}

export default function ZerTechLogo({
  className = '',
  iconClassName = 'h-9 w-9',
  textClassName = 'text-lg font-bold tracking-tight text-white',
  showText = true,
}: ZerTechLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex shrink-0 items-center justify-center">
        <span
          className="absolute inset-0 rounded-xl bg-blue-600/25 blur-md"
          aria-hidden="true"
        />
        <ZerTechLogoIcon className={`relative drop-shadow-[0_0_10px_rgba(37,99,235,0.45)] ${iconClassName}`} />
      </span>
      {showText && (
        <span className={textClassName}>
          Zer<span className="font-semibold text-zinc-100">Tech</span>
        </span>
      )}
    </span>
  );
}
