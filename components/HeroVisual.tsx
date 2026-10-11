'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUpRight, BookOpen, Check, GraduationCap } from 'lucide-react';
import OrbitingIcons from '@/components/OrbitingIcons';

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const motionReady = hasMounted && !reduceMotion;
  const float = (distance: number, duration: number, delay = 0) => ({
    y: [0, -distance, 0],
    transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' as const },
  });

  return (
    <div className="hero-visual relative mx-auto w-full max-w-[520px]">
      <div aria-hidden="true" className="hero-halo absolute -inset-3 rounded-[2.5rem] sm:-inset-5 sm:rounded-[3rem]" />
      <div aria-hidden="true" className="hero-orb hero-orb-blue absolute -left-2 bottom-12 h-28 w-28 rounded-full blur-2xl sm:-left-5 sm:h-32 sm:w-32" />
      <div aria-hidden="true" className="hero-orb hero-orb-gold absolute -right-1 top-5 h-24 w-24 rounded-full blur-2xl sm:h-28 sm:w-28" />

      <motion.div
        initial={motionReady ? { opacity: 0, y: 28, scale: 0.965 } : false}
        animate={motionReady ? { opacity: 1, y: 0, scale: 1 } : undefined}
        transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        whileHover={motionReady ? { y: -4, transition: { duration: 0.25 } } : undefined}
        className="relative rounded-[1.8rem] border border-white/90 bg-white/75 p-2.5 shadow-[0_28px_80px_rgba(43,34,111,0.18)] backdrop-blur-xl sm:rounded-[2.1rem] sm:p-3.5"
      >
        <div className="hero-panel relative min-h-[415px] overflow-hidden rounded-[1.4rem] px-4 py-5 text-white sm:min-h-[470px] sm:rounded-[1.7rem] sm:px-7 sm:py-7">
          <div aria-hidden="true" className="hero-panel-grid absolute inset-0 opacity-30" />
          <div aria-hidden="true" className="absolute -right-24 -top-20 h-72 w-72 rounded-full border border-white/15" />
          <div aria-hidden="true" className="absolute right-[-2rem] top-20 h-56 w-56 rounded-full border border-white/15" />
          <div aria-hidden="true" className="absolute bottom-[-110px] left-[-70px] h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
          <div aria-hidden="true" className="absolute bottom-[-95px] right-[-45px] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative z-10 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/65 sm:text-xs sm:tracking-[0.24em]">Your future starts here</p>
              <h2 className="mt-3 max-w-[270px] text-[1.8rem] font-black leading-[1.04] tracking-[-0.045em] sm:text-[2.35rem]">
                Make room <span className="text-amber-300">for more.</span>
              </h2>
              <p className="mt-3 max-w-[280px] text-xs leading-5 text-white/75 sm:text-[15px] sm:leading-6">
                More knowledge. More confidence. More possibilities.
              </p>
            </div>
            <motion.div
              aria-hidden="true"
              animate={motionReady ? float(7, 4.8) : undefined}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md sm:h-14 sm:w-14"
            >
              <GraduationCap size={26} strokeWidth={1.8} />
            </motion.div>
          </div>

          <div className="relative z-10 mx-auto mt-5 flex h-[180px] w-full max-w-[310px] items-center justify-center sm:mt-3 sm:h-[220px]">
            <motion.div
              aria-hidden="true"
              animate={motionReady ? { rotate: 360 } : undefined}
              transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
              className="absolute h-[172px] w-[172px] rounded-full border border-dashed border-white/35 sm:h-[210px] sm:w-[210px]"
            />
            <div aria-hidden="true" className="absolute h-[145px] w-[145px] rounded-full border border-white/15 bg-white/[0.035] sm:h-[175px] sm:w-[175px]" />
            <motion.div
              aria-hidden="true"
              animate={motionReady ? { scale: [1, 1.07, 1], opacity: [0.3, 0.55, 0.3] } : undefined}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute h-[130px] w-[130px] rounded-full bg-white/15 blur-xl sm:h-[155px] sm:w-[155px]"
            />
            <motion.div
              animate={motionReady ? float(7, 4) : undefined}
              className="relative z-10 flex h-[100px] w-[100px] items-center justify-center rounded-[1.8rem] bg-white text-violet-700 shadow-[0_20px_55px_rgba(10,6,45,0.28)] sm:h-[120px] sm:w-[120px]"
            >
              <BookOpen size={56} strokeWidth={1.65} />
            </motion.div>
            <OrbitingIcons variant="home" />
          </div>

          <div className="relative z-10 mt-2 border-t border-white/20 pt-4 sm:mt-3 sm:pt-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div><p className="text-sm font-extrabold">One lesson at a time.</p><p className="mt-1 text-xs text-white/65">A world of skills is waiting.</p></div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold text-white/90 backdrop-blur-sm sm:text-[11px]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-300 text-emerald-950"><Check size={12} strokeWidth={3} /></span>
                Keep growing <ArrowUpRight size={14} className="text-amber-300" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}