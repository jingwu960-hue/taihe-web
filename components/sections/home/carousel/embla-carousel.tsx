"use client";

import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import type { BannerItem } from '@/types';

import { usePrevNextButtons } from './arrow-buttons';
import { AutoScroll, useAutoScroll } from './auto-scroll';

type PropType = {
  banners: BannerItem[];
  defaultPlaceholder: string;
  options?: EmblaOptionsType;
  autoplayOptions?: {
    playOnInit?: boolean;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
    delay?: number;
  };
};

/**
 * 首页轮播图组件
 * 展示公司的宣传横幅，支持自动播放、手动切换
 */
const EmblaCarousel: React.FC<PropType> = ({
  banners,
  defaultPlaceholder,
  options = { loop: true },
  autoplayOptions = {
    playOnInit: true,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    delay: 2000,
  },
}) => {
  // 检查是否需要减少动画 - 使用 useState 和 useEffect 来避免 SSR 问题
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 处理空数据边界条件
  if (!banners || banners.length === 0) {
    return (
      <section className="relative w-full overflow-hidden h-[400px] md:h-[500px]">
        <div className="h-full bg-gradient-to-r from-brand-soft-green/20 to-brand-soft-orange/20 flex items-center justify-center">
          <p className="text-muted-foreground">暂无轮播图</p>
        </div>
      </section>
    );
  }

  // 如果用户 prefers reduced motion，禁用自动播放
  const adjustedAutoplayOptions = hasMounted && prefersReducedMotion 
    ? { ...autoplayOptions, playOnInit: false }
    : autoplayOptions;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll(adjustedAutoplayOptions),
  ]);

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { onAutoScrollButtonClick } = useAutoScroll(emblaApi);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // 直接设置，移除不必要的 requestAnimationFrame
    setScrollSnaps(emblaApi.scrollSnapList());
    
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // 添加键盘导航支持
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!emblaApi) return;
    
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onAutoScrollButtonClick(onPrevButtonClick);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onAutoScrollButtonClick(onNextButtonClick);
    }
  }, [emblaApi, onPrevButtonClick, onNextButtonClick, onAutoScrollButtonClick]);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = defaultPlaceholder;
  };

  return (
    <section 
      className="relative w-full overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="轮播图"
      aria-label="公司宣传轮播图"
    >
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef} role="list">
          <div className="flex touch-pan-y pinch-zoom">
            {banners.map((banner, index) => (
              <div 
                className="relative flex-[0_0_100%] min-w-0" 
                key={index}
                role="listitem"
                aria-roledescription="幻灯片"
                aria-label={`第 ${index + 1} 张，共 ${banners.length} 张`}
              >
                <div className="relative h-[400px] md:h-[500px] w-full">
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    fill
                    className="object-cover"
                    onError={handleImageError}
                    priority={index === 0}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-container mx-auto px-4 w-full flex items-center justify-center">
                      <div className="w-full flex flex-col items-center justify-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                          {banner.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90">
                          {banner.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部控制区域 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
          {/* 指示器 */}
          <div className="flex items-center gap-3" role="tablist" aria-label="轮播图导航">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  onAutoScrollButtonClick(() => emblaApi?.scrollTo(index));
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer carousel-dot ${
                  selectedIndex === index
                    ? "bg-white w-8 scale-100"
                    : "bg-white/40"
                }`}
                aria-label={`跳转到第 ${index + 1} 张轮播图`}
                aria-selected={selectedIndex === index}
                role="tab"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onAutoScrollButtonClick(() => emblaApi?.scrollTo(index));
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
