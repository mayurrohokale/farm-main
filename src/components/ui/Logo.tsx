import React, { useId } from 'react';

interface MarkProps {
  className?: string;
  animated?: boolean;
}

/** The Rohokale Farm emblem: a keshar sun rising over furrowed fields, with a sprout growing from the rows. */
export const LogoMark: React.FC<MarkProps> = ({ className = 'h-11 w-11', animated = false }) => {
  const clip = useId();
  return (
    <svg viewBox="0 0 64 64" className={`${className} ${animated ? 'logo-anim' : ''}`} aria-hidden="true">
      <defs>
        <clipPath id={clip}>
          <circle cx="32" cy="32" r="30" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="32" fill="#14301F" />
      <g clipPath={`url(#${clip})`}>
        <circle className="logo-sun" cx="32" cy="36" r="13" fill="#E9A23B" />
        <path d="M0 38h64v26H0z" fill="#2F7D3A" />
        <g stroke="#14301F" strokeWidth="2.2" strokeLinecap="round" fill="none">
          {['M32 38 6 66', 'M32 38 19 66', 'M32 38v28', 'M32 38l13 28', 'M32 38l26 28'].map((d) => (
            <path key={d} className="logo-furrow" d={d} />
          ))}
        </g>
      </g>
      <path className="logo-stem" d="M32 39V25" stroke="#F7F2E8" strokeWidth="2.6" strokeLinecap="round" />
      <path className="logo-leaf logo-leaf-l" d="M32 31c-1-6-6-9-12-8 1 6 6 9 12 8Z" fill="#F7F2E8" />
      <path className="logo-leaf logo-leaf-r" d="M32 27c1-7 6-11 13-10-1 7-6 11-13 10Z" fill="#9CCB5B" />
      <circle cx="32" cy="32" r="30.5" fill="none" stroke="#E9A23B" strokeOpacity=".55" strokeWidth="1" />
    </svg>
  );
};

interface LogoProps {
  tone?: 'dark' | 'light';
  animated?: boolean;
  compact?: boolean;
}

/** Horizontal lockup: emblem + Fraunces wordmark + tracked tagline. */
const Logo: React.FC<LogoProps> = ({ tone = 'dark', animated = false, compact = false }) => (
  <span className="logo-hover inline-flex items-center gap-3">
    <LogoMark animated={animated} className={compact ? 'h-9 w-9 sm:h-10 sm:w-10' : 'h-11 w-11 sm:h-12 sm:w-12'} />
    <span className="flex flex-col leading-none">
      <span
        className={`font-display font-semibold tracking-tight ${compact ? 'text-xl sm:text-[22px]' : 'text-[22px] sm:text-2xl'} ${
          tone === 'dark' ? 'text-forest' : 'text-cream-100'
        }`}
      >
        Rohokale
      </span>
      <span
        className={`mt-1 text-[9px] font-bold uppercase tracking-[0.28em] sm:text-[10px] ${
          tone === 'dark' ? 'text-leaf-600' : 'text-keshar-400'
        }`}
      >
        Farm · Generations of Quality
      </span>
    </span>
  </span>
);

export default Logo;
