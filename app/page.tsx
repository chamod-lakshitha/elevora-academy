import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, BookOpenCheck, CheckCircle2, Compass,
  MoveUpRight, Sparkles, Target, WandSparkles,
} from 'lucide-react';
import { Reveal, Stagger } from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import HomeCourseCard from '@/components/HomeCourseCard';
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
      <PageHero
        variant="home"
        eyebrow="A brighter way to learn"
        title="Learn boldly."
        highlight="Become limitless."
        description="Big goals begin with one lesson. Build real-world skills, discover new passions and grow with an online learning community made for your next chapter."
        primaryLabel="Explore our classes"
        primaryHref="/classes"
        secondaryLabel="Discover Elelora"
        secondaryHref="/about"
        proofs={["Learn at your pace", "Practical, guided lessons"]}
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
            <SectionHeading eyebrow="Find your path" title="A class can change your next chapter" description="From languages to technology, find learning experiences that turn curiosity into confidence." />
            <Reveal className="shrink-0"><Link href="/classes#class-catalog" aria-label="Explore all classes" className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-brand-violet shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-soft">Explore classes <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link></Reveal>
          </div>
          <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => <div key={course.id} className="h-full"><HomeCourseCard course={course} /></div>)}
          </Stagger>
          <div className="mt-8 flex justify-center">
            <Link href="/classes#class-catalog" className="group inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-extrabold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-brand-violet focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-violet/20">Explore all classes <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
          </div>
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
