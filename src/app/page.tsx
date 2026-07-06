import React from 'react';

import getSiteMetadata from '@/lib/site';

const HomePage = () => {
  const { name } = getSiteMetadata();

  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-navy px-6 py-24 text-cream'>
      <div className='absolute inset-0 opacity-[0.12]' aria-hidden>
        <GridPattern />
      </div>

      <div className='relative mx-auto max-w-2xl text-left'>
        <div className='inline-flex items-center gap-3'>
          <span className='inline-flex h-11 w-11 items-center justify-center rounded-md bg-cream/10 text-amber'>
            <BoltIcon className='h-6 w-6' />
          </span>
          <span>
            <span className='block font-display text-2xl font-bold leading-none tracking-tight'>
              ITECS
            </span>
            <span className='block text-xs uppercase tracking-[0.18em] text-cream/60'>
              Electrical Services
            </span>
          </span>
        </div>

        <h1 className='mt-12 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-tight'>
          {name} is no longer operating.
        </h1>

        <p className='mt-8 text-lg leading-relaxed text-cream/75'>
          We wish to thank all our past customers for their support.
        </p>

        <div className='mt-12 h-1 w-16 rounded-full bg-amber' aria-hidden />
      </div>
    </main>
  );
};

/* ────────────────────────  ICONS  ──────────────────────── */

type IconProps = { className?: string };

const BoltIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path
      d='M13 2 4 14h7l-1 8 9-12h-7l1-8Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinejoin='round'
      strokeLinecap='round'
    />
  </svg>
);

const GridPattern: React.FC = () => (
  <svg className='h-full w-full stroke-current' xmlns='http://www.w3.org/2000/svg' aria-hidden>
    <defs>
      <pattern id='grid' width='48' height='48' patternUnits='userSpaceOnUse'>
        <path d='M48 0H0V48' fill='none' stroke='currentColor' strokeWidth='0.5' />
      </pattern>
    </defs>
    <rect width='100%' height='100%' fill='url(#grid)' className='text-cream' />
  </svg>
);

export default HomePage;
