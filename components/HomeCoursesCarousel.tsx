'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import HomeCourseCard from '@/components/HomeCourseCard';
import type { Course } from '@/lib/data';

export default function HomeCoursesCarousel({ courses }: { courses: Course[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateControls = () => {
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      setCanScrollLeft(track.scrollLeft > 2);
      setCanScrollRight(maxScroll - track.scrollLeft > 2);
    };

    updateControls();
    track.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateControls) : null;
    resizeObserver?.observe(track);

    return () => {
      track.removeEventListener('scroll', updateControls);
      window.removeEventListener('resize', updateControls);
      resizeObserver?.disconnect();
    };
  }, [courses.length]);

  const move = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>('[data-course-card]');
    const gap = 20;
    const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : 320;
    track.scrollBy({ left: direction === 'right' ? distance : -distance, behavior: 'smooth' });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="mt-9 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="All five Elevora Academy classes"
      >
        {courses.slice(0, 5).map((course) => (
          <div
            data-course-card
            key={course.id}
            className="w-[86%] shrink-0 snap-start sm:w-[calc(50%-10px)] xl:w-[calc(33.333%-13.333px)]"
          >
            <HomeCourseCard course={course} />
          </div>
        ))}
      </div>

      <div className="mt-1 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-500">Showing {Math.min(courses.length, 5)} classes</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => move('left')}
            aria-label="Previous classes"
            disabled={!canScrollLeft}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-800 transition hover:border-amber-300 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-amber-200 disabled:hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/40"
          >
            <ArrowLeft size={19} />
          </button>
          <button
            type="button"
            onClick={() => move('right')}
            aria-label="Next classes"
            disabled={!canScrollRight}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-800 transition hover:border-amber-300 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-amber-200 disabled:hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/40"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
