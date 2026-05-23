import React from 'react';
import Image from 'next/image';

import ModeToggle from '@/components/mode-toggle';
import getSiteMetadata from '@/lib/site';
import MobileNav from './_mobile-nav';

const HomePage = () => {
  const site = getSiteMetadata();
  const {
    companyName,
    mobile,
    constactEmail,
    abn,
    acn,
    actlic,
    nswlic,
    aspl2,
    austel,
    nswacc,
    foundingYear,
    yearsOnTheTools,
    author,
    authorUrl,
    sourceUrl,
  } = site;
  const telHref = `tel:${mobile.replace(/\s+/g, '')}`;

  return (
    <main className='min-h-screen bg-canvas text-fg'>
      {/* ──────────────  NAV  ────────────── */}
      <header className='sticky top-0 z-50 backdrop-blur-md bg-canvas/85 border-b border-line/5'>
        <div className='mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:gap-6 sm:px-6 md:gap-10'>
          <a href='#top' className='flex items-center gap-3'>
            <span className='inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy text-amber'>
              <BoltIcon className='h-5 w-5' />
            </span>
            <span className='font-display text-lg font-bold tracking-tight'>ITECS</span>
          </a>
          <nav className='hidden items-center gap-9 text-base font-medium text-fg-muted md:flex'>
            <a href='#services' className='hover:text-fg transition'>Services</a>
            <a href='#projects' className='hover:text-fg transition'>Projects</a>
            <a href='#about' className='hover:text-fg transition'>About</a>
            <a href='#contact' className='hover:text-fg transition'>Contact</a>
          </nav>
          <div className='ml-auto flex items-center gap-2'>
            <ModeToggle className='hidden sm:inline-flex' />
            <a
              href={telHref}
              aria-label={`Call ${mobile}`}
              className='inline-flex h-10 items-center justify-center gap-2 rounded-full bg-ink px-3 text-sm font-semibold text-cream shadow-sm transition hover:bg-navy sm:px-4 sm:py-2.5'
            >
              <PhoneIcon className='h-4 w-4' />
              <span className='hidden sm:inline'>{mobile}</span>
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* ──────────────  HERO  ────────────── */}
      <section id='top' className='relative overflow-hidden bg-navy text-cream'>
        <div className='absolute inset-0 opacity-[0.12]' aria-hidden>
          <GridPattern />
        </div>
        <div
          className='absolute -right-40 top-1/2 h-150 w-150 -translate-y-1/2 rounded-full bg-amber/20 blur-3xl'
          aria-hidden
        />

        <div className='relative mx-auto grid max-w-7xl gap-12 px-6 pt-20 pb-28 lg:grid-cols-12 lg:gap-8 lg:pt-28 lg:pb-36'>
          <div className='lg:col-span-7'>
            <div className='inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cream/80'>
              <span className='h-1.5 w-1.5 rounded-full bg-amber' />
              Canberra · Queanbeyan · est. {foundingYear}
            </div>

            <h1 className='mt-6 font-display text-[clamp(2.75rem,7vw,5.75rem)] font-bold leading-[0.95] tracking-tight'>
              Electrical work,
              <br />
              done once,{' '}
              <span className='relative inline-block'>
                done right.
                <svg
                  viewBox='0 0 320 14'
                  className='absolute -bottom-2 left-0 h-3 w-full text-amber'
                  preserveAspectRatio='none'
                  aria-hidden
                >
                  <path
                    d='M2 9 C 80 2, 160 2, 318 8'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='round'
                    fill='none'
                  />
                </svg>
              </span>
            </h1>

            <p className='mt-8 max-w-xl text-lg leading-relaxed text-cream/75'>
              Twenty-nine years powering homes, shops and rural sites across the ACT and southern NSW.
              Level-2 ASP authorised. Compliant to AS/NZS&nbsp;3000. Workmanship guaranteed.
            </p>

            <div className='mt-10 flex flex-wrap items-center gap-3'>
              <a
                href='#contact'
                className='group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-amber-600 hover:text-cream'
              >
                Get a free quote
                <ArrowIcon className='h-4 w-4 transition group-hover:translate-x-1' />
              </a>
              <a
                href={telHref}
                className='inline-flex items-center gap-2 rounded-full border border-cream/25 bg-transparent px-6 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10'
              >
                <PhoneIcon className='h-4 w-4' />
                {mobile}
              </a>
            </div>

            <dl className='mt-14 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-cream/10 pt-8 sm:grid-cols-4'>
              {[
                [`${yearsOnTheTools}+`, 'Years on the tools'],
                ['L-2', 'Essential Energy ASP'],
                ['ACT + NSW', 'Fully licensed'],
                ['100%', 'Workmanship guaranteed'],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className='font-display text-2xl font-bold text-amber'>{k}</dt>
                  <dd className='mt-1 text-xs uppercase tracking-wider text-cream/60'>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* spacer so text stays at col-span-7 width on lg+ */}
          <div className='hidden lg:col-span-5 lg:block' aria-hidden />

          {/* figure pinned flush with the bottom of the hero (above the marquee strip) */}
          <div className='pointer-events-none absolute bottom-0 right-0 hidden h-[92%] w-[44%] max-w-160 lg:block'>
            <div
              className='absolute inset-x-8 bottom-12 z-0 h-2/3 rounded-[40%] bg-amber/30 blur-3xl'
              aria-hidden
            />
            <Image
              src='/images/electrician-1.png'
              alt='ITECS electrician on-site in Canberra'
              width={700}
              height={900}
              priority
              className='relative z-10 h-full w-full object-contain object-bottom drop-shadow-2xl'
            />
          </div>
        </div>

        <div className='relative border-t border-cream/10 bg-navy-900/40'>
          <div className='mx-auto grid max-w-7xl grid-cols-2 place-items-center gap-x-6 gap-y-3 px-6 py-5 text-xs uppercase tracking-[0.2em] text-cream/55 sm:grid-cols-3 lg:grid-cols-6'>
            <span>Switchboard upgrades</span>
            <span>Commercial fit-outs</span>
            <span>Residential rewires</span>
            <span>Safety inspections</span>
            <span>LED + lighting design</span>
            <span>Level-2 ASP</span>
          </div>
        </div>
      </section>

      {/* ──────────────  ABOUT  ────────────── */}
      <section id='about' className='relative px-6 py-24 lg:py-32'>
        <div className='mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16'>
          <div className='lg:col-span-5'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-amber-600'>
              Welcome to ITECS
            </p>
            <h2 className='mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl'>
              Leaders in quality electrical work since {foundingYear}.
            </h2>
            <ul className='mt-10 space-y-4'>
              {[
                'Electrical and security system requirements',
                'Residential fit-outs for new builds & renovations',
                'Commercial fit-outs & new designs',
                'Residential & commercial maintenance, Canberra and Queanbeyan',
                'Full guarantee on all workmanship and products',
              ].map((bullet) => (
                <li key={bullet} className='flex items-start gap-3'>
                  <span className='mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-600'>
                    <CheckIcon className='h-3 w-3' />
                  </span>
                  <span className='text-base leading-relaxed text-fg-muted'>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='lg:col-span-7'>
            <div className='rounded-card border border-line/8 bg-surface p-8 lg:p-12'>
              <p className='text-base leading-relaxed text-fg-muted'>
                {companyName} is a Canberra and Queanbeyan operated business established in{' '}
                {foundingYear}. We
                provide services for commercial, industrial, rural and domestic electrical repairs,
                as well as new installations and upgrades across Canberra, Queanbeyan and
                surrounding areas. We also provide security surveillance, data and telephone
                services.
              </p>
              <p className='mt-5 text-base leading-relaxed text-fg-muted'>
                ITECS is <span className='font-semibold text-fg'>Level-2 authorised</span> with
                Essential Energy, providing metering and underground connections to the premises.
                All our work is guaranteed and complies with the latest Australian Standards.
              </p>
              <p className='mt-5 text-base leading-relaxed text-fg-muted'>
                We pride ourselves on completing jobs quickly, efficiently and seamlessly from start
                to finish — leaving you with the peace of mind of a job well done.
              </p>

              <div className='mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line/8 pt-8'>
                <div>
                  <p className='font-display text-3xl font-bold tracking-tight'>{foundingYear}</p>
                  <p className='text-xs uppercase tracking-wider text-fg-subtle'>Established</p>
                </div>
                <div className='h-10 w-px bg-line/8' aria-hidden />
                <div>
                  <p className='font-display text-3xl font-bold tracking-tight'>ACT + NSW</p>
                  <p className='text-xs uppercase tracking-wider text-fg-subtle'>Licensed</p>
                </div>
                <div className='h-10 w-px bg-line/8' aria-hidden />
                <div>
                  <p className='font-display text-3xl font-bold tracking-tight'>L-2 ASP</p>
                  <p className='text-xs uppercase tracking-wider text-fg-subtle'>Essential Energy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────  SERVICES  ────────────── */}
      <section id='services' className='relative bg-surface px-6 py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-end'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-amber-600'>
                01 — Our services
              </p>
              <h2 className='mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl'>
                One team across commercial, residential and rural.
              </h2>
            </div>
            <a
              href='#contact'
              className='hidden shrink-0 items-center gap-2 text-sm font-semibold text-fg underline decoration-amber decoration-[3px] underline-offset-[6px] hover:decoration-ink md:inline-flex'
            >
              Get in touch
              <ArrowIcon className='h-4 w-4' />
            </a>
          </div>

          <article className='group relative mt-14 grid overflow-hidden rounded-card border border-line/8 bg-canvas shadow-[0_30px_80px_-40px_rgba(11,18,32,0.25)] lg:grid-cols-12'>
            <div className='relative lg:col-span-6'>
              <div className='relative aspect-5/4 w-full lg:aspect-auto lg:h-full'>
                <Image
                  src='/images/indoor-3.png'
                  alt='Commercial fit-out by ITECS Electrical, Canberra'
                  fill
                  sizes='(min-width: 1024px) 50vw, 100vw'
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-linear-to-tr from-navy/55 via-navy/10 to-transparent' />
                <span className='absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-cream/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink'>
                  <span className='h-1.5 w-1.5 rounded-full bg-amber' />
                  Featured
                </span>
              </div>
            </div>
            <div className='flex flex-col justify-between gap-10 p-8 lg:col-span-6 lg:p-12'>
              <div>
                <div className='flex items-center gap-4'>
                  <span className='inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-amber'>
                    <BoltIcon className='h-6 w-6' />
                  </span>
                  <span className='font-display text-lg text-fg-subtle'>
                    <span className='tabular-nums text-fg/30'>/</span> 01
                  </span>
                </div>
                <h3 className='mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl'>
                  Commercial fit-outs
                </h3>
                <p className='mt-5 text-base leading-relaxed text-fg-muted'>
                  Shop, café and restaurant fit-outs through Canberra and Queanbeyan — full wiring,
                  switchboards, pendant and track lighting, exit and emergency, refrigeration and
                  cooking-appliance install. We design the power distribution to suit your site.
                </p>
                <ul className='mt-6 grid gap-3 sm:grid-cols-2'>
                  {[
                    'Full wiring & switchboards',
                    'LED, pendant & track lighting',
                    'Exit + emergency systems',
                    'Refrigeration & appliance install',
                  ].map((item) => (
                    <li key={item} className='flex items-start gap-2.5 text-sm text-fg-muted'>
                      <CheckIcon className='mt-0.5 h-4 w-4 shrink-0 text-amber-600' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex items-center justify-between gap-4 border-t border-line/8 pt-6'>
                <span className='text-xs uppercase tracking-wider text-fg-subtle'>
                  AS/NZS&nbsp;3000 compliant
                </span>
                <a
                  href='#contact'
                  className='inline-flex items-center gap-2 text-sm font-semibold text-fg transition group-hover:gap-3'
                >
                  Enquire
                  <ArrowIcon className='h-4 w-4 transition group-hover:translate-x-1' />
                </a>
              </div>
            </div>
          </article>

          <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                n: '02',
                title: 'Residential rewires',
                body: 'New builds, renovations and existing home upgrades — designed around how you actually live in the space.',
                icon: HouseIcon,
              },
              {
                n: '03',
                title: 'Level-2 ASP',
                body: 'Disconnects, reconnects, underground service mains and grid connections for Essential Energy properties.',
                icon: PoleIcon,
              },
              {
                n: '04',
                title: 'Safety & testing',
                body: 'RCD safety switches, test-and-tag, earthing system testing, switchboard upgrades to current AS/NZS standards.',
                icon: ShieldIcon,
              },
              {
                n: '05',
                title: 'Lighting design',
                body: 'Energy-efficient lighting plans for offices and commercial sites — including LENI calc and Part L compliance.',
                icon: LightIcon,
              },
              {
                n: '06',
                title: 'Outdoor & pool',
                body: 'Pool lighting, pumps and filters, garden and retaining-wall lighting, alfresco and shed power.',
                icon: PoolIcon,
              },
              {
                n: '07',
                title: 'Maintenance & repairs',
                body: 'Fault-finding, blown fuses, flickering lights, smoke detectors, exhaust and ceiling fans, surge protection.',
                icon: ToolsIcon,
              },
            ].map(({ n, title, body, icon: Icon }) => (
              <a
                key={n}
                href='#contact'
                className='group relative flex flex-col gap-6 rounded-card border border-line/8 bg-surface p-7 transition hover:border-amber hover:shadow-[0_20px_50px_-30px_rgba(11,18,32,0.3)]'
              >
                <div className='flex items-center justify-between'>
                  <span className='inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cream text-navy transition group-hover:bg-navy group-hover:text-amber'>
                    <Icon className='h-5 w-5' />
                  </span>
                  <span className='font-display text-sm tabular-nums text-fg-subtle'>{n}</span>
                </div>
                <div>
                  <h4 className='font-display text-xl font-bold tracking-tight'>{title}</h4>
                  <p className='mt-3 text-sm leading-relaxed text-fg-muted'>{body}</p>
                </div>
                <span className='inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition group-hover:gap-2.5'>
                  Enquire
                  <ArrowIcon className='h-3.5 w-3.5 transition group-hover:translate-x-1' />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────  PROJECTS  ────────────── */}
      <section id='projects' className='relative bg-ink px-6 py-24 text-cream lg:py-32'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-end'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-amber'>
                02 — Selected work
              </p>
              <h2 className='mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl'>
                A snapshot of recent jobs.
              </h2>
            </div>
            <p className='max-w-sm text-sm leading-relaxed text-cream/65'>
              From new builds to commercial fit-outs and Level-2 grid connections — a selection
              across Canberra and surrounding regions.
            </p>
          </div>

          <div className='mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5'>
            {[
              { src: '/images/project-1.jpeg', tag: 'Commercial', span: 'md:row-span-2' },
              { src: '/images/project-2.jpeg', tag: 'Residential' },
              { src: '/images/project-3.jpeg', tag: 'Switchboard' },
              { src: '/images/project-4.jpeg', tag: 'Lighting', span: 'md:row-span-2' },
              { src: '/images/project-5.jpeg', tag: 'Outdoor' },
              { src: '/images/project-6.jpeg', tag: 'Fit-out' },
              { src: '/images/project-7.jpeg', tag: 'Level-2 ASP' },
              { src: '/images/project-8.jpeg', tag: 'Residential' },
            ].map(({ src, tag, span }, i) => (
              <figure
                key={src}
                className={`group relative overflow-hidden rounded-2xl bg-navy ${span ?? ''} ${
                  i === 0 ? 'aspect-square md:aspect-auto' : 'aspect-square'
                }`}
              >
                <Image
                  src={src}
                  alt={`${tag} electrical project by ITECS Electrical, Canberra and Queanbeyan`}
                  fill
                  sizes='(min-width: 768px) 25vw, 50vw'
                  className='object-cover transition duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent opacity-90 transition group-hover:opacity-70' />
                <figcaption className='absolute bottom-3 left-3 right-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/95'>
                  <span className='h-1 w-1 rounded-full bg-amber' />
                  {tag}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────  MORE SERVICES (long-form)  ────────────── */}
      <section className='relative bg-canvas px-6 py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-amber-600'>
            03 — More capabilities
          </p>
          <h2 className='mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl'>
            Specialist work, done to current standards.
          </h2>

          <div className='mt-16 space-y-20 lg:mt-20 lg:space-y-28'>
            {[
              {
                n: '01',
                title: 'Switchboard & meter board upgrades',
                image: '/images/building-1.png',
                body: 'The switchboard is the most important part of an electrical power system. Continual maintenance and upgrading is essential to ensure systems run efficiently and safely, and to meet current standards (AS/NZS 3000). ITECS has comprehensive expertise across all aspects of switchboard infrastructure — blown fuses, light flickering, and switchboard cabling.',
                bullets: ['Blown fuse & flicker diagnostics', 'Cabling & infrastructure upgrades', 'Current-standard compliance'],
              },
              {
                n: '02',
                title: "Safety switches — RCD's & RCBO's",
                image: '/images/building-3.png',
                body: 'Safety switches monitor and turn off power within 0.03 seconds of detecting a fault. Combined with correctly mounted switchboards, protected power and lighting circuits, and (for older properties) a switchboard upgrade, these are the essential measures that reduce risk to users.',
                bullets: ['RCD / RCBO install', 'Switchboard mounting & access', 'Older-home upgrade paths'],
                reverse: true,
              },
              {
                n: '03',
                title: 'Lighting design & installation',
                image: '/images/building-5.png',
                body: 'Our designs use the most energy-efficient products available, conforming to Part L (2013) and LENI calculation standards. Following the LIFE (Lighting in Future Environments) approach, we work with Grade-A lighting manufacturers to deliver cost-effective, versatile installations that save money over the whole life of the system.',
                bullets: ['Commercial LED design', 'LENI / Part L compliant', 'Whole-life energy modelling'],
              },
            ].map(({ n, title, image, body, bullets, reverse }) => (
              <div
                key={n}
                className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className='relative overflow-hidden rounded-card lg:col-span-6'>
                  <div className='relative aspect-5/4'>
                    <Image
                      src={image}
                      alt={`${title} — ITECS Electrical, Canberra & Queanbeyan`}
                      fill
                      sizes='(min-width: 1024px) 50vw, 100vw'
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-linear-to-tr from-navy/40 via-transparent to-transparent' />
                  </div>
                </div>
                <div className='lg:col-span-6'>
                  <span className='font-display text-sm tabular-nums text-amber-600'>{n}</span>
                  <h3 className='mt-3 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl'>
                    {title}
                  </h3>
                  <p className='mt-6 text-base leading-relaxed text-fg-muted'>{body}</p>
                  <ul className='mt-7 space-y-3'>
                    {bullets.map((b) => (
                      <li key={b} className='flex items-start gap-3 text-sm text-fg-muted'>
                        <span className='mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-600'>
                          <CheckIcon className='h-3 w-3' />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Existing homes + Level-2 ASP, condensed */}
          <div className='mt-20 grid gap-6 lg:mt-28 lg:grid-cols-2'>
            <article className='rounded-card border border-line/8 bg-surface p-8 lg:p-10'>
              <div className='flex items-center gap-4'>
                <span className='inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-amber'>
                  <HouseIcon className='h-6 w-6' />
                </span>
                <span className='font-display text-sm tabular-nums text-fg-subtle'>04</span>
              </div>
              <h3 className='mt-6 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl'>
                Existing homes — wiring, upgrades, repairs
              </h3>
              <ul className='mt-6 grid gap-2.5 text-sm text-fg-muted sm:grid-cols-2'>
                {[
                  'Electrical repairs',
                  'Rewiring & installations',
                  'Indoor / outdoor lighting',
                  'Sensor & PE-Cell control',
                  'Switchboard upgrades',
                  'Surge protection',
                  'Exhaust & ceiling fans',
                  'Fault finding',
                  'Smoke detector install',
                ].map((b) => (
                  <li key={b} className='flex items-start gap-2'>
                    <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber' />
                    {b}
                  </li>
                ))}
              </ul>
            </article>

            <article className='rounded-card border border-line/8 bg-surface p-8 lg:p-10'>
              <div className='flex items-center gap-4'>
                <span className='inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-amber'>
                  <PoleIcon className='h-6 w-6' />
                </span>
                <span className='font-display text-sm tabular-nums text-fg-subtle'>05</span>
              </div>
              <h3 className='mt-6 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl'>
                Essential Energy Level-2 ASP
              </h3>
              <ul className='mt-6 grid gap-2.5 text-sm text-fg-muted sm:grid-cols-2'>
                {[
                  'Class 2A disconnect & reconnect',
                  'Class 2B underground service mains',
                  'Class 2D energising service equipment',
                  'New-home grid connections',
                  'Service fuses SPD / MPD install',
                  'Service mains upgrades',
                  'Removal of redundant off-peak meters',
                  'Ripple controller removal',
                ].map((b) => (
                  <li key={b} className='flex items-start gap-2'>
                    <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber' />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ──────────────  CONTACT  ────────────── */}
      <section id='contact' className='relative overflow-hidden bg-navy px-6 py-24 text-cream lg:py-32'>
        <div className='absolute inset-0 opacity-[0.10]' aria-hidden>
          <GridPattern />
        </div>
        <div
          className='absolute -left-40 top-1/2 h-125 w-125 -translate-y-1/2 rounded-full bg-amber/15 blur-3xl'
          aria-hidden
        />
        <div className='relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16'>
          <div className='lg:col-span-7'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-amber'>
              04 — Get in touch
            </p>
            <h2 className='mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-none tracking-tight'>
              Got a job? Let&apos;s talk it through.
            </h2>
            <p className='mt-8 max-w-xl text-lg leading-relaxed text-cream/75'>
              Whether it&apos;s a powerpoint, a full rewire, or a Level-2 grid connection — call Ivan,
              or send through the details and we&apos;ll get back to you the same day.
            </p>

            <div className='mt-10 flex flex-wrap items-center gap-3'>
              <a
                href={telHref}
                className='group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-amber-600 hover:text-cream'
              >
                <PhoneIcon className='h-4 w-4' />
                Call {mobile}
              </a>
              <a
                href={`mailto:${constactEmail}`}
                className='inline-flex items-center gap-2 rounded-full border border-cream/25 bg-transparent px-6 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10'
              >
                <MailIcon className='h-4 w-4' />
                Email Ivan
              </a>
            </div>
          </div>

          <div className='lg:col-span-5'>
            <div className='rounded-card border border-cream/12 bg-cream/4 p-8 backdrop-blur-sm lg:p-10'>
              <dl className='space-y-7'>
                <div>
                  <dt className='text-xs uppercase tracking-[0.18em] text-cream/55'>Phone</dt>
                  <dd className='mt-2'>
                    <a href={telHref} className='font-display text-2xl font-bold text-cream hover:text-amber'>
                      {mobile}
                    </a>
                    <p className='mt-1 text-sm text-cream/60'>Ivan — owner / lead electrician</p>
                  </dd>
                </div>
                <div className='h-px bg-cream/10' aria-hidden />
                <div>
                  <dt className='text-xs uppercase tracking-[0.18em] text-cream/55'>Email</dt>
                  <dd className='mt-2'>
                    <a
                      href={`mailto:${constactEmail}`}
                      className='break-all font-display text-lg font-bold text-cream hover:text-amber'
                    >
                      {constactEmail}
                    </a>
                  </dd>
                </div>
                <div className='h-px bg-cream/10' aria-hidden />
                <div>
                  <dt className='text-xs uppercase tracking-[0.18em] text-cream/55'>Postal</dt>
                  <dd className='mt-2 text-sm leading-relaxed text-cream/85'>
                    {companyName}
                    <br />
                    PO Box 1295
                    <br />
                    Queanbeyan NSW 2620
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────  FOOTER  ────────────── */}
      <footer className='border-t border-line/8 bg-canvas px-6 py-14'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col items-start justify-between gap-10 md:flex-row md:items-center'>
            <a href='#top' className='flex items-center gap-3'>
              <span className='inline-flex h-10 w-10 items-center justify-center rounded-md bg-navy text-amber'>
                <BoltIcon className='h-5 w-5' />
              </span>
              <span>
                <span className='block font-display text-lg font-bold leading-none tracking-tight'>
                  ITECS
                </span>
                <span className='block text-xs uppercase tracking-[0.18em] text-fg-subtle'>
                  Electrical Services
                </span>
              </span>
            </a>
            <nav className='flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-fg-muted'>
              <a href='#about' className='hover:text-fg'>About</a>
              <a href='#services' className='hover:text-fg'>Services</a>
              <a href='#projects' className='hover:text-fg'>Projects</a>
              <a href='#contact' className='hover:text-fg'>Contact</a>
            </nav>
          </div>

          <dl className='mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line/8 pt-10 text-xs sm:grid-cols-3 lg:grid-cols-6'>
            {[
              ['ABN', abn],
              ['ACN', acn],
              ['ACT licence', actlic],
              ['NSW licence', nswlic],
              ['Essential Energy ASP L-2', aspl2],
              ['ACRS Master', austel],
              ['NSW accreditation', nswacc],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className='font-semibold uppercase tracking-[0.16em] text-fg-subtle'>{k}</dt>
                <dd className='mt-1.5 font-mono tabular-nums text-fg'>{v}</dd>
              </div>
            ))}
          </dl>

          <div className='mt-10 flex flex-col gap-3 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between'>
            <p>
              &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
            <p>
              <a
                href={sourceUrl}
                target='_blank'
                rel='noreferrer'
                className='underline decoration-amber decoration-2 underline-offset-4 hover:text-fg'
              >
                Theme
              </a>{' '}
              created by{' '}
              <a
                href={authorUrl}
                target='_blank'
                rel='noreferrer'
                className='underline decoration-amber decoration-2 underline-offset-4 hover:text-fg'
              >
                {author}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

/* ────────────────────────  ICONS  ──────────────────────── */

type IconProps = { className?: string };
const baseSvg = 'stroke-current';

const BoltIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M13 2 4 14h7l-1 8 9-12h-7l1-8Z' stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round' />
  </svg>
);

const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' strokeLinecap='round' />
  </svg>
);

const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 0 9 7 9-7' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
  </svg>
);

const ArrowIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M5 12h14M13 5l7 7-7 7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='m5 12 5 5L20 7' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const HouseIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M3 11 12 3l9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V11Z' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
  </svg>
);

const PoleIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M12 3v18M4 7h16M6 11h12M3 21h18' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
  </svg>
);

const ShieldIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3 9 2.5 2.5L15 10' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' strokeLinecap='round' />
  </svg>
);

const LightIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M9 18h6m-5 3h4M7 11a5 5 0 1 1 10 0c0 2.4-1.5 3.7-2.5 5h-5C8.5 14.7 7 13.4 7 11Z' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' strokeLinecap='round' />
  </svg>
);

const PoolIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M3 17c2 1 3 1 5 0s3-1 5 0 3 1 5 0 3-1 5 0M3 13c2 1 3 1 5 0s3-1 5 0 3 1 5 0 3-1 5 0M8 13V5l4-2v10' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' strokeLinecap='round' />
  </svg>
);

const ToolsIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox='0 0 24 24' fill='none' className={className} aria-hidden>
    <path d='M14 4a4 4 0 0 0 5 5l-9 9-3-3 9-9Zm-9 9 3 3-3 3-3-3 3-3Z' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
  </svg>
);

const GridPattern: React.FC = () => (
  <svg className={`h-full w-full ${baseSvg}`} xmlns='http://www.w3.org/2000/svg' aria-hidden>
    <defs>
      <pattern id='grid' width='48' height='48' patternUnits='userSpaceOnUse'>
        <path d='M48 0H0V48' fill='none' stroke='currentColor' strokeWidth='0.5' />
      </pattern>
    </defs>
    <rect width='100%' height='100%' fill='url(#grid)' className='text-cream' />
  </svg>
);

export default HomePage;
