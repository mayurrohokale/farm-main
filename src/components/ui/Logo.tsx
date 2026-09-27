import React from 'react';

interface LogoProps {
  tone?: 'dark' | 'light';
  compact?: boolean;
}

/** The farm name, set simply in bold. */
const Logo: React.FC<LogoProps> = ({ tone = 'dark', compact = false }) => (
  <span
    className={`font-sans font-extrabold tracking-tight transition-all duration-500 ${compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-[28px]'} ${
      tone === 'dark' ? 'text-forest' : 'text-cream-100'
    }`}
  >
    Rohokale Farm
  </span>
);

export default Logo;
