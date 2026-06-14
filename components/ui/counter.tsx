"use client";

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function Counter({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  className,
}: CounterProps) {
  // ✅ 使用 useState 惰性初始化代替 effect 中同步 setState
  const safeTarget = Math.max(0, target);
  const safeDuration = Math.max(100, duration);

  // 初始值基于 target 惰性设置：首次渲染时显示 0，进入视图后再动画
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    // 使用 Intersection Observer 只在可见时播放动画
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (startTime === null) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / safeDuration, 1);

            const currentCount = Math.floor(progress * safeTarget);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(safeTarget);
              setHasAnimated(true);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [safeTarget, safeDuration, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
