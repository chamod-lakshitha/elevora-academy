'use client';
import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
const rise: Variants = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ delay }}>{children}</motion.div>;
}
export function Stagger({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>{children}</motion.div>;
}
