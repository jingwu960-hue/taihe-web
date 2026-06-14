import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';

type UseAutoScrollType = {
  autoScrollIsPlaying: boolean;
  toggleAutoScroll: () => void;
  onAutoScrollButtonClick: (callback: () => void) => void;
};

export const useAutoScroll = (
  emblaApi: EmblaCarouselType | undefined
): UseAutoScrollType => {
  // ✅ 使用 useState 惰性初始化避免 effect 中同步 setState
  const [autoScrollIsPlaying, setAutoScrollIsPlaying] = useState(() => {
    if (!emblaApi) return false;
    const autoplay = emblaApi.plugins()?.autoplay;
    return autoplay ? autoplay.isPlaying() : false;
  });

  const onAutoScrollButtonClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      autoplay.stop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoScroll = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    // ✅ 仅在事件回调中 setState，避免同步级联渲染
    const handlePlay = () => setAutoScrollIsPlaying(true);
    const handleStop = () => setAutoScrollIsPlaying(false);

    emblaApi
      .on('autoplay:play', handlePlay)
      .on('autoplay:stop', handleStop)
      .on('reInit', handlePlay);

    return () => {
      emblaApi
        .off('autoplay:play', handlePlay)
        .off('autoplay:stop', handleStop)
        .off('reInit', handlePlay);
    };
  }, [emblaApi]);

  return {
    autoScrollIsPlaying,
    toggleAutoScroll,
    onAutoScrollButtonClick,
  };
};

export { default as AutoScroll } from 'embla-carousel-autoplay';
