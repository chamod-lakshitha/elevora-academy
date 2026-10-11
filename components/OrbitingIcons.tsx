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
    : 'h-[172px] w-[172px] sm:h-[210px] sm:w-[210px]';
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
          <span className={'hero-orbit-counter flex h-10 w-10 items-center justify-center rounded-2xl shadow-xl sm:h-11 sm:w-11 ' + starStyle}>
            <Sparkles size={21} />
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
