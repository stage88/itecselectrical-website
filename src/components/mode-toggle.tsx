'use client';

import React from 'react';

import useHasMounted from '@/lib/use-has-mounted';

import { useTheme } from './theme-provider';

const NEXT: Record<'light' | 'dark' | 'system', 'light' | 'dark' | 'system'> = {
  light: 'dark',
  dark: 'system',
  system: 'light',
};

const LABEL: Record<'light' | 'dark' | 'system', string> = {
  light: 'Light theme',
  dark: 'Dark theme',
  system: 'System theme',
};

const SunIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5' aria-hidden>
    <circle cx='12' cy='12' r='4' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5' aria-hidden>
    <path
      d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const SystemIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5' aria-hidden>
    <rect x='3' y='4' width='18' height='13' rx='2' stroke='currentColor' strokeWidth='1.8' />
    <path d='M8 21h8M12 17v4' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
  </svg>
);

type Props = {
  className?: string;
};

const ModeToggle: React.FC<Props> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const mounted = useHasMounted();
  const label = mounted ? `${LABEL[theme]} (click to change)` : 'Theme';

  return (
    <button
      type='button'
      aria-label={label}
      title={label}
      onClick={() => setTheme(NEXT[theme])}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition hover:bg-fg/5 ${className}`}
    >
      {!mounted ? (
        <SystemIcon />
      ) : theme === 'light' ? (
        <SunIcon />
      ) : theme === 'dark' ? (
        <MoonIcon />
      ) : (
        <SystemIcon />
      )}
    </button>
  );
};

export default ModeToggle;
