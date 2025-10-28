import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
}

export const useAnimatedCounter = ({ 
  start = 0, 
  end, 
  duration = 2000,
  delay = 0 
}: UseAnimatedCounterOptions) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = Date.now() + delay;
          const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            
            if (elapsed < 0) {
              requestAnimationFrame(animate);
              return;
            }
            
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(start + (end - start) * easeOutQuart);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [start, end, duration, delay, hasAnimated]);

  return { count, elementRef };
};
