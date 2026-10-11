'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Search, SlidersHorizontal, Sparkles, Star, X,
} from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import PageHero from '@/components/PageHero';
import { courses, type Course } from '@/lib/data';

const categories = ['All classes', 'Languages', 'Technology', 'Academic'];

export default function ClassesPage() {
  const [category, setCategory] = useState('All classes');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Course | null>(null);

  const filtered = useMemo(
    () => courses.filter((course) => (
      (category === 'All classes' || course.category === category)
      && (course.title + ' ' + course.instructor + ' ' + course.description).toLowerCase().includes(search.toLowerCase())
    )),
    [category, search],
  );

  const countFor = (item: string) => item === 'All classes'
    ? courses.length
    : courses.filter((course) => course.category === item).length;

  return (
    <main className="overflow-hidden">
      <PageHero
        variant="classes"
        eyebrow="Discover your next skill"
        title="Find your next"
        highlight="big opportunity."
        description={'Explore welcoming classes in languages, technology\nand academics. Find a learning path that fits your goals\nand start making progress with greater confidence.'}
        primaryLabel="Browse classes"
        primaryHref="#class-filters"
        secondaryLabel="Our approach"
        secondaryHref="/about"
        proofs={["Learn from anywhere", "Guided at every step"]}
      />

      <section className="relative z-20 -mt-6 pb-8 sm:-mt-8 sm:pb-10">
        <div className="container-shell">
          <div id="class-filters" className="rounded-[1.65rem] border border-white/90 bg-white/95 p-3 shadow-[0_20px_60px_rgba(20,35,75,0.10)] backdrop-blur-xl sm:p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter classes by category">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={category === item}
                    className={'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-extrabold transition duration-300 focus:outline-none focus:ring-4 focus:ring-brand-violet/15 ' + (category === item
                      ? 'bg-brand-navy text-white shadow-md shadow-blue-950/15'
                      : 'bg-slate-50 text-slate-600 hover:-translate-y-0.5 hover:bg-violet-50 hover:text-brand-violet')}
                  >
                    {item}
                    <span className={'rounded-full px-1.5 py-0.5 text-[10px] ' + (category === item ? 'bg-white/15 text-white/85' : 'bg-slate-200/70 text-slate-500')}>{countFor(item)}</span>
                  </button>
                ))}
              </div>
              <label className="flex min-w-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-400 transition focus-within:border-brand-violet focus-within:ring-4 focus-within:ring-brand-violet/10 lg:w-[330px]">
                <Search size={18} className="shrink-0 text-brand-violet" />
                <input
                  aria-label="Search classes"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search classes or instructors..."
                  className="min-w-0 w-full bg-transparent text-sm text-brand-ink outline-none placeholder:text-slate-400"
                />
                <SlidersHorizontal size={16} className="shrink-0 text-slate-300" />
              </label>
            </div>
          </div>
        </div>
      </section>

      <section id="class-catalog" className="section-space relative scroll-mt-24 overflow-hidden bg-white">
        <div aria-hidden="true" className="absolute -right-28 top-16 h-80 w-80 rounded-full bg-violet-100/45 blur-3xl" />
        <div aria-hidden="true" className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-sky-100/45 blur-3xl" />
        <div className="container-shell relative">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow"><Sparkles size={14} className="text-amber-500" /> Choose your path</span>
              <h2 className="section-title mt-5">A little curiosity goes a long way.</h2>
              <p className="muted-copy mt-3 max-w-2xl">Browse the options below and find the class that feels right for your next step.</p>
            </div>
            <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm sm:self-auto">
              <Star size={15} className="fill-brand-gold text-brand-gold" />
              <span><strong className="text-brand-navy">{filtered.length}</strong> {filtered.length === 1 ? 'class' : 'classes'} found</span>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-6">
            {filtered.map((course, index) => <div key={course.id} className={filtered.length === 5 && index >= 3 ? (index === 3 ? "xl:col-start-2 xl:col-span-2" : "xl:col-start-4 xl:col-span-2") : "xl:col-span-2"}><CourseCard course={course} onQuickView={setSelected} /></div>)}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50/80 px-6 py-16 text-center sm:py-20">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-violet shadow-sm"><Search size={25} /></span>
              <h3 className="mt-5 text-xl font-black text-brand-navy">No classes found just yet</h3>
              <p className="mt-2 text-sm text-slate-500">Try another keyword or switch to a different category.</p>
              <button type="button" onClick={() => { setSearch(''); setCategory('All classes'); }} className="button-secondary mt-6">Reset filters <ArrowRight size={16} /></button>
            </div>
          )}
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-shell">
          <div className="cta-panel relative overflow-hidden rounded-[2rem] px-6 py-10 text-white shadow-[0_30px_85px_rgba(30,27,93,0.20)] sm:px-10 sm:py-14 lg:px-14">
            <div aria-hidden="true" className="absolute -right-12 -top-28 h-80 w-80 rounded-full border border-white/15" />
            <div aria-hidden="true" className="absolute -bottom-24 left-[38%] h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-amber-200"><Sparkles size={14} /> Your next step starts here</span>
                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">Ready to turn curiosity into progress?</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">Choose a class, discover a new strength and take one small step towards a bigger goal.</p>
              </div>
              <a href="#class-filters" className="button-primary group relative min-h-[54px] shrink-0 !px-6" aria-label="Browse class filters">
                Browse the classes above <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-navy/55 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="course-dialog-title"
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={'relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ' + selected.color}>
                <div aria-hidden="true" className="absolute -right-8 -top-14 h-48 w-48 rounded-full border border-white/25" />
                <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-white/25" />
                <span className="relative text-4xl font-black text-white">{selected.icon}</span>
                <button type="button" aria-label="Close course details" onClick={() => setSelected(null)} className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/35"><X size={18} /></button>
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-violet">{selected.category} · {selected.level}</span>
                <h2 id="course-dialog-title" className="mt-2 text-2xl font-black tracking-tight text-brand-navy">{selected.title}</h2>
                <p className="mt-3 leading-7 text-slate-500">{selected.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-slate-50 p-4"><span className="block text-xs text-slate-500">Instructor</span><b className="mt-1 block text-brand-navy">{selected.instructor}</b></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><span className="block text-xs text-slate-500">Duration</span><b className="mt-1 block text-brand-navy">{selected.duration}</b></div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                  <span className="text-2xl font-black text-brand-navy">{selected.price}<span className="ml-1 text-xs font-medium text-slate-400">/ course</span></span>
                  <button type="button" onClick={() => setSelected(null)} className="button-primary">Sounds good <ArrowUpRight size={16} /></button>
                </div>
                <p className="mt-3 text-xs text-slate-400">Demo preview — enrolment and payments can be connected later.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
