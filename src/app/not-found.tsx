import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found — ITECS Electrical',
};

const NotFoundPage = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-canvas px-6 py-24 text-fg'>
      <div className='mx-auto max-w-xl text-center'>
        <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-amber-600'>
          404
        </p>
        <h1 className='mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl'>
          We couldn&apos;t find that page.
        </h1>
        <p className='mt-6 text-base leading-relaxed text-fg-muted'>
          ITECS Electrical Services is no longer operating.
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

export default NotFoundPage;
