import React, { useId } from 'react';

interface MarkProps {
  className?: string;
  animated?: boolean;
  /** line colour of the outlined letters */
  tone?: 'dark' | 'light';
}

/**
 * RF monogram: outlined R and F, with the F's middle arm formed by a two-tone leaf
 * and a small leaf sprouting from its top.
 */
export const LogoMark: React.FC<MarkProps> = ({ className = 'h-11 w-auto', animated = false, tone = 'dark' }) => (
  <svg viewBox="-4 -8 68 60" className={`${className} ${animated ? 'logo-anim' : ''}`} aria-hidden="true">
    <g fill="none" stroke={tone === 'dark' ? '#1F6B35' : '#F7F2E8'} strokeWidth="2.6" strokeLinejoin="miter">
      <path className="logo-line" pathLength={1} d="M0 0H16C24 0 28 5 28 12C28 18 24.5 22.5 19 23.5L28 44H19L11 25H8V44H0Z" />
      <path className="logo-line" pathLength={1} d="M8 7H15.5C18.5 7 20 9 20 12S18.5 17.5 15.5 17.5H8Z" />
      <path className="logo-line" pathLength={1} d="M32 0H58V7H40V44H32Z" />
    </g>
    <g className="logo-leaf">
      <path d="M40 23C44 14 51 10.5 60 11 56.5 19.5 50 24 40 23Z" fill="#6FAE4A" />
      <path d="M40 23C47 21 53 17 60 11 56.5 19.5 50 24 40 23Z" fill="#2F7D3A" />
    </g>
    <path className="logo-sprout" d="M52 0C52-4.5 55-7.5 60-7.5 60-3 57 0 52 0Z" fill="#6FAE4A" />
  </svg>
);

interface BadgeProps {
  className?: string;
}

/** Vintage farm badge: keshar sun rising over furrowed onion fields, with the name on a banner. */
export const LogoBadge: React.FC<BadgeProps> = ({ className = 'h-40 w-40' }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Rohokale Farm — Maharashtra, India — Generations of Quality">
      <defs>
        <clipPath id={`${id}s`}>
          <path d="M100 18a82 82 0 0 1 82 82v6H18v-6a82 82 0 0 1 82-82Z" />
        </clipPath>
        <path id={`${id}a`} d="M22 100a78 78 0 0 0 156 0" />
      </defs>
      <circle cx="100" cy="100" r="92" fill="#F7F2E8" stroke="#14301F" strokeWidth="2.4" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="#14301F" strokeWidth=".9" />
      <g clipPath={`url(#${id}s)`}>
        <g stroke="#14301F" strokeWidth=".8" opacity=".35">
          <path d="M40 44h36M126 38h44M30 58h28M148 56h30" />
        </g>
        <circle className="badge-sun" cx="100" cy="80" r="22" fill="#E9A23B" />
        <path d="M14 84c20-10 40-14 58-8 12 4 20 6 30 2 16-7 34-10 56-4 12 3 20 6 30 10v30H14Z" fill="#2F7D3A" />
        <path d="M14 90c26-6 52-7 86-2s60 4 86-2v30H14Z" fill="#14301F" />
        <g stroke="#F7F2E8" strokeWidth="1.3" opacity=".75">
          <path d="M100 90 30 110M100 90 55 110M100 90 80 110M100 90 100 110M100 90 120 110M100 90 145 110M100 90 170 110" />
        </g>
        <g fill="#14301F">
          <path d="M40 82l2-6 2 6zM48 80l2-7 2 7zM152 80l2-6 2 6zM160 82l2-7 2 7z" />
        </g>
      </g>
      <path d="M8 106h184M8 132h184" stroke="#14301F" strokeWidth="1.6" />
      <rect x="8" y="108" width="184" height="22" fill="#F7F2E8" />
      <path d="M14 119c-6 0-8-6-3-7 4-1 5 3 2 4M186 119c6 0 8-6 3-7-4-1-5 3-2 4" fill="none" stroke="#14301F" strokeWidth="1.3" strokeLinecap="round" />
      <text x="100" y="126" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontSize="15" fontWeight="700" letterSpacing="1.6" fill="#14301F">
        ROHOKALE FARM
      </text>
      <text x="100" y="145" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontSize="6.4" fontWeight="800" letterSpacing="1.8" fill="#14301F" opacity=".75">
        MAHARASHTRA · INDIA
      </text>
      <path d="M90 151h20" stroke="#E9A23B" strokeWidth="1.2" />
      <text fontFamily="Manrope, Arial, sans-serif" fontSize="8" fontWeight="800" letterSpacing="1" fill="#2F7D3A" textAnchor="middle">
        <textPath href={`#${id}a`} startOffset="50%" textLength={112} lengthAdjust="spacingAndGlyphs">
          GENERATIONS OF QUALITY
        </textPath>
      </text>
    </svg>
  );
};

interface LogoProps {
  tone?: 'dark' | 'light';
  animated?: boolean;
  compact?: boolean;
}

/** Horizontal lockup: RF monogram + ROHOKALE / FARM wordmark. */
const Logo: React.FC<LogoProps> = ({ tone = 'dark', animated = false, compact = false }) => (
  <span className="logo-hover inline-flex items-center gap-2.5 sm:gap-3" aria-label="Rohokale Farm">
    <LogoMark animated={animated} tone={tone} className={`w-auto transition-all duration-500 ${compact ? 'h-9 sm:h-10' : 'h-10 sm:h-12'}`} />
    <span aria-hidden="true" className="flex flex-col leading-none">
      <span
        className={`font-sans font-extrabold tracking-[0.14em] transition-all duration-500 ${compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-[22px]'} ${
          tone === 'dark' ? 'text-leaf-700' : 'text-cream-100'
        }`}
      >
        ROHOKALE
      </span>
      <span className={`mt-1 text-[10px] font-bold tracking-[0.62em] sm:text-[11px] ${tone === 'dark' ? 'text-forest' : 'text-keshar-400'}`}>FARM</span>
    </span>
  </span>
);

export default Logo;
