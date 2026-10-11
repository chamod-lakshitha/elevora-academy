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

      <section className="section-space relative overflow-hidden bg-white">
        <div aria-hidden="true" className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
        <div className="container-shell relative">
          <SectionHeading eyebrow="The Elevora teaching approach" title="Every learner deserves to thrive" description="Good teaching makes learning feel clear, encouraging and achievable. We focus on understanding, practice and progress—not just getting through a lesson." centered />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3" delayChildren={0.02}>
            {pillars.map((pillar, index) => <article key={pillar.title} className="pillar-card group h-full rounded-[1.7rem] border border-slate-200/70 bg-white p-6 shadow-[0_5px_22px_rgba(20,35,75,0.035)] transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_24px_60px_rgba(49,35,122,0.12)] sm:p-7">
              <div className="flex items-start justify-between gap-3"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 via-white to-violet-100 text-2xl font-black text-brand-violet transition duration-300 group-hover:rotate-3 group-hover:scale-105">{pillar.icon}</span><span className="text-xs font-black tracking-[0.2em] text-slate-300">0{index + 1}</span></div>
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-brand-ink">{pillar.title}</h3>
              <p className="muted-copy mt-3 text-sm">{pillar.text}</p>
              <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-brand-blue via-brand-violet to-brand-gold transition-all duration-500 group-hover:w-20" />
            </article>)}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f5ff] py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-violet-100/70 blur-3xl" />
        <div className="container-shell relative">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Your learning journey"
              title="Small steps. Real progress."
              description="A clear, supportive path helps you move from curious beginner to confident learner."
              centered
            />
          </div>
          <div className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            <div aria-hidden="true" className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-7 hidden h-[2px] rounded-full bg-gradient-to-r from-sky-300 via-violet-300 to-amber-300 md:block" />
            {[
              { number: '01', icon: Compass, title: 'Choose your subject', text: 'Explore our language and technology classes and find the subject that fits your goals.', tone: 'bg-sky-100 text-sky-700', line: 'bg-sky-400' },
              { number: '02', icon: BookOpenCheck, title: 'Learn and practise', text: 'Build understanding with clear explanations, guided activities and practical examples.', tone: 'bg-violet-100 text-violet-700', line: 'bg-violet-400' },
              { number: '03', icon: Target, title: 'Grow with confidence', text: 'Keep practising, ask questions and celebrate each new skill you master.', tone: 'bg-amber-100 text-amber-800', line: 'bg-amber-400' },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={index * 0.08} className="relative z-10 min-w-0">
                  <div className="flex h-full flex-col items-center text-center">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-[#f7f5ff] bg-white shadow-[0_5px_18px_rgba(40,30,95,0.10)]">
                      <span className={'flex h-10 w-10 items-center justify-center rounded-full ' + step.tone}><Icon size={20} strokeWidth={2} /></span>
                    </div>
                    <div className="mt-5 flex min-h-5 items-center justify-center gap-3">
                      <span className="text-xs font-black tracking-[0.18em] text-violet-500">{step.number}</span>
                      <span aria-hidden="true" className={'h-1 w-8 rounded-full ' + step.line} />
                    </div>
                    <h3 className="mt-3 min-h-[3.5rem] max-w-xs text-xl font-extrabold leading-snug tracking-tight text-brand-navy">{step.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600 md:min-h-[4.5rem]">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/classes" className="inline-flex items-center gap-2 rounded-full bg-brand-violet px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-violet-900/15 transition hover:-translate-y-0.5 hover:bg-brand-navy">
              Start learning <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-10 sm:pb-12 lg:pb-14">
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
