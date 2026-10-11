'use client';

import { Children, type ReactNode, useEffect, useState } from 'react';
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

/**
 * Keep the server render and the first browser render identical.
 * Framer Motion is enabled only after hydration so browser motion preferences
 * cannot change the initial DOM and cause a hydration mismatch.
 */
export function Reveal({ children, className = '', delay = 0, animateOnMount = false }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const shouldAnimate = hasMounted && !reduceMotion;

  return (
    <motion.div
      className={className}
      variants={shouldAnimate ? itemVariants : undefined}
      initial={shouldAnimate ? 'hidden' : false}
      animate={shouldAnimate && animateOnMount ? 'visible' : undefined}
      whileInView={shouldAnimate && !animateOnMount ? 'visible' : undefined}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -40px 0px' }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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
  const [hasMounted, setHasMounted] = useState(false);
  const items = Children.toArray(children);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const shouldAnimate = hasMounted && !reduceMotion;

  return (
    <motion.div
      className={className}
      initial={shouldAnimate ? 'hidden' : false}
      whileInView={shouldAnimate ? 'visible' : undefined}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -30px 0px' }}
      variants={shouldAnimate ? {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren } },
      } : undefined}
    >
      {items.map((child, index) => (
        <motion.div key={index} variants={shouldAnimate ? itemVariants : undefined} className="h-full">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
