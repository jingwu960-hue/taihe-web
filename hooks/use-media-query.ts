'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * 媒体查询 hook
 * @param query 媒体查询字符串，例如 '(min-width: 768px)'
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  const handleChange = useCallback((e: MediaQueryListEvent) => {
    setMatches(e.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query, handleChange]);

  return matches;
}

/**
 * 常用断点 hook
 */
export function useBreakpoints() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  return { isDesktop, isTablet, isMobile };
}
