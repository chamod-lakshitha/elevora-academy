import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Course } from '@/lib/data';
import { courseSlug } from '@/lib/seo';

export default function HomeCourseCard({ course }: { course: Course }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white shadow-[0_5px_22px_rgba(7,29,87,0.045)] transition duration-300 hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-[0_22px_55px_rgba(36,31,99,0.12)]"
    >
      <div className={'course-card-art relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br ' + course.color}>
        <div aria-hidden="true" className="absolute -right-7 -top-10 h-36 w-36 rounded-full border border-white/20 transition-transform duration-700 group-hover:rotate-12 group-hover:translate-x-2" />
        <div aria-hidden="true" className="absolute -bottom-16 -left-8 h-36 w-36 rounded-full border border-white/20 transition-transform duration-700 group-hover:-rotate-12 group-hover:-translate-x-2" />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md">{course.category}</span>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-extrabold text-brand-navy">{course.level}</span>
        <span className="relative flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-white/30 bg-white/15 text-xl font-black text-white shadow-lg backdrop-blur-md">{course.icon}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-extrabold leading-snug tracking-tight text-brand-ink transition-colors group-hover:text-brand-violet">{course.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{course.description}</p>
        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            href={'/classes/' + courseSlug(course.title)}
            aria-label={'Explore ' + course.title + ' class'}
            className="group/explore flex items-center justify-between gap-3 rounded-xl px-1 py-1 text-xs font-bold text-brand-violet transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-violet/20"
          >
            <span>Explore class</span>
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-50 text-brand-violet transition duration-300 group-hover/explore:bg-brand-violet group-hover/explore:text-white">
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
