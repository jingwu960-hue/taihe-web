"use client";

import { ArrowUp,MessageSquare, Phone } from "lucide-react";
import { useEffect,useState } from "react";

import { siteConfig } from "@/config/site";

import { Button } from "./button";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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
          className="w-12 h-12 rounded-full shadow-lg transition-opacity duration-300"
          onClick={scrollToTop}
        >
          <ArrowUp className="size-5" />
          <span className="sr-only">返回顶部</span>
        </Button>
      )}
    </div>
  );
}
