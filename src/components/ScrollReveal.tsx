import { useEffect, useRef, useState, useMemo, ReactNode } from 'react';

export type RevealDirection = 'random' | 'left' | 'right' | 'up' | 'bottom-left' | 'bottom-right';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  scaleFrom?: number;
  blurFrom?: number;
  direction?: RevealDirection;
  distance?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 900,
  className = '',
  scaleFrom = 0.94,
  blurFrom = 12,
  direction = 'random',
  distance = 22,
  threshold = 0.08,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Compute initial directional translation with randomized subtle variance
  const { initialX, initialY } = useMemo(() => {
    let chosenDirection = direction;
    if (chosenDirection === 'random') {
      const directions: Array<'left' | 'right' | 'bottom-left' | 'bottom-right' | 'up'> = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'up',
      ];
      chosenDirection = directions[Math.floor(Math.random() * directions.length)];
    }

    switch (chosenDirection) {
      case 'left':
        return { initialX: -distance, initialY: Math.round(distance * 0.25) };
      case 'right':
        return { initialX: distance, initialY: Math.round(distance * 0.25) };
      case 'bottom-left':
        return { initialX: -Math.round(distance * 0.7), initialY: Math.round(distance * 0.75) };
      case 'bottom-right':
        return { initialX: Math.round(distance * 0.7), initialY: Math.round(distance * 0.75) };
      case 'up':
      default:
        return { initialX: 0, initialY: distance };
    }
  }, [direction, distance]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if element is already within viewport on initial mount (e.g. Hero / top of page)
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translate3d(0px, 0px, 0px) scale(1)'
          : `translate3d(${initialX}px, ${initialY}px, 0px) scale(${scaleFrom})`,
        filter: isVisible ? 'blur(0px)' : `blur(${blurFrom}px)`,
        willChange: 'opacity, transform, filter',
      }}
      className={`overflow-visible ${className}`}
    >
      {children}
    </div>
  );
}
