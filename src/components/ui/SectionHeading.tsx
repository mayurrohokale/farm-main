import React from 'react';
import SplitText from './SplitText';

interface Props {
  eyebrow: string;
  title: string;
  accent?: number[];
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
}

const SectionHeading: React.FC<Props> = ({ eyebrow, title, accent, intro, align = 'left', tone = 'dark' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    <span data-reveal="up" className={`eyebrow ${tone === 'light' ? '!text-keshar-400' : ''}`}>
      {eyebrow}
    </span>
    <SplitText
      text={title}
      accent={accent}
      className={`h-section mt-4 ${tone === 'light' ? '!text-cream-100' : ''}`}
      accentClass={`italic font-normal ${tone === 'light' ? 'text-keshar-400' : 'text-leaf-600'}`}
    />
    {intro && (
      <p
        data-reveal="up"
        style={{ '--d': '200ms' } as React.CSSProperties}
        className={`mt-5 text-base leading-relaxed sm:text-lg ${tone === 'light' ? 'text-cream-200/80' : 'text-ink/70'} ${align === 'center' ? 'mx-auto' : ''} max-w-2xl`}
      >
        {intro}
      </p>
    )}
  </div>
);

export default SectionHeading;
