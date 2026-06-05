"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { cn } from "@/lib/utils";

interface NavigationItem {
  title: string;
  href: string;
}

interface NavigationProps {
  items?: NavigationItem[];
  className?: string;
}

export default function Navigation({

  items = [
    { title: "首页", href: "/" },
    { title: "关于我们", href: "/about" },
    { title: "产品中心", href: "/products" },
    { title: "基地展示", href: "/orchard" },
    { title: "合作案例", href: "/cases" },
    { title: "新闻资讯", href: "/news" },
    { title: "招商合作", href: "/cooperation" },
    { title: "联系我们", href: "/contact" },
  ],
  className,
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("hidden md:flex items-center space-x-1", className)}>
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 relative",
              isActive
                ? "text-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            {item.title}
            {isActive && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
