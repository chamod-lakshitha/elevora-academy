import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, Award, CheckCircle2, Clock3, Compass,
  GraduationCap, HeartHandshake, Lightbulb, Quote, Target,
} from 'lucide-react';
import { Reveal, Stagger } from '@/components/Reveal';
import HeroVisual from '@/components/HeroVisual';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'About Elelora Academy',
  description: 'Learn about Elelora Academy’s mission to make online learning accessible, encouraging and practical for curious minds.',
};

const values = [
  { icon: Lightbulb, title: 'Curiosity first', text: 'We encourage questions, exploration and the confidence to try something new.', tint: 'bg-amber-100 text-amber-700' },
  { icon: HeartHandshake, title: 'People at the centre', text: 'Every learner deserves thoughtful support and a learning experience that feels welcoming.', tint: 'bg-sky-100 text-sky-700' },
  { icon: Target, title: 'Progress with purpose', text: 'We focus on useful skills, clear goals and the small wins that build lasting momentum.', tint: 'bg-violet-100 text-violet-700' },
];

const pillars = [
  { icon: GraduationCap, title: 'Expert instructors', text: 'Supportive guidance from people who care about your progress.' },
  { icon: Clock3, title: 'Flexible schedules', text: 'Learning designed to work alongside your life and commitments.' },
  { icon: Award, title: 'Meaningful milestones', text: 'Celebrate progress and build a portfolio of skills over time.' },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="hero-backdrop relative isolate overflow-hidden">
        <div aria-hidden="true" className="hero-grid absolute inset-0" />
        <div aria-hidden="true" className="hero-blob hero-blob-violet absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl" />
        <div aria-hidden="true" className="hero-blob hero-blob-blue absolute -bottom-24 -left-20 h-80 w-80 rounded-full blur-3xl" />

        <div className="container-shell relative grid items-center gap-10 pb-12 pt-12 sm:pb-16 sm:pt-14 lg:min-h-[690px] lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-10 lg:pb-16 lg:pt-12 xl:min-h-[720px] xl:gap-14">
          <Reveal animateOnMount>
            <span className="eyebrow"><Compass size={15} className="text-amber-500" /> The story behind Elelora</span>
            <h1 className="hero-heading mt-6 max-w-[760px] text-[clamp(2.8rem,4.6vw,4.65rem)] font-black leading-[1.02] tracking-[-0.058em] text-brand-ink">
              Education that opens
              <span className="hero-heading-gradient mt-2 block max-w-full">new possibilities.</span>
            </h1>
            <p className="muted-copy mt-6 max-w-2xl text-base sm:mt-7 sm:text-lg sm:leading-8">
              We believe learning should feel accessible, motivating and useful. Elelora Academy helps curious minds build skills, grow confidence and take their next step.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href="/classes" className="button-primary group min-h-[54px] !px-6">Explore our classes <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
              <Link href="/" className="button-secondary min-h-[54px] !px-6"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-brand-blue"><ArrowUpRight size={15} /></span> Back to home</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-slate-600 sm:mt-8 sm:text-sm">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-500" /> Learner-first approach</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-500" /> Skills for real life</span>
            </div>
          </Reveal>

          <Reveal delay={0.12} animateOnMount>
            <div className="relative z-10 mx-auto w-full min-w-0 max-w-[580px] px-1 pb-5 pt-1 sm:px-5 lg:px-0 lg:py-8">
              <HeroVisual />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-white">
        <div aria-hidden="true" className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="container-shell relative grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionHeading eyebrow="Our purpose" title="Learning should open doors, not create barriers." description="We are shaping a flexible online learning space where curiosity is encouraged, progress is celebrated and each new skill can lead to a new possibility." />
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
              <article className="group h-full rounded-[1.7rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-sm"><Compass size={23} /></span>
                <h3 className="mt-5 text-xl font-extrabold text-brand-navy">Our vision</h3>
                <p className="muted-copy mt-3 text-sm">To help learners everywhere unlock their potential through accessible, engaging and forward-looking education.</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-brand-blue transition-all duration-300 group-hover:w-20" />
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="group h-full rounded-[1.7rem] border border-amber-100 bg-gradient-to-br from-amber-50/80 via-white to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-amber-600 shadow-sm"><Target size={23} /></span>
                <h3 className="mt-5 text-xl font-extrabold text-brand-navy">Our mission</h3>
                <p className="muted-copy mt-3 text-sm">To make skill-building feel achievable through clear teaching, flexible learning and a supportive learner experience.</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-brand-gold transition-all duration-300 group-hover:w-20" />
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-slate-50/80">
        <div className="container-shell relative">
          <SectionHeading eyebrow="What guides us" title="Built on progress, powered by possibility" description="Our values shape how we design lessons, support learners and keep improving." centered />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3" delayChildren={0.03}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="group h-full overflow-hidden rounded-[1.7rem] border border-slate-200/70 bg-white shadow-[0_5px_22px_rgba(20,35,75,0.035)] transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_24px_60px_rgba(49,35,122,0.12)]">
                  <div className="h-1.5 bg-gradient-to-r from-brand-blue via-brand-violet to-brand-gold" />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <span className={'flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 group-hover:rotate-3 group-hover:scale-105 ' + value.tint}><Icon size={25} /></span>
                      <span className="text-xs font-black tracking-[0.2em] text-slate-300">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-extrabold tracking-tight text-brand-ink">{value.title}</h3>
                    <p className="muted-copy mt-3 text-sm">{value.text}</p>
                  </div>
                </article>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Designed around learners" title="The support to keep moving forward" description="Learning is personal. We aim to make the journey feel structured, encouraging and relevant to your goals." centered />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.06}>
                  <article className="group flex h-full gap-4 rounded-[1.6rem] border border-slate-200/70 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-soft">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-brand-violet transition group-hover:bg-brand-violet group-hover:text-white"><Icon size={23} /></span>
                    <div><h3 className="font-extrabold text-brand-navy">{pillar.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{pillar.text}</p></div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-shell">
          <Reveal>
            <div className="cta-panel relative overflow-hidden rounded-[2rem] px-6 py-12 text-center text-white shadow-[0_30px_85px_rgba(30,27,93,0.22)] sm:px-12 sm:py-16">
              <div aria-hidden="true" className="absolute -right-12 -top-28 h-80 w-80 rounded-full border border-white/15" />
              <div aria-hidden="true" className="absolute -bottom-24 left-[40%] h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <Quote size={30} className="relative mx-auto text-brand-amber" />
              <p className="relative mx-auto mt-5 max-w-3xl text-2xl font-bold leading-snug sm:text-3xl">“The goal isn’t simply to finish a lesson. It’s to leave feeling ready for what’s next.”</p>
              <p className="relative mt-5 text-sm text-white/60">The Elelora Academy philosophy</p>
              <Link href="/classes" className="button-primary relative mt-8">Take your first step <ArrowUpRight size={17} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
