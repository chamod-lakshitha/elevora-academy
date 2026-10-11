import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, CheckCircle2, GraduationCap, Globe2, Sparkles, Play, Code2, Languages, Laptop2 } from 'lucide-react';
import { Reveal, Stagger } from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CourseCard from '@/components/CourseCard';
import { courses, pillars } from '@/lib/data';

const learningAreas = [
  { icon: Languages, label: 'Languages', detail: 'French · English · German', tone: 'bg-amber-100 text-amber-700' },
  { icon: Code2, label: 'Technology', detail: 'Java · Python · Digital skills', tone: 'bg-violet-100 text-violet-700' },
  { icon: Laptop2, label: 'Academic support', detail: 'Study smarter, go further', tone: 'bg-sky-100 text-sky-700' },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="hero-stage relative isolate">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="container-shell relative grid min-h-[610px] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:py-16">
          <Reveal className="relative z-10">
            <span className="eyebrow"><Sparkles size={14} className="text-brand-gold" /> A brighter way to learn</span>
            <h1 className="hero-title mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-[4.65rem]">
              Learn boldly.<br /><span className="hero-title-gradient">Become limitless.</span>
            </h1>
            <p className="muted-copy mt-6 max-w-xl text-base sm:text-lg">Big goals begin with one lesson. Build real-world skills, discover new passions and grow with an online learning community made for your next chapter.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/classes" className="button-primary">Explore our classes <ArrowRight size={17} /></Link>
              <Link href="/about" className="button-secondary"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50"><Play size={11} fill="currentColor" /></span> Discover Elevora</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-slate-600 sm:text-sm">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Learn at your pace</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Practical, guided lessons</span>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative mx-auto w-full max-w-[550px]">
            <div className="hero-art relative overflow-hidden rounded-[2rem] p-4 sm:rounded-[2.5rem] sm:p-5">
              <div className="hero-art-inner relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[1.55rem] p-6 text-white sm:min-h-[455px] sm:rounded-[2rem] sm:p-8">
                <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/15" />
                <div className="absolute -right-8 top-12 h-52 w-52 rounded-full border border-white/15" />
                <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
                <div className="relative flex items-start justify-between gap-4">
                  <div><span className="text-[11px] font-extrabold uppercase tracking-[.22em] text-white/65">Your future starts here</span><h2 className="mt-3 max-w-[270px] text-3xl font-black leading-tight sm:text-4xl">Make room for more.</h2><p className="mt-3 max-w-[260px] text-sm leading-6 text-white/70">More knowledge. More confidence. More possibilities.</p></div>
                  <span className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur"><GraduationCap size={26} /></span>
                </div>
                <div className="relative mx-auto my-5 flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
                  <div className="absolute inset-0 animate-orbit rounded-full border border-dashed border-white/35" />
                  <div className="absolute inset-4 rounded-full bg-white/10" />
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] bg-white text-brand-violet shadow-2xl sm:h-32 sm:w-32"><BookOpen size={58} strokeWidth={1.5} /></div>
                  <span className="floating-chip absolute right-0 top-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient text-brand-navy shadow-lg"><Sparkles size={22} /></span>
                  <span className="absolute bottom-1 left-0 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur"><Globe2 size={20} /></span>
                </div>
                <div className="relative flex items-end justify-between gap-3 border-t border-white/15 pt-5"><div><p className="text-sm font-extrabold">One lesson at a time.</p><p className="mt-1 text-xs text-white/60">A world of skills is waiting.</p></div><span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold">Keep growing ↗</span></div>
              </div>
              <div className="hero-float-card absolute -left-2 top-[35%] flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-3 py-3 shadow-xl backdrop-blur sm:-left-7 sm:px-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><Sparkles size={20} /></span><span><b className="block text-sm text-brand-navy">Curiosity first</b><small className="text-xs text-slate-500">Progress that feels good</small></span>
              </div>
              <div className="hero-float-card absolute -right-2 bottom-8 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-3 py-3 shadow-xl backdrop-blur sm:-right-6 sm:px-4" style={{ animationDelay: '1.2s' }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-brand-violet"><GraduationCap size={20} /></span><span><b className="block text-sm text-brand-navy">Skills for tomorrow</b><small className="text-xs text-slate-500">Start with one class</small></span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 -mt-2">
        <div className="container-shell">
          <div className="quick-strip grid gap-3 rounded-3xl border border-white/80 bg-white/90 p-4 shadow-[0_18px_55px_rgba(29,35,86,0.09)] backdrop-blur-xl sm:grid-cols-3 sm:p-5">
            {learningAreas.map((area, index) => {
              const Icon = area.icon;
              return <Reveal key={area.label} delay={index * 0.06}><Link href="/classes" className="group flex items-center gap-4 rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:bg-slate-50"><span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 ${area.tone}`}><Icon size={23} /></span><span><b className="block text-sm font-extrabold text-brand-navy">{area.label}</b><span className="mt-1 block text-xs leading-5 text-slate-500">{area.detail}</span></span><ArrowUpRight className="ml-auto text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-violet" size={18} /></Link></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Find your next skill" title="A class for your next big thing." description="From first words to first lines of code, find a learning path that turns curiosity into confidence." />
            <Reveal><Link href="/classes" className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-extrabold text-brand-violet transition hover:gap-3">Explore all classes <ArrowRight size={17} /></Link></Reveal>
          </div>
          <Stagger className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{courses.slice(0, 3).map(course => <div key={course.id}><CourseCard course={course} /></div>)}</Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f6f7ff]">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" aria-hidden="true" />
        <div className="container-shell section-space relative">
          <SectionHeading eyebrow="The Elevora difference" title="Learning should open doors." description="A little support can unlock a lot of potential. We make learning feel clear, flexible and full of possibility." centered />
          <div className="mt-10 grid gap-5 md:grid-cols-3">{pillars.map((pillar, index) => <Reveal key={pillar.title} delay={index * 0.08}><article className="feature-card h-full rounded-3xl border border-white bg-white/90 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(55,48,163,.10)]"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-100 text-2xl font-black text-brand-violet">{pillar.icon}</span><h3 className="mt-5 text-xl font-extrabold text-brand-navy">{pillar.title}</h3><p className="muted-copy mt-3 text-sm">{pillar.text}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell"><Reveal><div className="cta-panel relative overflow-hidden rounded-[2rem] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16"><div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/15" /><div className="absolute right-12 top-12 h-36 w-36 rounded-full border border-white/10" /><div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-2xl"><span className="text-xs font-extrabold uppercase tracking-[.2em] text-amber-200">Your next chapter</span><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Your potential has no finish line.</h2><p className="mt-4 max-w-xl leading-7 text-white/75">Choose a class, bring your curiosity and take the next step towards something brilliant.</p></div><Link href="/classes" className="button-primary relative shrink-0">Find your class <ArrowUpRight size={17} /></Link></div></div></Reveal></div>
      </section>
    </main>
  );
}
