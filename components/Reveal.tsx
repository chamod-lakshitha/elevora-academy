'use client';

import { Children, type ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animateOnMount?: boolean;
};

export function Reveal({ children, className = '', delay = 0, animateOnMount = false }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      initial="hidden"
      animate={animateOnMount ? 'visible' : undefined}
      whileInView={animateOnMount ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -40px 0px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
};

export function Stagger({ children, className = '', delayChildren = 0.04 }: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const items = Children.toArray(children);

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -30px 0px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren } },
      }}
    >
      {items.map((child, index) => (
        <motion.div key={index} variants={itemVariants} className="h-full">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
