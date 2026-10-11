import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, Award, CheckCircle2, Clock3, Compass,
  GraduationCap, HeartHandshake, Lightbulb, Quote, Target,
  BookOpen, Languages, Code2, MonitorPlay, Users,
} from 'lucide-react';
import { Reveal, Stagger } from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Elevora Academy | Teaching That Helps You Grow',
  description: 'Meet Elevora Academy, an online learning space focused on clear teaching, guided practice and helping learners grow through language and technology classes.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Elevora Academy', description: 'Learn about our learner-first approach to practical online language and coding classes.', type: 'website', ...(absoluteUrl('/about') ? { url: absoluteUrl('/about') } : {}) },
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

const teachingStaff = [
  {
    name: 'Amelia Carter',
    role: 'English Language Educator',
    qualification: 'BA in English Language & Communication',
    experience: '8 years teaching experience',
    subjects: 'English · Communication · Writing',
    initials: 'AC',
    tone: 'from-sky-500 to-blue-700',
    icon: Languages,
    bio: 'Helps learners communicate clearly through practical activities, conversation and supportive feedback.',
  },
  {
    name: 'Sophie Laurent',
    role: 'French Language Instructor',
    qualification: 'Diploma in French Language Studies',
    experience: '6 years teaching experience',
    subjects: 'French · Pronunciation · Grammar',
    initials: 'SL',
    tone: 'from-violet-500 to-fuchsia-700',
    icon: BookOpen,
    bio: 'Makes French approachable with step-by-step explanations, everyday vocabulary and speaking practice.',
  },
  {
    name: 'Daniel Weber',
    role: 'German Language Tutor',
    qualification: 'BA in Modern Languages',
    experience: '5 years teaching experience',
    subjects: 'German · Beginner Language Skills',
    initials: 'DW',
    tone: 'from-amber-500 to-orange-700',
    icon: Users,
    bio: 'Builds learner confidence through structured lessons, useful expressions and real-life examples.',
  },
  {
    name: 'Ethan Brooks',
    role: 'Programming Instructor',
    qualification: 'BSc in Computer Science',
    experience: '7 years teaching experience',
    subjects: 'Python · Java · Programming Basics',
    initials: 'EB',
    tone: 'from-teal-500 to-cyan-800',
    icon: Code2,
    bio: 'Turns coding concepts into manageable projects and encourages learners to solve problems independently.',
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        variant="about"
        eyebrow="A little about our academy"
        title="Teaching that opens"
        highlight="doors to possibility."
        description="At Elevora Academy, learning is more than completing a course. It is asking questions, practising with purpose and gaining the confidence to use what you learn in real life."
        primaryLabel="Explore our classes"
        primaryHref="/classes"
        secondaryLabel="Back to home"
        secondaryHref="/"
        proofs={["Learners come first", "Practice with purpose"]}
      />

      <section className="section-space relative overflow-hidden bg-white">
        <div aria-hidden="true" className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="container-shell relative grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionHeading eyebrow="Our purpose" title="Clear teaching. Confident learners." description="We want every learner to feel welcome to ask questions, take their time, practise and discover what they are capable of." titleClassName="max-w-[18ch] text-[clamp(1.65rem,5.5vw,3rem)] leading-[1.12] tracking-[-0.035em] break-words [overflow-wrap:anywhere] sm:max-w-none sm:text-4xl lg:text-5xl" />
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
              <article className="group h-full rounded-[1.7rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-sm"><Target size={23} /></span>
                <h3 className="mt-5 text-xl font-extrabold text-brand-navy">Our mission</h3>
                <p className="muted-copy mt-3 text-sm">To make skill-building feel achievable through clear teaching, flexible learning and a supportive learner experience.</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-brand-blue transition-all duration-300 group-hover:w-20" />
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-white">
        <div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />
        <div className="container-shell relative">
          <SectionHeading
            eyebrow="Meet the educators"
            title="The people behind your progress"
            description="Our sample teaching team represents the supportive, subject-focused educators we want learners to meet at Elevora Academy."
            centered
            titleClassName="leading-[1.2] sm:leading-[1.12]"
          />
          <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" delayChildren={0.05}>
            {teachingStaff.map((teacher, index) => {
              const Icon = teacher.icon;
              return (
                <article id={'teacher-' + teacher.name.toLowerCase().replace(/\s+/g, '-')} key={teacher.name} className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(31,35,80,0.06)] transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_24px_55px_rgba(49,35,122,0.13)]">
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-violet-50 px-5 pb-5 pt-6">
                    <div aria-hidden="true" className="absolute -right-5 -top-8 h-28 w-28 rounded-full border border-white/80" />
                    <div aria-hidden="true" className="absolute -bottom-12 left-1/2 h-24 w-32 -translate-x-1/2 rounded-full bg-white/70 blur-xl" />
                    <div className={'relative mx-auto flex h-24 w-24 items-center justify-center rounded-[1.8rem] bg-gradient-to-br ' + teacher.tone + ' text-2xl font-black tracking-tight text-white shadow-lg ring-4 ring-white transition duration-300 group-hover:rotate-3 group-hover:scale-105'}>
                      {teacher.initials}
                    </div>
                    <div className="relative mt-4 text-center">
                      <h3 className="text-lg font-extrabold tracking-tight text-brand-navy">{teacher.name}</h3>
                      <p className="mt-1 text-sm font-bold text-brand-violet">{teacher.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm leading-6 text-slate-600">{teacher.bio}</p>
                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <GraduationCap size={16} className="mt-0.5 shrink-0 text-brand-violet" />
                        <span>{teacher.qualification}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <MonitorPlay size={16} className="mt-0.5 shrink-0 text-brand-violet" />
                        <span>{teacher.experience}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Icon size={16} className="mt-0.5 shrink-0 text-brand-violet" />
                        <span>{teacher.subjects}</span>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Educator profile 0{index + 1}
                    </div>
                  </div>
                </article>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-slate-50/80">
        <div className="container-shell relative">
          <SectionHeading eyebrow="What guides our teaching" title="A supportive place to learn and grow" description="We believe the best learning happens when clear explanations meet meaningful practice and encouragement." centered titleClassName="leading-[1.28] sm:leading-[1.18] lg:leading-[1.18]" />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3" delayChildren={0.03}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="group h-full overflow-hidden rounded-[1.7rem] border border-slate-200/70 bg-white shadow-[0_5px_22px_rgba(20,35,75,0.035)] transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_24px_60px_rgba(49,35,122,0.12)]">
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
          <SectionHeading eyebrow="The learning experience" title="Guidance at every step" description="From the first question to the final practice task, we want learning to feel organised, encouraging and connected to your goals." centered titleClassName="leading-tight sm:leading-[1.12] lg:leading-[1.12]" />
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
              <p className="relative mx-auto mt-5 max-w-3xl text-2xl font-bold leading-snug sm:text-3xl">“Great teaching helps you understand today—and feel ready to try more tomorrow.”</p>
              <p className="relative mt-5 text-sm text-white/60">The Elevora Academy approach</p>
              <Link href="/classes" className="button-primary relative mt-8">Find your class <ArrowUpRight size={17} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
