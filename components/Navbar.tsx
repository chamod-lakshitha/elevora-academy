'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, BookOpenCheck, Compass, Home, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const links = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/classes', label: 'Classes', icon: BookOpenCheck },
  { href: '/about', label: 'About us', icon: Compass },
];

function isCurrentPage(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';

  return (
    <header className="nav-shell sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between gap-4 sm:gap-5">
        <BrandLogo />

        <nav className="hidden items-center gap-1 rounded-full border border-slate-100 bg-slate-50/80 p-1.5 md:flex" aria-label="Main navigation">
          {links.map((link) => {
            const active = isCurrentPage(pathname, link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={'nav-link group relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-violet/15 ' +
                  (active
                    ? 'nav-link-active bg-white text-brand-violet shadow-sm ring-1 ring-violet-100'
                    : 'text-slate-500 hover:bg-white hover:text-brand-violet')}
              >
                <Icon size={15} strokeWidth={active ? 2.5 : 2} />
                {link.label}
                {active && <span aria-hidden="true" className="absolute -bottom-0.5 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-blue via-brand-violet to-brand-gold" />}
              </Link>
            );
          })}
        </nav>

        <Link href="/classes" className="button-primary hidden !px-5 !py-3 md:inline-flex">
          Get started <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-navy shadow-sm transition hover:border-violet-200 hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-violet/15 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="container-shell grid gap-2 pb-5 md:hidden" aria-label="Mobile navigation">
          {links.map((link) => {
            const active = isCurrentPage(pathname, link.href);
            const Icon = link.icon;
            return (
              <Link
                onClick={() => setOpen(false)}
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={'flex items-center justify-between rounded-2xl border px-4 py-3.5 font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-violet/15 ' +
                  (active
                    ? 'border-violet-100 bg-violet-50 text-brand-violet shadow-sm'
                    : 'border-transparent text-slate-600 hover:border-slate-100 hover:bg-slate-50')}
              >
                <span className="flex items-center gap-3"><Icon size={18} />{link.label}</span>
                {active
                  ? <span className="inline-flex items-center gap-1.5 text-xs font-extrabold"><span className="h-1.5 w-1.5 rounded-full bg-brand-violet" /> Current page</span>
                  : <ArrowUpRight size={16} className="text-slate-400" />}
              </Link>
            );
          })}
          <Link onClick={() => setOpen(false)} href="/classes" className="button-primary mt-1 w-full">
            Get started <ArrowUpRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}
