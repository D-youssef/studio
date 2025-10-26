"use client";

import 'animate.css';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

type AnimatedOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  animationName: string;
  delay?: string;
  duration?: string;
  threshold?: number;
  triggerOnce?: boolean;
};

export function AnimatedOnScroll({
  children,
  className,
  animationName,
  delay,
  duration,
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedOnScrollProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const animationClasses = inView
    ? `animate__animated ${animationName} ${delay || ''} ${duration || ''}`
    : 'opacity-0';

  return (
    <div ref={ref} className={cn(animationClasses, className)}>
      {children}
    </div>
  );
}
