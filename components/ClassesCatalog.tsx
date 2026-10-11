'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Search, SlidersHorizontal, Sparkles, Star, X, CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import CourseCard from '@/components/CourseCard';
import CourseIcon from '@/components/CourseIcon';
import { courses, type Course } from '@/lib/data';

const categories = ['All classes', 'Languages', 'Technology', 'Academic'];

export default function ClassesCatalog() {
  const [category, setCategory] = useState('All classes');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Course | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    const term = search.trim().toLocaleLowerCase();
    return courses.filter((course) => {
      const matchesCategory = category === 'All classes' || course.category === category;
      const searchable = [course.title, course.category, course.level, course.instructor, course.description]
        .join(' ')
        .toLocaleLowerCase();
      return matchesCategory && (!term || searchable.includes(term));
    });
  }, [category, search]);

  const countFor = (item: string) => item === 'All classes'
    ? courses.length
    : courses.filter((course) => course.category === item).length;

  useEffect(() => {
    if (!selected) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelected(null);
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )).filter((element) => !element.hasAttribute('hidden'));
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    const frame = window.requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>('[data-dialog-close]')?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      window.cancelAnimationFrame(frame);
      previousFocus?.focus();
    };
  }, [selected]);

  return (
    <>
      <section className="relative z-20 -mt-6 pb-8 sm:-mt-8 sm:pb-10">
        <div className="container-shell">
          <div id="class-filters" className="rounded-[1.65rem] border border-white/90 bg-white/95 p-3 shadow-[0_20px_60px_rgba(20,35,75,0.10)] backdrop-blur-xl transition-shadow duration-300 sm:p-4">
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
                {search ? (
                  <button type="button" aria-label="Clear class search" onClick={() => setSearch('')} className="rounded-full p-1 text-slate-400 transition hover:bg-violet-50 hover:text-brand-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet">
                    <X size={15} />
                  </button>
                ) : (
                  <SlidersHorizontal size={16} aria-hidden="true" className="shrink-0 text-slate-300" />
                )}
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
            <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-violet-100 bg-gradient-to-r from-white to-violet-50/60 px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm sm:self-auto">
              <Star size={15} className="fill-brand-gold text-brand-gold" />
              <span role="status" aria-live="polite"><strong className="text-brand-navy">{filtered.length}</strong> {filtered.length === 1 ? 'class' : 'classes'} found</span>
            </div>
          </div>

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div layout className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-6">
              {filtered.map((course, index) => (
                <motion.div
                  layout
                  key={course.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' }}
                  className={(filtered.length === 5 && index >= 3 ? (index === 3 ? 'xl:col-start-2 xl:col-span-2' : 'xl:col-start-4 xl:col-span-2') : 'xl:col-span-2') + ' scroll-mt-28'}
                  id={'class-' + course.id}
                >
                  <CourseCard course={course} onQuickView={setSelected} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] border border-dashed border-violet-200 bg-gradient-to-br from-white to-violet-50/60 px-6 py-16 text-center sm:py-20"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-violet shadow-sm"><Search size={25} /></span>
              <h3 className="mt-5 text-xl font-black text-brand-navy">No classes found just yet</h3>
              <p className="mt-2 text-sm text-slate-500">Try another keyword or switch to a different category.</p>
              <button type="button" onClick={() => { setSearch(''); setCategory('All classes'); }} className="button-secondary mt-6">Reset filters <ArrowRight size={16} /></button>
            </motion.div>
          )}
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-shell">
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.25 }}
            className="cta-panel relative overflow-hidden rounded-[2rem] px-6 py-10 text-white shadow-[0_30px_85px_rgba(30,27,93,0.20)] sm:px-10 sm:py-14 lg:px-14"
          >
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
          </motion.div>
        </div>
      </section>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-navy/60 p-4 backdrop-blur-md"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelected(null);
            }}
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="course-dialog-title"
              tabIndex={-1}
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto overscroll-contain rounded-[2rem] bg-white shadow-2xl"
              initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.99 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              <div className={'relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ' + selected.color}>
                <div aria-hidden="true" className="absolute -right-8 -top-14 h-48 w-48 rounded-full border border-white/25" />
                <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-white/25" />
                <div className="relative z-10 rounded-2xl border border-white/40 bg-white/95 p-2 shadow-xl"><CourseIcon icon={selected.icon} /></div>
                <button data-dialog-close type="button" aria-label="Close course details" onClick={() => setSelected(null)} className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/35 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"><X size={18} /></button>
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-violet">{selected.category} · {selected.level}</span>
                <h2 id="course-dialog-title" className="mt-2 text-2xl font-black tracking-tight text-brand-navy">{selected.title}</h2>
                <p className="mt-3 leading-7 text-slate-500">{selected.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-slate-50 p-4"><span className="block text-xs text-slate-500">Instructor</span><b className="mt-1 block text-brand-navy">{selected.instructor}</b></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><span className="block text-xs text-slate-500">Duration</span><b className="mt-1 block text-brand-navy">{selected.duration}</b></div>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                  <span className="text-2xl font-black text-brand-navy">{selected.price}<span className="ml-1 text-xs font-medium text-slate-400">/ course</span></span>
                  <Link href={'/classes/' + selected.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')} onClick={() => setSelected(null)} className="button-primary">Course details <ArrowUpRight size={16} /></Link>
                </div>
                <p className="mt-3 text-xs text-slate-400">Please confirm current availability and course details with Elevora Academy.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
