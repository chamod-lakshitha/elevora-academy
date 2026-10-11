import Image from 'next/image';
import type { Course } from '@/lib/data';
import CourseIcon from '@/components/CourseIcon';

const backgroundByIcon: Record<string, string> = {
  FR: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1100&q=80',
  EN: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1100&q=80',
  DE: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1100&q=80',
  JAVA: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
  Py: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1100&q=80',
};

type CourseArtworkProps = {
  course: Course;
  size?: 'home' | 'catalog';
};

export default function CourseArtwork({ course, size = 'catalog' }: CourseArtworkProps) {
  const isHome = size === 'home';
  const backgroundImage = backgroundByIcon[course.icon];

  return (
    <div
      className={
        'course-card-art relative isolate flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#171342] via-[#3d247e] to-[#123f61] ' +
        (isHome ? ' h-32' : ' h-44')
      }
    >
      {backgroundImage && (
        <div aria-hidden="true" className="absolute inset-[-10px] z-0 overflow-hidden">
          <Image
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            fill
            unoptimized
            loading="lazy"
            sizes={isHome ? '(max-width: 640px) 80vw, 340px' : '(max-width: 768px) 90vw, 420px'}
            className="object-cover object-center blur-[5px] saturate-[0.8] transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-br from-[#13113d]/75 via-[#33206b]/60 to-[#0b2e4e]/72" />
      <div aria-hidden="true" className="absolute -left-10 bottom-[-4rem] z-[2] h-36 w-36 rounded-full bg-violet-500/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-8 top-[-3rem] z-[2] h-32 w-32 rounded-full bg-amber-300/20 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-8 -top-12 z-[3] h-44 w-44 rounded-full border border-white/25 transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-2 group-hover:rotate-12" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-10 z-[3] h-48 w-48 rounded-full border border-white/20 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-12" />

      <span
        className={
          'absolute left-3 top-3 z-[5] rounded-full border border-white/25 bg-slate-950/35 px-3 py-1.5 font-bold text-white backdrop-blur-md sm:left-4 sm:top-4 ' +
          (isHome ? 'text-[11px]' : 'text-xs')
        }
      >
        {course.category}
      </span>
      <span
        className={
          'absolute right-3 top-3 z-[5] rounded-full border border-white/25 bg-white/95 px-3 py-1.5 font-extrabold text-brand-navy shadow-sm backdrop-blur-md sm:right-4 sm:top-4 ' +
          (isHome ? 'text-[11px]' : 'text-xs')
        }
      >
        {course.level}
      </span>

      <div className="relative z-[5] rounded-[1.7rem] border border-amber-100/50 bg-white/95 p-2.5 shadow-[0_14px_40px_rgba(5,10,35,0.36)] transition duration-300 group-hover:scale-[1.04]">
        <CourseIcon icon={course.icon} size={isHome ? 'card' : 'hero'} />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-12 bg-gradient-to-t from-slate-950/25 to-transparent" />
    </div>
  );
}
