'use client';

import { useEffect, useState } from 'react';

/**
 * 滚动监听 hook
 * @param threshold 滚动阈值（像素），默认 100
 * @returns isScrolled - 是否滚动超过阈值
 */
export function useScroll(threshold: number = 100) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初始化检查
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isScrolled };
}
