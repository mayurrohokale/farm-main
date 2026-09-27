import React from 'react';

interface Props {
  text: string;
  className?: string;
  /** delay before first word, ms */
  delay?: number;
  /** delay between words, ms */
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /** words (by index) rendered in italic accent */
  accent?: number[];
  accentClass?: string;
}

/** Headline that reveals word-by-word when scrolled into view. */
const SplitText: React.FC<Props> = ({ text, className = '', delay = 0, stagger = 70, as = 'h2', accent = [], accentClass = 'italic font-normal text-leaf-600' }) => {
  const Tag = as;
  const words = text.split(' ');
  return (
    <Tag className={className} data-split aria-label={text}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="split-word" aria-hidden="true">
            <span style={{ '--d': `${delay + i * stagger}ms` } as React.CSSProperties} className={accent.includes(i) ? accentClass : undefined}>
              {w}
            </span>
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default SplitText;
