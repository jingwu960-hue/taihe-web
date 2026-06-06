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

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll(autoplayOptions),
  ]);

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { autoScrollIsPlaying, toggleAutoScroll, onAutoScrollButtonClick } =
    useAutoScroll(emblaApi);

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

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = defaultPlaceholder;
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y pinch-zoom">
            {banners.map((banner, index) => (
              <div className="relative flex-[0_0_100%] min-w-0" key={index}>
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
                      <div className="max-w-xl">
                        <h1 className="text-3xl md:text-5xl font-bold text-white  mb-4">
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

        {/* 左侧箭头按钮 */}
        <button
          onClick={() => onAutoScrollButtonClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
          aria-label="上一张轮播图"
        >
          <svg className="w-6 h-6" viewBox="0 0 532 532">
            <path
              fill="currentColor"
              d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            />
          </svg>
        </button>

        {/* 右侧箭头按钮 */}
        <button
          onClick={() => onAutoScrollButtonClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
          aria-label="下一张轮播图"
        >
          <svg className="w-6 h-6" viewBox="0 0 532 532">
            <path
              fill="currentColor"
              d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454 35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
            />
          </svg>
        </button>

        {/* 底部指示器 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3" role="tablist" aria-label="轮播图导航">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                onAutoScrollButtonClick(() => emblaApi?.scrollTo(index));
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
                selectedIndex === index
                  ? 'bg-white w-8 scale-100'
                  : 'bg-white/40 hover:bg-white/70 hover:scale-110'
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
    </section>
  );
};

export default EmblaCarousel;
