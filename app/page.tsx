import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, BookOpenCheck, CheckCircle2, Compass,
  MoveUpRight, Sparkles, Target, WandSparkles,
} from 'lucide-react';
import { Reveal, Stagger } from '@/components/Reveal';
import HeroVisual from '@/components/HeroVisual';
import SectionHeading from '@/components/SectionHeading';
import CourseCard from '@/components/CourseCard';
import { courses, pillars } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Learn Boldly. Become Limitless.',
  description: 'Explore engaging online language, technology and academic classes at Elelora Academy. Learn at your pace, build practical skills and take your next step with confidence.',
  openGraph: {
    title: 'Learn Boldly. Become Limitless. | Elelora Academy',
    description: 'More knowledge. More confidence. More possibilities. Find your next class at Elelora Academy.',
    images: [{ url: '/logo.png', alt: 'Elelora Academy logo' }],
    type: 'website',
  },
};

const benefits = [
  { icon: Compass, title: 'Learn your way', text: 'Flexible online learning' },
  { icon: BookOpenCheck, title: 'Build real skills', text: 'Practical, guided lessons' },
  { icon: Target, title: 'Make steady progress', text: 'Small steps, big growth' },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="hero-backdrop relative isolate">
        <div aria-hidden="true" className="hero-grid absolute inset-0" />
        <div aria-hidden="true" className="hero-blob hero-blob-violet absolute -right-24 top-[-5rem] h-[28rem] w-[28rem] rounded-full blur-3xl" />
        <div aria-hidden="true" className="hero-blob hero-blob-blue absolute -left-28 bottom-[-6rem] h-[24rem] w-[24rem] rounded-full blur-3xl" />
        <div className="container-shell relative grid items-center gap-10 pb-12 pt-12 sm:pb-16 sm:pt-14 lg:min-h-[690px] lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-10 lg:pb-16 lg:pt-12 xl:min-h-[720px] xl:gap-14">
          <div className="relative z-10 min-w-0">
            <Reveal animateOnMount>
              <span className="eyebrow hero-eyebrow"><Sparkles size={15} className="text-amber-500" /> A brighter way to learn</span>
            </Reveal>
            <Reveal animateOnMount delay={0.08}>
              <h1 className="hero-heading mt-6 max-w-full text-[clamp(2.8rem,4.35vw,4.65rem)] font-black leading-[1.02] tracking-[-0.058em] text-brand-ink sm:mt-7">
                Learn boldly.
                <span className="hero-heading-gradient mt-2 block max-w-full">Become limitless.</span>
              </h1>
            </Reveal>
            <Reveal animateOnMount delay={0.16}>
              <p className="muted-copy mt-6 max-w-[610px] text-[15px] sm:mt-7 sm:text-lg sm:leading-8">
                Big goals begin with one lesson. Build real-world skills, discover new passions and grow with an online learning community made for your next chapter.
              </p>
            </Reveal>
            <Reveal animateOnMount delay={0.23}>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <Link href="/classes" className="button-primary hero-primary-button group min-h-[56px] !px-7">
                  Explore our classes <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/about" className="button-secondary hero-secondary-button min-h-[56px] !px-6">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-brand-blue"><MoveUpRight size={15} /></span>
                  Discover Elelora
                </Link>
              </div>
            </Reveal>
            <Reveal animateOnMount delay={0.3}>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-slate-600 sm:mt-8 sm:gap-x-7 sm:text-sm">
                <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-500" /> Learn at your pace</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-500" /> Practical, guided lessons</span>
              </div>
            </Reveal>
            <Reveal animateOnMount delay={0.37}>
              <div className="mt-7 flex items-center gap-3 border-t border-slate-200/80 pt-5 sm:mt-8 sm:pt-6">
                <div className="flex -space-x-2" aria-hidden="true">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[10px] font-black text-blue-800">EN</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-[10px] font-black text-violet-800">FR</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-[10px] font-black text-amber-800">IT</span>
                </div>
                <p className="text-xs leading-5 text-slate-500 sm:text-sm"><strong className="text-brand-ink">Languages, technology and more.</strong><br className="sm:hidden" /> One place to start something new.</p>
              </div>
            </Reveal>
          </div>
          <div className="relative z-10 mx-auto w-full min-w-0 max-w-[580px] px-1 pb-5 pt-1 sm:px-5 lg:px-0 lg:py-8">
            <HeroVisual />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 -z-10 h-14 w-4/5 -translate-x-1/2 rounded-full bg-violet-950/10 blur-2xl" />
          </div>
        </div>
        <div className="hero-bottom-line absolute inset-x-0 bottom-0 h-px" />
      </section>

      <section aria-label="Learning benefits" className="relative z-20 border-y border-white/80 bg-white/90 shadow-[0_10px_35px_rgba(24,36,74,0.05)] backdrop-blur-xl">
        <div className="container-shell grid gap-0 py-3 sm:grid-cols-3 sm:py-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return <div key={benefit.title} className={'flex items-center gap-3 px-2 py-3 sm:px-5 ' + (index ? 'sm:border-l sm:border-slate-200' : '')}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-100 text-brand-violet"><Icon size={21} /></span>
              <div><p className="text-sm font-extrabold text-brand-ink">{benefit.title}</p><p className="mt-0.5 text-xs text-slate-500">{benefit.text}</p></div>
            </div>;
          })}
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-slate-50/80">
        <div aria-hidden="true" className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-violet-100/55 blur-3xl" />
        <div className="container-shell relative">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Find your path" title="A class can change your next chapter" description="From languages to technology, find learning experiences that turn curiosity into confidence." />
            <Reveal className="shrink-0"><Link href="/classes" className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-brand-violet shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-soft">Browse all classes <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></Reveal>
          </div>
          <Stagger className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {courses.slice(0, 3).map((course) => <div key={course.id} className="h-full"><CourseCard course={course} /></div>)}
          </Stagger>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-white">
        <div aria-hidden="true" className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
        <div className="container-shell relative">
          <SectionHeading eyebrow="The Elelora difference" title="Progress looks different on everyone" description="A great learning experience should be motivating, approachable and practical. We help make every next step feel possible." centered />
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

      <section className="pb-16 sm:pb-20">
        <div className="container-shell">
          <Reveal>
            <div className="cta-panel relative overflow-hidden rounded-[2rem] px-6 py-10 text-white shadow-[0_30px_85px_rgba(30,27,93,0.22)] sm:px-10 sm:py-14 lg:px-14">
              <div aria-hidden="true" className="absolute -right-12 -top-28 h-80 w-80 rounded-full border border-white/15" />
              <div aria-hidden="true" className="absolute right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-white/10" />
              <div aria-hidden="true" className="absolute -bottom-24 left-[40%] h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-amber-200"><WandSparkles size={14} /> Your next step starts here</span>
                  <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">Your next big thing starts with one small step.</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">Find a class that sparks your curiosity. Build a skill you’re proud of. Keep becoming.</p>
                </div>
                <Link href="/classes" className="button-primary group relative min-h-[54px] shrink-0 !px-6">Find your class <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
