'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
const links = [{ href: '/', label: 'Home' }, { href: '/classes', label: 'Classes' }, { href: '/about', label: 'About us' }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
    <div className="container-shell flex h-[76px] items-center justify-between gap-5"><BrandLogo />
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 transition hover:text-brand-violet">{link.label}</Link>)}</nav>
      <Link href="/classes" className="button-primary hidden !px-5 !py-3 md:inline-flex">Get started <ArrowUpRight size={16} /></Link>
      <button className="rounded-xl border border-slate-200 p-2.5 text-brand-navy md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    </div>
    {open && <nav className="container-shell grid gap-1 pb-5 md:hidden" aria-label="Mobile navigation">{links.map(link => <Link onClick={() => setOpen(false)} key={link.href} href={link.href} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50">{link.label}</Link>)}<Link onClick={() => setOpen(false)} href="/classes" className="button-primary mt-2">Get started <ArrowUpRight size={16} /></Link></nav>}
  </header>;
}
