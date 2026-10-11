'use client';

import {
  ArrowUpRight, BookOpen, Check, Code2, Compass, GraduationCap,
  Languages, Lightbulb, Sparkles, Target,
} from 'lucide-react';
import OrbitingIcons from '@/components/OrbitingIcons';

type HeroVisualProps = {
  variant?: 'home' | 'classes' | 'about';
};

export default function HeroVisual({ variant = 'home' }: HeroVisualProps) {
  return (
    <div className={'hero-visual relative mx-auto w-full max-w-[520px] hero-visual-' + variant}>
      <div aria-hidden="true" className="hero-halo absolute -inset-3 rounded-[2.5rem] sm:-inset-5 sm:rounded-[3rem]" />
      <div aria-hidden="true" className="hero-orb hero-orb-blue absolute -left-2 bottom-12 h-28 w-28 rounded-full blur-2xl sm:-left-5 sm:h-32 sm:w-32" />
      <div aria-hidden="true" className="hero-orb hero-orb-gold absolute -right-1 top-5 h-24 w-24 rounded-full blur-2xl sm:h-28 sm:w-28" />

      <div className="hero-entrance relative rounded-[1.8rem] border border-white/90 bg-white/75 p-2.5 shadow-[0_28px_80px_rgba(43,34,111,0.18)] backdrop-blur-xl sm:rounded-[2.1rem] sm:p-3.5">
        <div className={'hero-panel relative flex h-[445px] flex-col overflow-hidden rounded-[1.4rem] px-4 py-5 text-white sm:h-[525px] sm:rounded-[1.7rem] sm:px-7 sm:py-7 hero-panel-' + variant}>
          <div aria-hidden="true" className="hero-panel-grid absolute inset-0 opacity-30" />
          <div aria-hidden="true" className="absolute -right-24 -top-20 h-72 w-72 rounded-full border border-white/15" />

          {variant === 'home' && (
            <>
              <div aria-hidden="true" className="absolute right-[-2rem] top-20 h-56 w-56 rounded-full border border-white/15" />
              <div aria-hidden="true" className="absolute bottom-[-110px] left-[-70px] h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
              <div aria-hidden="true" className="absolute bottom-[-95px] right-[-45px] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/65 sm:text-xs sm:tracking-[0.24em]">Your future starts here</p>
                  <h2 className="mt-3 max-w-[270px] text-[1.8rem] font-black leading-[1.04] tracking-[-0.045em] sm:text-[2.35rem]">Make room <span className="text-amber-300">for more.</span></h2>
                  <p className="mt-3 max-w-[280px] text-xs leading-5 text-white/75 sm:text-[15px] sm:leading-6">More knowledge. More confidence. More possibilities.</p>
                </div>
                <div aria-hidden="true" className="hero-float hero-float-slow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md sm:h-14 sm:w-14">
                  <GraduationCap size={26} strokeWidth={1.8} />
                </div>
              </div>

              <div className="relative z-10 mx-auto flex min-h-[118px] w-full max-w-[310px] flex-1 items-center justify-center sm:min-h-[132px] md:min-h-[148px] lg:min-h-[170px] xl:min-h-[200px]">
                <div aria-hidden="true" className="hero-rotate absolute h-[96px] w-[96px] rounded-full border border-dashed border-white/35 sm:h-[110px] sm:w-[110px] md:h-[126px] md:w-[126px] lg:h-[146px] lg:w-[146px] xl:h-[176px] xl:w-[176px]" />
                <div aria-hidden="true" className="absolute h-[82px] w-[82px] rounded-full border border-white/15 bg-white/[0.035] sm:h-[94px] sm:w-[94px] md:h-[108px] md:w-[108px] lg:h-[124px] lg:w-[124px] xl:h-[148px] xl:w-[148px]" />
                <div aria-hidden="true" className="hero-pulse absolute h-[68px] w-[68px] rounded-full bg-white/15 blur-lg sm:h-[80px] sm:w-[80px] md:h-[92px] md:w-[92px] lg:h-[104px] lg:w-[104px] xl:h-[126px] xl:w-[126px]" />
                <div className="hero-float hero-float-book relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-[1.1rem] bg-white text-violet-700 shadow-[0_20px_55px_rgba(10,6,45,0.28)] sm:h-[66px] sm:w-[66px] md:h-[76px] md:w-[76px] lg:h-[88px] lg:w-[88px] xl:h-[104px] xl:w-[104px]">
                  <BookOpen className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 xl:h-13 xl:w-13" strokeWidth={1.65} />
                </div>
                <OrbitingIcons variant="home" />
              </div>

              <div className="relative z-10 mt-auto border-t border-white/20 pt-4 sm:pt-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div><p className="text-sm font-extrabold">One lesson at a time.</p><p className="mt-1 text-xs text-white/65">A world of skills is waiting.</p></div>
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold text-white/90 backdrop-blur-sm sm:text-[11px]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-300 text-emerald-950"><Check size={12} strokeWidth={3} /></span>
                    Keep growing <ArrowUpRight size={14} className="text-amber-300" />
                  </div>
                </div>
              </div>
            </>
          )}

          {variant === 'classes' && (
            <>
              <div aria-hidden="true" className="absolute bottom-[-100px] right-[-80px] h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
              <div className="relative z-10 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/60">Your learning dashboard</p>
                  <h2 className="mt-3 max-w-[300px] text-2xl font-black leading-tight sm:text-3xl">Find your next <span className="text-amber-300">favourite skill.</span></h2>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-amber-200"><Compass size={25} /></span>
              </div>

              <div className="relative z-10 mt-6 rounded-2xl border border-white/15 bg-white/[0.08] p-3.5 backdrop-blur-sm sm:p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/60">Explore pathways</span>
                  <span className="rounded-full bg-violet-300/15 px-2.5 py-1 text-[10px] font-bold text-violet-100">Made for you</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="hero-float hero-float-card-one rounded-xl border border-white/15 bg-white/10 p-3">
                    <Languages size={22} className="text-amber-300" />
                    <p className="mt-3 text-xs font-extrabold sm:text-sm">Languages</p>
                    <p className="mt-1 text-[10px] text-white/55">Find your voice</p>
                  </div>
                  <div className="hero-float hero-float-card-two rounded-xl border border-white/15 bg-white/10 p-3">
                    <Code2 size={22} className="text-violet-200" />
                    <p className="mt-3 text-xs font-extrabold sm:text-sm">Technology</p>
                    <p className="mt-1 text-[10px] text-white/55">Build something</p>
                  </div>
                  <div className="hero-float hero-float-card-three rounded-xl border border-white/15 bg-white/10 p-3">
                    <BookOpen size={22} className="text-violet-200" />
                    <p className="mt-3 text-xs font-extrabold sm:text-sm">Academic</p>
                    <p className="mt-1 text-[10px] text-white/55">Grow with purpose</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-4 overflow-hidden rounded-full border border-white/15 bg-white/10 p-1">
                <div className="hero-progress h-2 rounded-full bg-gradient-to-r from-amber-300 via-violet-300 to-fuchsia-300" />
              </div>
              <div className="relative z-10 mt-auto flex items-center justify-between gap-3 border-t border-white/20 pt-4">
                <span className="text-xs font-bold text-white/75">Explore. Practise. Progress.</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-200"><Sparkles size={14} /> Start anywhere</span>
              </div>
            </>
          )}

          {variant === 'about' && (
            <>
              <div aria-hidden="true" className="absolute bottom-[-90px] left-[-70px] h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/60">Our promise to learners</p>
                  <h2 className="mt-3 max-w-[290px] text-2xl font-black leading-tight sm:text-3xl">A journey built around <span className="text-amber-300">you.</span></h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-amber-200"><Lightbulb size={24} /></div>
              </div>

              <div className="relative z-10 mt-6 rounded-2xl border border-white/15 bg-white/[0.07] p-4 sm:p-5">
                                <div className="relative flex items-center gap-3.5">
                  <span className="hero-float hero-float-card-one relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200/40 bg-amber-300 text-brand-navy shadow-lg"><Compass size={19} /></span>
                  <span><b className="block text-sm font-extrabold">Discover</b><small className="mt-1 block text-xs text-white/60">Find a direction that inspires you.</small></span>
                </div>
                <div className="relative mt-4 flex items-center gap-3.5">
                  <span className="hero-float hero-float-card-two relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-violet-200"><BookOpen size={19} /></span>
                  <span><b className="block text-sm font-extrabold">Develop</b><small className="mt-1 block text-xs text-white/60">Practise new skills with guidance.</small></span>
                </div>
                <div className="relative mt-4 flex items-center gap-3.5">
                  <span className="hero-float hero-float-card-three relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-violet-100"><Target size={19} /></span>
                  <span><b className="block text-sm font-extrabold">Achieve</b><small className="mt-1 block text-xs text-white/60">Turn steady progress into confidence.</small></span>
                </div>
              </div>

              <div className="relative z-10 mt-auto flex items-center justify-between gap-3 border-t border-white/20 pt-4">
                <span className="text-xs font-bold text-white/75">Every learner. Every next step.</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-300/15 px-3 py-1.5 text-xs font-extrabold text-violet-100"><Check size={13} /> Progress matters</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
