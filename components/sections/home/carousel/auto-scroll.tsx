import { EmblaCarouselType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'

type UseAutoScrollType = {
  autoScrollIsPlaying: boolean
  toggleAutoScroll: () => void
  onAutoScrollButtonClick: (callback: () => void) => void
}

export const useAutoScroll = (
  emblaApi: EmblaCarouselType | undefined
): UseAutoScrollType => {
  const [autoScrollIsPlaying, setAutoScrollIsPlaying] = useState(false)

  const onAutoScrollButtonClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      autoplay.stop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoScroll = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const playOrStop = autoplay.isPlaying()
      ? autoplay.stop
      : autoplay.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    // 直接设置，移除不必要的 requestAnimationFrame
    setAutoScrollIsPlaying(autoplay.isPlaying())
    
    const handlePlay = () => setAutoScrollIsPlaying(true)
    const handleStop = () => setAutoScrollIsPlaying(false)
    const handleReinit = () => setAutoScrollIsPlaying(autoplay.isPlaying())
    
    emblaApi
      .on('autoplay:play', handlePlay)
      .on('autoplay:stop', handleStop)
      .on('reInit', handleReinit)

    return () => {
      emblaApi
        .off('autoplay:play', handlePlay)
        .off('autoplay:stop', handleStop)
        .off('reInit', handleReinit)
    }
  }, [emblaApi])

  return {
    autoScrollIsPlaying,
    toggleAutoScroll,
    onAutoScrollButtonClick
  }
}

export { default as AutoScroll } from 'embla-carousel-autoplay'
