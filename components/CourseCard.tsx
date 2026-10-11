'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock3, Star, Users } from 'lucide-react';
import type { Course } from '@/lib/data';
import Link from 'next/link';
import { courseSlug } from '@/lib/seo';
import CourseArtwork from '@/components/CourseArtwork';

export default function CourseCard({ course, onQuickView }: { course: Course; onQuickView?: (course: Course) => void }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -7 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group h-full overflow-hidden rounded-[1.65rem] border border-violet-100/90 bg-white shadow-[0_8px_28px_rgba(49,35,122,0.07)] transition-all duration-300 hover:border-violet-200 hover:shadow-[0_25px_65px_rgba(49,35,122,0.16)]"
    >
      <CourseArtwork course={course} size="catalog" />

      <div className="flex h-[calc(100%-11rem)] flex-col border-t border-violet-100/80 bg-gradient-to-b from-white via-white to-violet-50/35 p-5 sm:p-6">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Star size={14} className="fill-brand-gold text-brand-gold" />
          <span className="font-extrabold text-slate-800">{course.rating}</span>
          <span>·</span>
          <span>{course.students} learners</span>
        </div>
        <h3 className="mt-3 text-xl font-extrabold tracking-tight text-brand-ink transition-colors duration-200 group-hover:text-brand-violet">{course.title}</h3>
        <p className="mt-2 min-h-[48px] flex-1 text-sm leading-6 text-slate-500">{course.description}</p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><Users size={14} className="text-brand-blue" />{course.instructor}</span>
          <span className="flex items-center gap-1.5"><Clock3 size={14} className="text-brand-violet" />{course.duration}</span>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xl font-black text-brand-navy">{course.price}<span className="ml-1 text-xs font-medium text-slate-400">/ course</span></span>
          <div className="flex items-center gap-2">
          <Link href={'/classes/' + courseSlug(course.title)} aria-label={'Read about ' + course.title} className="inline-flex items-center gap-1.5 rounded-full border border-violet-100 bg-violet-50 px-3 py-2.5 text-xs font-extrabold text-brand-violet transition hover:border-violet-200 hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-violet/20">Course details <ArrowUpRight size={14} /></Link>
          <button
            type="button"
            onClick={() => onQuickView?.(course)}
            aria-label={'View details for ' + course.title}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-extrabold text-brand-navy transition duration-200 hover:border-brand-gold hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-violet/20"
          >
            Quick view <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
