import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Access denied — ITECS Electrical',
};

const AccessDeniedPage = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-canvas px-6 py-24 text-fg'>
      <div className='mx-auto max-w-xl text-center'>
        <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-amber-600'>
          403
        </p>
        <h1 className='mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl'>
          Access denied.
        </h1>
        <p className='mt-6 text-base leading-relaxed text-fg-muted'>
          You don&apos;t have access to the requested resource.
        </p>
        <Link
          href='/'
          className='mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition hover:bg-navy'
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
};

export default AccessDeniedPage;
