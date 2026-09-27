import React, { useId } from 'react';

interface MarkProps {
  className?: string;
  animated?: boolean;
}

/**
 * The Rohokale monogram: an "R" whose bowl is a red onion (our signature crop)
 * and whose leg is a growing leaf.
 */
/**
 * The Rohokale monogram: an "R" whose bowl is a red onion (our signature crop)
 * and whose leg is a growing leaf. Drawn on a 64×64 grid.
 */
const MarkPaths: React.FC = () => (
  <>
    <path className="logo-stem" d="M12 12.5c0-1.4 1.1-2.5 2.5-2.5H24v41.5h3.5V55h-17v-3.5H12Z" fill="#14301F" />
    <path
      className="logo-bowl"
      d="M24 12.5c4.2-.6 7.3-2.6 9.2-6.2 1.6 3.3 4.7 5.3 8.3 6.8 5.2 2.2 8.2 6.3 8.2 11.4 0 7.6-6.3 13-14.3 13H24Z"
      fill="#A83A5E"
    />
    <path
      className="logo-layer"
      d="M33.2 8.6c-3.4 5-4.6 16.4-3.2 28.2M33.2 8.6c5.2 4.4 8.5 15.6 5.5 28.4"
      fill="none"
      stroke="#E7A3B9"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity=".85"
    />
    <path className="logo-sprout" d="M33.2 6.4c-.2-2.4.9-4.2 2.8-5.2" fill="none" stroke="#2F7D3A" strokeWidth="2.2" strokeLinecap="round" />
    <g className="logo-leaf">
      <path d="M27.5 37.5c10.5-.2 18.5 5.8 22.5 17.5-11.6.8-19.6-5.2-22.5-17.5Z" fill="#2F7D3A" />
      <path d="M29 39c6 3.2 11.5 8.3 18.5 14.8" fill="none" stroke="#9CCB5B" strokeWidth="1.3" strokeLinecap="round" />
    </g>
  </>
);

export const LogoMark: React.FC<MarkProps> = ({ className = 'h-11 w-11', animated = false }) => (
  <svg viewBox="0 0 64 64" className={`${className} ${animated ? 'logo-anim' : ''}`} aria-hidden="true">
    <MarkPaths />
  </svg>
);

interface SealProps {
  className?: string;
  /** slowly rotate the ring text (the monogram stays upright) */
  spin?: boolean;
}

/** Circular seal: monogram inside a ring reading ROHOKALE FARM · GENERATIONS OF QUALITY. */
export const LogoSeal: React.FC<SealProps> = ({ className = 'h-32 w-32', spin = false }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Rohokale Farm — Generations of Quality">
      <defs>
        <path id={`${id}t`} d="M17 60a43 43 0 0 1 86 0" />
        <path id={`${id}b`} d="M11.5 60a48.5 48.5 0 0 0 97 0" />
      </defs>
      <circle cx="60" cy="60" r="59" fill="#14301F" />
      <g className={spin ? 'origin-center animate-spin-slow [transform-box:fill-box]' : ''}>
        <circle cx="60" cy="60" r="55.5" fill="none" stroke="#E9A23B" strokeWidth="1" />
        <g fontFamily="Manrope, Arial, sans-serif" fontWeight="800" fill="#F7F2E8" textAnchor="middle">
          <text fontSize="10.5" letterSpacing="3">
            <textPath href={`#${id}t`} startOffset="50%">
              ROHOKALE FARM
            </textPath>
          </text>
          <text fontSize="7.4" letterSpacing="1.9" fill="#EDAF4F">
            <textPath href={`#${id}b`} startOffset="50%">
              GENERATIONS OF QUALITY
            </textPath>
          </text>
        </g>
        <path fill="#E9A23B" d="M13 60l1.6-3.4L16.2 60l-1.6 3.4zM103.8 60l1.6-3.4L107 60l-1.6 3.4z" />
      </g>
      <circle cx="60" cy="60" r="37.5" fill="none" stroke="#E9A23B" strokeWidth=".8" strokeOpacity=".7" />
      <circle cx="60" cy="60" r="35" fill="#F7F2E8" />
      <g transform="translate(32.5 31) scale(.9)">
        <MarkPaths />
      </g>
    </svg>
  );
};

interface LogoProps {
  tone?: 'dark' | 'light';
  animated?: boolean;
  compact?: boolean;
}

/** Horizontal lockup: monogram + Fraunces wordmark + tracked tagline. On dark backgrounds the monogram sits on a cream tile. */
const Logo: React.FC<LogoProps> = ({ tone = 'dark', animated = false, compact = false }) => (
  <span className="logo-hover inline-flex items-center gap-2.5 sm:gap-3">
    <span
      className={`flex shrink-0 items-center justify-center rounded-[14px] transition-all duration-500 ${
        tone === 'light' ? 'bg-cream-100 p-1 shadow-soft' : 'bg-transparent p-0'
      } ${compact ? 'h-10 w-10 sm:h-11 sm:w-11' : 'h-11 w-11 sm:h-12 sm:w-12'}`}
    >
      <LogoMark animated={animated} className="h-full w-full" />
    </span>
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
