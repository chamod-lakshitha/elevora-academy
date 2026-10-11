'use client';

import { Globe2, Lightbulb, Sparkles } from 'lucide-react';

type OrbitingIconsProps = {
  variant: 'home' | 'about';
};

/** Keeps decorative learning icons moving around a circular path without covering the central illustration. */
export default function OrbitingIcons({ variant }: OrbitingIconsProps) {
  const SecondaryIcon = variant === 'about' ? Lightbulb : Globe2;
  const orbitSize = variant === 'about'
    ? 'h-44 w-44 sm:h-52 sm:w-52'
    : 'h-[110px] w-[110px] sm:h-[126px] sm:w-[126px] md:h-[142px] md:w-[142px] lg:h-[164px] lg:w-[164px] xl:h-[196px] xl:w-[196px]';
  const starStyle = variant === 'about'
    ? 'bg-amber-300 text-brand-navy'
    : 'bg-amber-400 text-blue-950';
  const secondaryStyle = variant === 'about'
    ? 'h-9 w-9 rounded-xl border border-white/20 bg-white/10 text-white'
    : 'h-9 w-9 rounded-xl border border-white/25 bg-white/10 text-white';

  return (
    <div
      aria-hidden="true"
      className={'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ' + orbitSize}
    >
      <div className="hero-orbit-spin absolute inset-0">
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <span className={'hero-orbit-counter flex h-7 w-7 items-center justify-center rounded-lg shadow-xl sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 ' + starStyle}>
            <Sparkles className="h-4 w-4 sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px]" />
          </span>
        </span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <span className={'hero-orbit-counter flex items-center justify-center ' + secondaryStyle}>
            <SecondaryIcon size={18} />
          </span>
        </span>
      </div>
    </div>
  );
}
