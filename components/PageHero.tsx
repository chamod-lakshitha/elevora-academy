import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import HeroVisual from '@/components/HeroVisual';

type HeroVariant = 'home' | 'classes' | 'about';

type PageHeroProps = {
  variant: HeroVariant;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  proofs: [string, string];
};

/** Shared typography and spacing, with a unique visual composition for each page. */
export default function PageHero({
  variant,
  eyebrow,
  title,
  highlight,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  proofs,
}: PageHeroProps) {
  return (
    <section className={'page-hero hero-backdrop page-hero-' + variant + ' relative isolate overflow-hidden'}>
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div aria-hidden="true" className="hero-blob hero-blob-violet absolute -right-24 top-[-5rem] h-[28rem] w-[28rem] rounded-full blur-3xl" />
      <div aria-hidden="true" className="hero-blob hero-blob-blue absolute -left-28 bottom-[-6rem] h-[24rem] w-[24rem] rounded-full blur-3xl" />

      <div className="container-shell relative grid grid-cols-1 items-center gap-8 pb-10 pt-10 sm:gap-10 sm:pb-16 sm:pt-14 lg:min-h-[640px] lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-6 xl:gap-10 lg:pb-14 lg:pt-10 xl:pb-16 xl:pt-12">
        <div className="relative z-10 min-w-0 lg:order-1 lg:flex lg:min-h-[540px] lg:flex-col lg:justify-center xl:min-h-[600px]">
          <Reveal animateOnMount>
            <span className="eyebrow hero-eyebrow"><Sparkles size={15} className="text-amber-500" /> {eyebrow}</span>
          </Reveal>
          <Reveal animateOnMount delay={0.08}>
            <h1 className="hero-heading mt-6 max-w-full text-[clamp(2.25rem,4.1vw,4.65rem)] font-black leading-[1.02] tracking-[-0.058em] text-brand-ink sm:mt-7">
              {title}
              <span className="hero-heading-gradient mt-2 block max-w-full">{highlight}</span>
            </h1>
          </Reveal>
          <Reveal animateOnMount delay={0.16}>
            <p className="muted-copy mt-6 max-w-[610px] whitespace-pre-line text-[15px] sm:mt-7 sm:text-lg sm:leading-8">
              {description}
            </p>
          </Reveal>
          <Reveal animateOnMount delay={0.23}>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href={primaryHref} className="button-primary hero-primary-button group min-h-[56px] !px-7">
                {primaryLabel} <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href={secondaryHref} className="button-secondary hero-secondary-button min-h-[56px] !px-6">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-brand-blue"><ArrowUpRight size={15} /></span>
                {secondaryLabel}
              </Link>
            </div>
          </Reveal>
          <Reveal animateOnMount delay={0.3}>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-slate-600 sm:mt-8 sm:gap-x-7 sm:text-sm">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-500" /> {proofs[0]}</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-500" /> {proofs[1]}</span>
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[600px] px-1 pb-5 pt-1 sm:px-5 lg:order-2 lg:px-0 lg:py-6 xl:py-8">
          <HeroVisual variant={variant} />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 -z-10 h-14 w-4/5 -translate-x-1/2 rounded-full bg-violet-950/10 blur-2xl" />
        </div>
      </div>
      <div className="hero-bottom-line absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
