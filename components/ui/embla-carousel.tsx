"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

interface Banner {
  title: string;
  description: string;
  image: string;
}

interface EmblaCarouselProps {
  banners: Banner[];
  defaultPlaceholder: string;
}

export function EmblaCarousel({ banners, defaultPlaceholder }: EmblaCarouselProps) {
  const [imageLoadError, setImageLoadError] = useState<Record<number, boolean>>({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 700 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            autoplay.play();
          } else {
            autoplay.stop();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        autoplay.stop();
      } else {
        const section = sectionRef.current;
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) autoplay.play();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [emblaApi]);

  const handleMouseEnter = useCallback(() => {
    emblaApi?.plugins()?.autoplay?.stop();
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    emblaApi?.plugins()?.autoplay?.play();
  }, [emblaApi]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  const handleImageError = (index: number) => {
    setImageLoadError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="首页核心业务展示轮播图"
    >
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {banners.map((banner, index) => {
            const imageUrl = banner.image && !imageLoadError[index] ? banner.image : defaultPlaceholder;
            const isActive = index === selectedIndex;

            return (
              <div
                key={index}
                className="min-w-full relative h-full flex-[0_0_100%]"
                role="group"
                aria-roledescription="slide"
                aria-label={`第 ${index + 1} 张，共 ${banners.length} 张: ${banner.title}`}
                aria-hidden={!isActive}
              >
                <div className="absolute inset-0">
                  <img
                    src={imageUrl}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(index)}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-brand-foreground/80" />
                </div>

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white max-w-3xl px-4">
                    {isActive && (
                      <>
                        <h1
                          key={`title-${index}-${selectedIndex}`}
                          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-appear"
                        >
                          {banner.title}
                        </h1>
                        <p
                          key={`desc-${index}-${selectedIndex}`}
                          className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 animate-appear"
                          style={{ animationDelay: "0.2s" }}
                        >
                          {banner.description}
                        </p>
                        <div
                          key={`btns-${index}-${selectedIndex}`}
                          className="flex gap-4 justify-center flex-wrap animate-appear"
                          style={{ animationDelay: "0.4s" }}
                        >
                          <Button size="lg" variant="sweet" asChild>
                            <Link href="/cooperation">立即咨询</Link>
                          </Button>
                          <Button size="lg" variant="outlineBrand" asChild className="border-white/50 text-white hover:bg-white/20">
                            <Link href="/products">了解产品</Link>
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="上一张"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="下一张"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-white w-8" : "bg-white/40 hover:bg-white/70 w-3"
            }`}
            aria-label={`跳转到第 ${index + 1} 张`}
            aria-current={index === selectedIndex ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
}
