'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

/**
 * Intersection Observer hook
 * 用于监听元素是否进入视口
 */
export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0.1,
    once = false,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observedElement = useRef<Element | null>(null);
  const hasIntersected = useRef(false);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setEntry(entry);
      const intersecting = entry.isIntersecting;
      
      if (once && intersecting) {
        if (!hasIntersected.current) {
          hasIntersected.current = true;
          setIsIntersecting(true);
        }
      } else {
        setIsIntersecting(intersecting);
      }
    },
    [once]
  );

  const observerRef = useCallback(
    (node: Element | null) => {
      if (observedElement.current) {
        observedElement.current = null;
      }
      
      if (node) {
        observedElement.current = node;
      }
    },
    []
  );

  useEffect(() => {
    if (!observedElement.current) return;

    const observer = new IntersectionObserver(observerCallback, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(observedElement.current);

    return () => {
      observer.disconnect();
    };
  }, [observerCallback, root, rootMargin, threshold]);

  return {
    ref: observerRef,
    isIntersecting,
    entry,
  };
}
