'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import ModeToggle from '@/components/mode-toggle';
import getSiteMetadata from '@/lib/site';
import useHasMounted from '@/lib/use-has-mounted';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const mounted = useHasMounted();
  const { mobile, constactEmail } = getSiteMetadata();
  const telHref = `tel:${mobile.replace(/\s+/g, '')}`;

  const overlay = (
    <div
      className={`fixed inset-0 z-60 flex flex-col bg-canvas transition-opacity duration-200 md:hidden ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{ backgroundColor: 'var(--color-canvas)' }}
      aria-hidden={!open}
    >
      <div className='flex items-center justify-between border-b border-line/8 px-4 py-4 sm:px-6'>
        <span className='flex items-center gap-3'>
          <span className='inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy text-amber'>
            <BoltIcon className='h-5 w-5' />
          </span>
          <span className='font-display text-lg font-bold tracking-tight'>ITECS</span>
        </span>
        <div className='flex items-center gap-1'>
          <ModeToggle />
          <button
            type='button'
            aria-label='Close menu'
            onClick={() => setOpen(false)}
            className='inline-flex h-10 w-10 items-center justify-center rounded-md text-fg transition hover:bg-fg/5'
          >
            <CloseIcon className='h-5 w-5' />
          </button>
        </div>
      </div>

      <nav className='flex flex-1 flex-col gap-1 px-4 py-6'>
        {LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className='flex items-baseline justify-between rounded-lg px-4 py-4 font-display text-3xl font-bold tracking-tight text-fg transition hover:bg-fg/5'
          >
            {l.label}
            <span className='font-display text-sm tabular-nums text-amber-600'>
              0{i + 1}
            </span>
          </a>
        ))}
      </nav>

      <div className='space-y-3 border-t border-line/8 px-6 py-6'>
        <a
          href={telHref}
          onClick={() => setOpen(false)}
          className='flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream'
        >
          <PhoneIcon className='h-4 w-4' />
          Call {mobile}
        </a>
        <a
          href={`mailto:${constactEmail}`}
          onClick={() => setOpen(false)}
          className='flex items-center justify-center gap-2 rounded-full border border-line/15 px-6 py-3.5 text-sm font-semibold text-fg'
        >
          <MailIcon className='h-4 w-4' />
          Email Ivan
        </a>
      </div>
    </div>
  );

  return (
    <>
      <button
        type='button'
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className='inline-flex h-10 w-10 items-center justify-center rounded-md text-fg transition hover:bg-fg/5 md:hidden'
      >
        <BurgerIcon className='h-5 w-5' />
      </button>
      {mounted && createPortal(overlay, document.body)}
    </>
  );
};

export default MobileNav;

const BurgerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M4 7h16M4 12h16M4 17h16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M6 6l12 12M6 18 18 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
  </svg>
);

const BoltIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M13 2 4 14h7l-1 8 9-12h-7l1-8Z' stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round' />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' strokeLinecap='round' />
  </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 0 9 7 9-7' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
  </svg>
);
