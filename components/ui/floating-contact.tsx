"use client";

import { ArrowUp, MessageSquare, Phone } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "./button";

export function FloatingContact() {
  // ✅ 使用 useState 惰性初始化代替 effect 中同步 setState
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.pageYOffset > 300;
  });

  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    window.requestAnimationFrame(() => {
      setIsVisible(window.pageYOffset > 300);
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
        <a href="tel:13339842020">
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
