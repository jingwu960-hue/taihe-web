"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function Counter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // 边界条件处理
  const safeTarget = Math.max(0, target);
  const safeDuration = Math.max(100, duration);

  useEffect(() => {
    // 已经动画过，直接显示目标值
    if (hasAnimated) {
      setCount(safeTarget);
      return;
    }
    
    // 目标值为0，直接显示
    if (safeTarget === 0) {
      setCount(0);
      setHasAnimated(true);
      return;
    }

    // 使用 Intersection Observer 只在可见时播放动画
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          let startTime: number;
          let animationFrame: number;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / safeDuration, 1);
            
            // 减少重渲染次数：只在整数变化时更新
            const currentCount = Math.floor(progress * safeTarget);
            setCount(currentCount);
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            } else {
              setCount(safeTarget);
              setHasAnimated(true);
            }
          };

          animationFrame = requestAnimationFrame(animate);
          
          // 清理
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
