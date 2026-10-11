import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, BookOpenCheck, CheckCircle2, Compass,
  MoveUpRight, Sparkles, Target, WandSparkles,
} from 'lucide-react';
import { Reveal, Stagger } from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import HomeCoursesCarousel from '@/components/HomeCoursesCarousel';
import { courses, pillars } from '@/lib/data';
import { absoluteUrl, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Online French, English, German & Coding Classes',
  description: 'Learn French, English or German online, or start coding with Java and Python at Elevora Academy. Explore flexible beginner-friendly classes and build practical skills.',
  openGraph: {
    title: 'Online Language & Coding Classes | Elevora Academy',
    description: 'Explore online French, English, German, Java and Python classes. Find your next learning path at Elevora Academy.',
    images: [{ url: '/logo.png', alt: 'Elevora Academy logo' }],
    type: 'website',
    ...(absoluteUrl('/') ? { url: absoluteUrl('/') } : {}),
  },
};

const benefits = [
  { icon: Compass, title: 'Learn your way', text: 'Flexible online classes' },
  { icon: BookOpenCheck, title: 'Learn by doing', text: 'Clear lessons and practice' },
  { icon: Target, title: 'Grow with guidance', text: 'Small steps, real progress' },
];

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Elevora Academy',
  alternateName: 'Elevora',
  ...(SITE_URL ? { url: SITE_URL } : {}),
  description: 'Online French, English, German, Java and Python classes for practical skills and lifelong learning.',
  inLanguage: 'en',
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <PageHero
        variant="home"
        eyebrow="Welcome to your learning academy"
        title="Learn with purpose."
        highlight="Grow with confidence."
        description="Great teaching can open new doors. Join supportive online classes in languages and technology, practise new skills and build confidence one lesson at a time."
        primaryLabel="Explore our classes"
        primaryHref="/classes"
        secondaryLabel="Discover Elevora"
        secondaryHref="/about"
        proofs={["Supportive teaching", "Learn step by step"]}
      />

      <section aria-label="Learning benefits" className="relative z-20 border-y border-white/80 bg-white/90 shadow-[0_10px_35px_rgba(24,36,74,0.05)] backdrop-blur-xl">
        <div className="container-shell grid gap-0 py-3 sm:grid-cols-3 sm:py-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return <div key={benefit.title} className="group flex items-center gap-3 rounded-2xl px-2 py-3 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft sm:px-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-100 text-brand-violet transition duration-300 group-hover:scale-110 group-hover:rotate-3"><Icon size={21} /></span>
              <div><p className="text-sm font-extrabold text-brand-ink">{benefit.title}</p><p className="mt-0.5 text-xs text-slate-500">{benefit.text}</p></div>
            </div>;
          })}
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-slate-50/80">
        <div aria-hidden="true" className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-violet-100/55 blur-3xl" />
        <div className="container-shell relative">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Explore our subjects" title="Find a class that inspires you" description="Learn with clear explanations, guided practice and a supportive approach—whether you are starting fresh or building on what you know." />
            <Reveal className="shrink-0"><Link href="/classes#class-catalog" aria-label="Explore all classes" className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-brand-violet shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-soft">Explore classes <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></Reveal>
          </div>
          <HomeCoursesCarousel courses={courses.slice(0, 5)} />
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white py-12 sm:py-16 md:py-18 lg:py-24">
        
        
        <div className="container-shell relative">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-9 sm:gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16 xl:gap-20">
            <div className="mx-auto w-full min-w-0 max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-right lg:sticky lg:top-28">
              <span className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-violet sm:text-xs sm:tracking-[0.22em] lg:justify-end"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-gold" />The Elevora teaching approach</span>
              <h2 className="mx-auto mt-4 w-full max-w-lg break-words text-[2rem] font-black leading-[1.08] tracking-[-0.045em] text-brand-navy min-[420px]:text-4xl sm:mt-5 sm:text-5xl lg:mx-0 lg:ml-auto lg:text-6xl">Every learner deserves to <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-fuchsia-500 bg-clip-text text-transparent">thrive.</span></h2>
              <p className="mx-auto mt-4 w-full max-w-xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:mx-0 lg:ml-auto lg:text-lg">Good teaching makes learning feel clear, encouraging and achievable. We focus on understanding, practice and progress—not just getting through a lesson.</p>
              <div aria-hidden="true" className="mt-6 flex items-center justify-center gap-3 sm:mt-8 lg:justify-end"><span className="h-1.5 w-14 rounded-full bg-brand-blue" /><span className="h-1.5 w-8 rounded-full bg-brand-violet" /><span className="h-1.5 w-4 rounded-full bg-brand-gold" /></div>
            </div>
            <div className="relative mx-auto w-full min-w-0 max-w-2xl lg:mx-0 lg:max-w-none">
              <div aria-hidden="true" className="absolute bottom-7 left-[1.35rem] top-7 w-px bg-gradient-to-b from-sky-300 via-violet-300 to-amber-300 sm:left-[1.65rem] lg:bottom-8 lg:left-[1.7rem]" />
              <Stagger className="relative" delayChildren={0.08}>
                {pillars.map((pillar, index) => <article key={pillar.title} className="group relative grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] items-start justify-items-stretch gap-3 border-b border-slate-100 py-6 text-left first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5 sm:py-7 lg:gap-6">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-violet-100 bg-white text-lg font-black text-brand-violet shadow-[0_4px_18px_rgba(64,52,130,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-violet group-hover:text-white sm:h-12 sm:w-12 lg:h-14 lg:w-14 sm:text-xl">{pillar.icon}</div>
                  <div className="min-w-0 pt-1">
                    <div className="flex flex-wrap items-center justify-start gap-x-3 gap-y-1"><span className="text-[11px] font-black tracking-[0.2em] text-slate-400">0{index + 1}</span><span aria-hidden="true" className="h-px w-7 bg-gradient-to-r from-brand-blue to-brand-violet transition-all duration-300 group-hover:w-12" /></div>
                    <h3 className="mt-2 break-words text-lg font-extrabold leading-snug tracking-tight text-brand-navy transition-colors duration-300 group-hover:text-brand-violet sm:text-xl lg:text-2xl">{pillar.title}</h3>
                    <p className="muted-copy mt-2 max-w-xl break-words text-sm leading-6 sm:text-base sm:leading-7">{pillar.text}</p>
                  </div>
                </article>)}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7f5ff] via-white to-[#f8faff] py-12 sm:py-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-200/45 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
        <div className="container-shell relative">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Your learning journey"
              title="Small steps. Real progress."
              description="A clear, supportive path helps you move from curious beginner to confident learner."
              centered
            />
          </div>

          <div className="relative mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
            {[
              { number: '01', icon: Compass, title: 'Choose your subject', text: 'Explore our language and technology classes and find the subject that fits your goals.', label: 'FIND YOUR FIT', tone: 'from-sky-500 to-cyan-400', soft: 'bg-sky-50', ink: 'text-sky-700', glow: 'group-hover:shadow-sky-200/70' },
              { number: '02', icon: BookOpenCheck, title: 'Learn and practise', text: 'Build understanding with clear explanations, guided activities and practical examples.', label: 'BUILD YOUR SKILLS', tone: 'from-violet-600 to-fuchsia-400', soft: 'bg-violet-50', ink: 'text-violet-700', glow: 'group-hover:shadow-violet-200/70' },
              { number: '03', icon: Target, title: 'Grow with confidence', text: 'Keep practising, ask questions and celebrate each new skill you master.', label: 'MAKE PROGRESS', tone: 'from-amber-500 to-orange-400', soft: 'bg-amber-50', ink: 'text-amber-700', glow: 'group-hover:shadow-amber-200/70' },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={index * 0.12} className="h-full min-w-0">
                  <article className={'group relative h-full overflow-hidden rounded-[1.75rem] border border-white bg-white/90 p-6 shadow-[0_12px_40px_rgba(39,35,86,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(39,35,86,0.13)] sm:p-7 ' + step.glow}>
                    <div aria-hidden="true" className={'absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ' + step.tone} />
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className={'flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-2xl ' + step.soft}>
                        <span className={'flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105 ' + step.tone}>
                          <Icon size={24} strokeWidth={2.1} />
                        </span>
                      </div>
                      <span className={'mt-1 rounded-full px-3 py-1.5 text-[10px] font-black tracking-[0.14em] ' + step.soft + ' ' + step.ink}>{step.label}</span>
                    </div>
                    <div className="relative mt-7">
                      <p className={'text-xs font-black tracking-[0.2em] ' + step.ink}>STEP {step.number}</p>
                      <h3 className="mt-2 text-xl font-extrabold leading-snug tracking-tight text-brand-navy sm:text-2xl">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                    </div>
                    <div aria-hidden="true" className={'mt-7 h-1 w-12 rounded-full bg-gradient-to-r transition-all duration-300 group-hover:w-20 ' + step.tone} />
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-9 text-center sm:mt-11">
            <Link href="/classes" className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand-violet px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(91,63,190,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-navy hover:shadow-[0_16px_32px_rgba(35,31,85,0.24)]">
              Explore our classes <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14">
        <div className="container-shell">
          <Reveal>
            <div className="cta-panel relative overflow-hidden rounded-[2rem] px-6 py-10 text-white shadow-[0_30px_85px_rgba(30,27,93,0.22)] sm:px-10 sm:py-14 lg:px-14">
              <div aria-hidden="true" className="absolute -right-12 -top-28 h-80 w-80 rounded-full border border-white/15" />
              <div aria-hidden="true" className="absolute right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-white/10" />
              <div aria-hidden="true" className="absolute -bottom-24 left-[40%] h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-amber-200"><WandSparkles size={14} /> Your next step starts here</span>
                  <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">A brighter future begins with a lesson.</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">Choose a subject, meet a new challenge and build skills with guidance along the way.</p>
                </div>
                <Link href="/classes" className="button-primary group relative min-h-[54px] shrink-0 !px-6">Choose a class <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
