"use client";

import { ArrowUp, MessageSquare, Phone } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

import { siteConfig } from "@/config/site";

import { Button } from "./button";

/**
 * 节流函数 - 限制函数调用频率
 */
function throttle<T extends (...args: any[]) => any>(func: T, limit: number) {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  
  // 使用 useRef 来保持最新的状态引用，避免闭包问题
  const lastKnownScrollY = useRef(0);
  const ticking = useRef(false);

  // 使用 requestAnimationFrame 来优化滚动处理
  const updateScrollState = useCallback(() => {
    const currentY = lastKnownScrollY.current;
    setIsVisible(currentY > 300);
    ticking.current = false;
  }, []);

  const handleScroll = useCallback(() => {
    lastKnownScrollY.current = window.pageYOffset;
    
    if (!ticking.current) {
      window.requestAnimationFrame(updateScrollState);
      ticking.current = true;
    }
  }, [updateScrollState]);

  // 使用 useCallback 和 useEffect 来确保清理函数正确
  const throttledScroll = useCallback(
    throttle(handleScroll, 100),
    [handleScroll]
  );

  useEffect(() => {
    // 初始检查
    lastKnownScrollY.current = window.pageYOffset;
    setIsVisible(window.pageYOffset > 300);
    
    window.addEventListener("scroll", throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [throttledScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {/* 电话咨询 */}
      <Button
        size="icon"
        className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
        asChild
      >
        <a href={`tel:${siteConfig.contact.phone}`}>
          <Phone className="size-5" />
          <span className="sr-only">电话咨询</span>
        </a>
      </Button>

      {/* 在线留言 */}
      <Button
        size="icon"
        className="w-12 h-12 rounded-full bg-brand-foreground hover:bg-brand-foreground/90 shadow-lg"
        asChild
      >
        <a href="/contact">
          <MessageSquare className="size-5" />
          <span className="sr-only">在线留言</span>
        </a>
      </Button>

      {/* 返回顶部 */}
      {isVisible && (
        <Button
          size="icon"
          className="w-12 h-12 rounded-full shadow-lg transition-all duration-300"
          onClick={scrollToTop}
        >
          <ArrowUp className="size-5" />
          <span className="sr-only">返回顶部</span>
        </Button>
      )}
    </div>
  );
}
