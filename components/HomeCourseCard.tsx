import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Course } from '@/lib/data';
import { courseSlug } from '@/lib/seo';
import CourseArtwork from '@/components/CourseArtwork';

export default function HomeCourseCard({ course }: { course: Course }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white shadow-[0_5px_22px_rgba(7,29,87,0.045)] transition duration-300 hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-[0_22px_55px_rgba(36,31,99,0.12)]"
    >
      <CourseArtwork course={course} size="home" />
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
