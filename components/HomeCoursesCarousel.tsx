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
    track.querySelectorAll<HTMLElement>('[data-course-card]').forEach((card) => resizeObserver?.observe(card));
    const frame = window.requestAnimationFrame(updateControls);

    return () => {
      track.removeEventListener('scroll', updateControls);
      window.removeEventListener('resize', updateControls);
      window.cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
    };
  }, [courses.length]);

  const move = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>('[data-course-card]');
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 20;
    const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : Math.max(280, track.clientWidth * 0.8);
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const target = Math.min(maxScroll, Math.max(0, track.scrollLeft + (direction === 'right' ? distance : -distance)));
    track.scrollTo({ left: target, behavior: 'smooth' });
    window.setTimeout(() => {
      const actualMax = Math.max(0, track.scrollWidth - track.clientWidth);
      setCanScrollLeft(track.scrollLeft > 2);
      setCanScrollRight(actualMax - track.scrollLeft > 2);
    }, 250);
  };

  const arrowClasses = 'pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-amber-50/95 text-amber-900 shadow-lg backdrop-blur-sm transition hover:border-amber-300 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-35 disabled:shadow-none disabled:hover:border-amber-200 disabled:hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/40 sm:h-11 sm:w-11';

  return (
    <div>
      <div className="mt-9 flex items-center gap-2 sm:gap-3 xl:block">
        <button
          type="button"
          onClick={() => move('left')}
          aria-label="Previous classes"
          disabled={!canScrollLeft}
          className={`shrink-0 xl:hidden ${arrowClasses.replace('h-10 w-10', 'h-9 w-9')}`}
        >
          <ArrowLeft size={19} />
        </button>

        <div
          ref={trackRef}
          className="flex min-w-0 flex-1 snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:px-0"
          aria-label="All five Elevora Academy classes"
        >
          {courses.slice(0, 5).map((course) => (
            <div
              data-course-card
              key={course.id}
              className="w-full shrink-0 snap-center sm:w-[calc(50%-10px)] sm:snap-start xl:w-[calc(33.333%-13.333px)]"
            >
              <HomeCourseCard course={course} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => move('right')}
          aria-label="Next classes"
          disabled={!canScrollRight}
          className={`shrink-0 xl:hidden ${arrowClasses.replace('h-10 w-10', 'h-9 w-9')}`}
        >
          <ArrowRight size={19} />
        </button>
      </div>

      <div className="mt-1 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-500">Showing {Math.min(courses.length, 5)} classes</p>
        <div className="hidden items-center gap-2 xl:flex">
          <button
            type="button"
            onClick={() => move('left')}
            aria-label="Previous classes"
            disabled={!canScrollLeft}
            className={arrowClasses}
          >
            <ArrowLeft size={19} />
          </button>
          <button
            type="button"
            onClick={() => move('right')}
            aria-label="Next classes"
            disabled={!canScrollRight}
            className={arrowClasses}
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
