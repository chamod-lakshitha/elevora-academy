import Image from 'next/image';
import Link from 'next/link';
export default function BrandLogo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return <Link href="/" aria-label="Elelora Academy home" className="group inline-flex shrink-0 items-center gap-3">
    <span className="relative block h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition duration-300 group-hover:-rotate-2 group-hover:scale-105 sm:h-14 sm:w-14"><Image src="/logo.png" alt="Elelora Academy logo" fill sizes="56px" className="object-contain p-0.5" priority /></span>
    {!compact && <span className="leading-tight"><span className={'block text-[17px] font-black tracking-tight sm:text-lg ' + (light ? 'text-white' : 'text-brand-navy')}>Elelora <span className={light ? 'text-amber-300' : 'text-brand-violet'}>Academy</span></span><span className={'mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] ' + (light ? 'text-white/65' : 'text-slate-500')}>Learn · Grow · Achieve</span></span>}
  </Link>;
}
